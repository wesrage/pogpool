import picks from './picks';
import standings from './standings';
import teams from './teams';
import games from './games';

export function createRoutes(app) {
   app.put('/picks', picks.PUT);
   app.get('/standings', standings.GET);
   app.get('/teams', teams.GET);
   app.get('/games', games.GET);
}
