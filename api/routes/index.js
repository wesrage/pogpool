import handler from '../handler'
import picks from './picks'
import standings from './standings'
import teams from './teams'
import games from './games'
import contestants from './contestants'

export function createRoutes(app) {
   app.put('/picks', handler(picks.PUT))
   app.get('/standings', handler(standings.GET))
   app.get('/games', handler(games.GET))
   app.get('/contestants', handler(contestants.GET))
}
