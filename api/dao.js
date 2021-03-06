import monk from 'monk'
import moment from 'moment'
import obex from 'obex'
import { DB_URL } from '../db/config'

const db = monk(DB_URL)

const gamesCollection = db.get('games')
const statisticsCollection = db.get('statistics')
const picksCollection = db.get('picks')
const picksHistoryCollection = db.get('picksHistory')

export function saveGames(games) {
  const promises = games.map(game =>
    gamesCollection.update(
      {
        gamePk: game.gamePk,
      },
      {
        $set: {
          ...game,
        }
      },
      {
        upsert: true,
      }
    )
  )
  return Promise.all(promises)
}

export function loadDailyStats() {
  return statisticsCollection.find()
}

export function loadFinishedGames() {
  return gamesCollection.find({
    'status.abstractGameState': 'Final',
  })
}

export function loadGamesForDays(days) {
  return gamesCollection.find(
    {
      gameDateLocal: {
        $in: days,
      },
    },
    {
      fields: {
        _id: 0,
      },
    }
  )
}

export function loadActiveGames() {
  return gamesCollection.find({
    gameTime: {
      $lt: moment().toDate(),
    },
    'status.abstractGameState': {
      $ne: 'Final',
    },
  })
}

export function saveStats(dateString, stats) {
  const flatStats = Object.keys(stats).length
    ? obex(stats).mapKeys(key => `stats.${key}`)
    : {}
  if (Object.keys(stats).length === 0) {
    return statisticsCollection.update(
      {
        dateString,
        stats: {
          $exists: false,
        },
      },
      {
        $set: {
          stats: {},
        },
      }
    )
  }
  return statisticsCollection.update(
    {
      dateString,
    },
    {
      $set: {
        dateString,
        ...flatStats,
      },
    },
    {
      upsert: true,
    }
  )
}

export function loadNextGame() {
  return gamesCollection
    .find({
      gameTime: {
        $gt: moment().toDate(),
      },
    })
    .sort({ gameTime: 1 })
    .limit(1)
}

export async function savePicks(picks) {
  await picksHistoryCollection.insert({
    ...picks,
    timestamp: Date.now(),
  })
  return picksCollection.update(
    {
      firstName: picks.firstName,
      lastName: picks.lastName,
    },
    {
      $set: {
        ...picks,
        timestamp: Date.now(),
      },
    },
    {
      upsert: true,
    }
  )
}

export function loadPicks() {
  return picksCollection.find(
    {},
    {
      fields: {
        _id: 0,
        timestamp: 0,
      },
    }
  )
}

export function loadContestants() {
  return picksCollection.find(
    {},
    {
      fields: {
        _id: 0,
        firstName: 1,
        lastName: 1,
        sc: 1,
      },
    }
  )
}
