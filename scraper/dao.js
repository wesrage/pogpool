import monk from 'monk'
import moment from 'moment'
import obex from 'obex'
import { DB_URL } from '../db/config'

const db = monk(DB_URL)

const gamesCollection = db.get('games')
const statisticsCollection = db.get('statistics')

export function reset() {
  console.log('Clearing database...')
  return Promise.all([
    gamesCollection.remove({}),
    statisticsCollection.remove({}),
  ]).then(() => {
    console.log('    ...Cleared.')
  })
}

export function saveGames(games) {
  return Promise.all(
    games.map(game =>
      gamesCollection.update(
        {
          id: game.id,
        },
        game,
        {
          upsert: true,
        }
      )
    )
  )
}

export function updateGameStatus({ id, period }) {
  return gamesCollection.update(
    { id },
    {
      $set: { period },
    }
  )
}

export function loadDailyStats() {
  return statisticsCollection.find()
}

export function loadFinishedGames() {
  return gamesCollection.find({ completed: true })
}

export function loadGamesForDays(days) {
  return gamesCollection.find({
    gameDateLocal: {
      $in: days,
    },
  })
}

export function loadActiveGames() {
  return gamesCollection.find({
    gameTime: {
      $lt: moment().toDate(),
    },
    completed: false,
  })
}

export function saveStats(dateString, stats) {
  const flatStats = Object.keys(stats).length
    ? obex(stats)
        .mapKeys(key => `stats.${key}`)
        .raw()
    : {}
  if (!Object.keys(stats).length) {
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
  return gamesCollection.findOne(
    {
      gameTime: {
        $gt: moment().toDate(),
      },
    },
    {
      sort: {
        gameTime: 1,
      },
    }
  )
}
