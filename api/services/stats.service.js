import obex from 'obex'
import _ from 'lodash'
import { Scoring } from '../config'

export function consolidateDailyStats(dailyStats) {
   const result = {}
   dailyStats.forEach(day => {
      const entities = Object.keys(day.stats)
      entities.forEach(entity => {
         if (result[entity]) {
            const statKeys = Object.keys(day.stats[entity])
            statKeys.forEach(statKey => {
               if (result[entity][statKey]) {
                  result[entity][statKey] += day.stats[entity][statKey]
               } else {
                  result[entity][statKey] = day.stats[entity][statKey]
               }
            })
         } else {
            result[entity] = day.stats[entity]
         }
      })
   })
   return result
}

export function generateStandings(contestants, stats) {
   return contestants.map(contestant => {
      const picks = obex(contestant.picks)
         .mapValues((pick, groupName) => {
            const pickStats = stats[pick.id] || {}
            const points = calculateTotalPointsForPick(pickStats, groupName)
            return { ...pick, points }
         })
         .raw()
      return {
         ...contestant,
         picks,
         points: calculateTotalPointsForContestant(picks),
      }
   })
}

export function decorateStandingsPicks(contestants, groupMaximums, groupMinimums, eliminationMap) {
   return contestants.map(contestant => ({
      ...contestant,
      picks: obex(contestant.picks)
         .mapValues((pick, groupName) => ({
            ...pick,
            best: pick.points > 0 && pick.points === groupMaximums[groupName],
            worst: pick.points === groupMinimums[groupName] && pick.points < groupMaximums[groupName],
            out: eliminationMap[pick.team || pick.id],
         }))
         .raw(),
   }))
}

export function decorateStandingsWithFinalStatus(contestants, activeCountsByGroup) {
   return contestants.map(contestant => ({
      ...contestant,
      picks: obex(contestant.picks)
         .mapValues((pick, groupName) => ({
            ...pick,
            final: determineFinalStatus(pick, activeCountsByGroup[groupName]),
         }))
         .raw(),
   }))
}

export function determineFinalStatus(pick, groupActiveCount) {
   return (pick.worst && pick.out) ||
      (pick.best && !pick.out && groupActiveCount === 1) ||
      (pick.best && groupActiveCount === 0)
}

export function calculateActiveCountMap(groups, stats, eliminationMap) {
   return obex(_.keyBy(groups, 'id'))
      .mapValues(group =>
         (group.players || group.teams)
            .filter(pick => !eliminationMap[pick.team])
            .length
      )
      .raw()
}

export function calculateGroupMaximums(groups, stats) {
   return obex(_.keyBy(groups, 'id'))
      .mapValues(group => calculateMaxPointsByGroup(group.players || group.teams))
      .raw()
}

export function calculateGroupMinimums(groups, stats) {
   return obex(_.keyBy(groups, 'id'))
      .mapValues(group => calculateMinPointsByGroup(group.players || group.teams))
      .raw()
}

export function calculateMaxPointsByGroup(group, stats) {
   return group.reduce((max, current) => {
      const pickStats = stats[current.id] || {}
      return Math.max(max, calculateTotalPointsForPick(pickStats))
   }, 0)
}

export function calculateMinPointsByGroup(group, stats) {
   return group.reduce((min, current) => {
      const pickStats = stats[current.id] || {}
      return Math.min(min, calculateTotalPointsForPick(pickStats))
   }, Number.MAX_VALUE)
}

export function getBestPicksContestant(group, stats) {
   const picks = obex(_.keyBy(groups, 'id'))
      .mapValues(group => getBestPickInGroup(group.players || group.teams, stats))
      .raw()
   return {
      firstName: 'Best',
      lastName: 'Picks',
      picks,
   }
}

export function getBestPickInGroup(group, stats) {
   let maxPoints = -1
   return group.reduce((bestPick, current) => {
      const pickStats = stats[current.id] || {}
      const pickPoints = calculateTotalPointsForPick(pickStats)
      const result = (pickPoints > maxPoints)
         ? current
         : bestPick
      maxPoints = Math.max(maxPoints, pickPoints)
      return result
   }, {})
}

export function getEliminationMap(stats) {
   return obex(stats)
      .mapValues(team => determineEliminationStatus(team, stats))
      .raw()
}

function determineEliminationStatus(teamStats) {
   const lossStats = obex(teamStats)
      .filter(key => /round\dLosses/.test(key))
      .raw()
   const lossesByRound = Object.keys(lossStats)
      .map(key => lossStats[key])
   const mostLossesInARound = Math.max(...lossesByRound)
   return mostLossesInARound > 3
}

export function getAllTeamAbreviations(stats) {
   const teamStats = obex(stats)
      .filter((key, entityStats) => entityStats.hasOwnProperty('wins') || entityStats.hasOwnProperty('losses'))
      .raw()
   return Object.keys(teamStats)
}

function calculateTotalPointsForPick({ goals = 0, assists = 0, wins = 0, shutouts = 0 }, groupName) {
   if (groupName === 'sc') {
      return (wins === 16)
         ? Scoring.STANLEY_CUP
         : 0
   }
   return (goals * Scoring.GOAL) +
      (assists * Scoring.ASSIST) +
      (wins * Scoring.WIN) +
      (shutouts * Scoring.SHUTOUT)
}

function calculateTotalPointsForContestant(picks) {
   return Object.keys(picks)
      .reduce((sum, groupName) => sum + picks[groupName].points, 0)
}