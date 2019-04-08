import groups from '../../modules/groups'
import { getContestantFromPicks } from '../services/group.service'
import {
  consolidateDailyStats,
  getBestPicksContestant,
  generateStandings,
  calculateGroupMaximums,
  calculateGroupMinimums,
  getEliminationMap,
  calculateActiveCountMap,
  decorateStandingsPicks,
  decorateStandingsPicksWithFinalStatus,
  calculateExpectedValue,
} from '../services/stats.service'
import {
  loadPicks,
  loadDailyStats
} from '../dao'

export default {
  async GET() {
    const [pickSets, dailyStats] = await Promise.all([
      loadPicks(),
      loadDailyStats(),
    ])
    let contestants = pickSets.map(pickSet =>
      getContestantFromPicks(pickSet, groups)
    )
    const consolidatedStats = consolidateDailyStats(dailyStats)
    contestants = [
      ...contestants,
      getBestPicksContestant(groups, consolidatedStats),
    ]
    const standings = generateStandings(contestants, consolidatedStats)
    const groupMaximums = calculateGroupMaximums(groups, consolidatedStats)
    const groupMinimums = calculateGroupMinimums(groups, consolidatedStats)
    const eliminationMap = getEliminationMap(consolidatedStats)
    const activeCountsByGroup = calculateActiveCountMap(
      groups,
      consolidatedStats,
      eliminationMap
    )
    let decoratedStandings = decorateStandingsPicks(
      standings,
      groupMaximums,
      groupMinimums,
      eliminationMap
    )
    decoratedStandings = decorateStandingsPicksWithFinalStatus(
      decoratedStandings,
      activeCountsByGroup
    )
    const expectedValue = calculateExpectedValue(groups, consolidatedStats)
    const maxPoints = Math.max(...Object.values(groupMaximums))
    return {
      standings: decoratedStandings,
      expectedValue,
      maxPoints,
    }
  },
}
