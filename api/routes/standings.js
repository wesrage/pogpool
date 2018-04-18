import groups from '../../modules/groups'
import { getContestantFromPicks } from '../services/group.service'
import * as statsService from '../services/stats.service'
import * as dao from '../dao'

export default {
   GET(req, res) {
      return Promise.all([dao.loadPicks(), dao.loadDailyStats()])
         .then(([pickSets, dailyStats]) => {
            let contestants = pickSets.map(pickSet => getContestantFromPicks(pickSet, groups))
            const consolidatedStats = statsService.consolidateDailyStats(dailyStats)
            contestants = [
               ...contestants,
               statsService.getBestPicksContestant(groups, consolidatedStats),
            ]
            const standings = statsService.generateStandings(contestants, consolidatedStats)
            const groupMaximums = statsService.calculateGroupMaximums(groups, consolidatedStats)
            const groupMinimums = statsService.calculateGroupMinimums(groups, consolidatedStats)
            const eliminationMap = statsService.getEliminationMap(consolidatedStats)
            const activeCountsByGroup = statsService.calculateActiveCountMap(
               groups,
               consolidatedStats,
               eliminationMap,
            )
            let decoratedStandings = statsService.decorateStandingsPicks(
               standings,
               groupMaximums,
               groupMinimums,
               eliminationMap,
            )
            decoratedStandings = statsService.decorateStandingsPicksWithFinalStatus(
               decoratedStandings,
               activeCountsByGroup,
            )
            const expectedValue = statsService.calculateExpectedValue(groups, consolidatedStats)
            const maxPoints = Math.max(...Object.values(groupMaximums))
            return {
               standings: decoratedStandings,
               expectedValue,
               maxPoints,
            }
         })
   }
}