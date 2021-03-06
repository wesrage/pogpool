import obex from 'obex'
import _ from 'lodash'
import { Scoring } from '../config'
import teams from '../../modules/teams'

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
      breakdown: getBreakdown(picks),
    }
  })
}

function getBreakdown(picks) {
  return Object.values(picks).reduce((acc, pick) => {
    const team = pick.team || pick.id
    const division = teams[team].division2021
    // const conference = teams[team].conference
    return {
      ...acc,
      [team]: (acc[team] || 0) + 1,
      [division]: (acc[division] || 0) + 1,
      // [conference]: (acc[conference] || 0) + 1,
    }
  }, {})
}

export function decorateStandingsPicks(
  contestants,
  groupMaximums,
  groupMinimums,
  eliminationMap,
) {
  return contestants.map(contestant => ({
    ...contestant,
    picks: obex(contestant.picks)
      .mapValues((pick, groupName) => ({
        ...pick,
        best: pick.points > 0 && pick.points === groupMaximums[groupName],
        worst:
          pick.points === groupMinimums[groupName] &&
          pick.points < groupMaximums[groupName],
        out: eliminationMap[pick.team || pick.id],
      }))
      .raw(),
  }))
}

export function decorateStandingsPicksWithFinalStatus(
  contestants,
  activeCountsByGroup,
) {
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
  return (
    (pick.worst && pick.out) ||
    (pick.best && !pick.out && groupActiveCount === 1) ||
    (pick.best && groupActiveCount === 0)
  )
}

export function calculateActiveCountMap(groups, eliminationMap) {
  return obex(_.keyBy(groups, 'id'))
    .mapValues(
      group =>
        (group.players || group.teams).filter(
          pick => !eliminationMap[pick.team],
        ).length,
    )
    .raw()
}

export function calculateGroupMaximums(groups, stats) {
  return obex(_.keyBy(groups, 'id'))
    .mapValues(group =>
      calculateMaxPointsByGroup(group.players || group.teams, stats),
    )
    .raw()
}

export function calculateGroupMinimums(groups, stats) {
  return obex(_.keyBy(groups, 'id'))
    .mapValues(group =>
      calculateMinPointsByGroup(group.players || group.teams, stats),
    )
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

export function calculateExpectedValue(groups, stats) {
  return groups.reduce((sum, group) => {
    const picks = group.players || group.teams
    const groupSum = picks.reduce((acc, pick) => {
      const pickStats = stats[pick.id] || {}
      return acc + calculateTotalPointsForPick(pickStats, group.id)
    }, 0)
    return sum + groupSum / picks.length
  }, 0)
}

export function getBestPicksContestant(groups, stats) {
  const picks = obex(_.keyBy(groups, 'id'))
    .mapValues(group => getBestPickInGroup(group.players || group.teams, stats))
    .raw()
  return {
    firstName: 'The',
    lastName: 'Seer',
    picks,
  }
}

export function getMostCommonPicksContestant(groups, contestants) {
  const picks = obex(_.keyBy(groups, 'id'))
    .mapValues(group => getMostCommonPickInGroup(group, contestants))
    .raw()
  return {
    firstName: 'Mr.',
    lastName: 'Popular',
    picks,
    special: true,
  }
}

export function getLeastCommonPicksContestant(groups, contestants) {
   const picks = obex(_.keyBy(groups, 'id'))
     .mapValues(group => getLeastCommonPickInGroup(group, contestants))
     .raw()
   return {
     firstName: 'The',
     lastName: 'Forsaken',
     picks,
     special: true,
   }
 }

function getMostCommonPickInGroup(group, contestants) {
  const groupPicks = group.players || group.teams
  let maxPickCount = 0
  let maxPickCountPicks = []
  groupPicks.forEach(pick => {
    const pickCount = contestants.filter(
      contestant => contestant.picks[group.id].id === pick.id,
    ).length
    if (pickCount > maxPickCount) {
      maxPickCountPicks = [pick]
      maxPickCount = pickCount
    } else if (pickCount === maxPickCount) {
      maxPickCountPicks.push(pick)
    }
  })
  return maxPickCountPicks[0]
}

function getLeastCommonPickInGroup(group, contestants) {
   const groupPicks = group.players || group.teams
   let minPickCount = Number.POSITIVE_INFINITY
   let minPickCountPicks = []
   groupPicks.forEach(pick => {
     const pickCount = contestants.filter(
       contestant => contestant.picks[group.id].id === pick.id,
     ).length
     if (pickCount < minPickCount) {
       minPickCountPicks = [pick]
       minPickCount = pickCount
     } else if (pickCount === minPickCount) {
       minPickCountPicks.push(pick)
     }
   })
   return minPickCountPicks[0]
 }

export function getBestPickInGroup(group, stats) {
  let maxPoints = -1
  return group.reduce((bestPick, current) => {
    const pickStats = stats[current.id] || {}
    const pickPoints = calculateTotalPointsForPick(pickStats)
    const result = pickPoints > maxPoints ? current : bestPick
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
  const lossesByRound = Object.keys(lossStats).map(key => lossStats[key])
  const mostLossesInARound = Math.max(...lossesByRound)
  return mostLossesInARound > 3
}

export function getAllTeamAbreviations(stats) {
  const teamStats = obex(stats)
    .filter(
      (key, entityStats) =>
        entityStats.hasOwnProperty('wins') ||
        entityStats.hasOwnProperty('losses'),
    )
    .raw()
  return Object.keys(teamStats)
}

function calculateTotalPointsForPick(
  { goals = 0, assists = 0, wins = 0, shutouts = 0 },
  groupName,
) {
  if (groupName === 'sc') {
    return wins === 16 ? Scoring.STANLEY_CUP : 0
  }
  return (
    goals * Scoring.GOAL +
    assists * Scoring.ASSIST +
    wins * Scoring.WIN +
    shutouts * Scoring.SHUTOUT
  )
}

function calculateTotalPointsForContestant(picks) {
  return Object.keys(picks).reduce(
    (sum, groupName) => sum + picks[groupName].points,
    0,
  )
}
