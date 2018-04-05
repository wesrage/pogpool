import handler from '../handler'
import picks from './picks'
import standings from './standings'
import teams from './teams'
import games from './games'

export function createRoutes(app) {
   app.put('/picks', handler(picks.PUT))
   app.get('/standings', handler(standings.GET))
   app.get('/teams', handler(teams.GET))
   app.get('/games', handler(games.GET))
}
