import moment from 'moment'
import { loadNextGame } from './dao'

export const renderGameString = game =>
  `Game ${String(game.id)[9]}: ${game.teams.away} @ ${game.teams.home}`

export const getTimeToNextGameStart = async () => {
  const nextGame = await loadNextGame()
  const nextGameStartTime = moment(nextGame.gameDate)
  const now = moment()
  return nextGameStartTime.diff(now)
}
