// import picks from './picks';
import standings from './standings';
import teams from './teams';

export function createRoutes(app) {
   // app.put('/picks', picks.PUT);
   app.get('/standings', standings.GET);
   app.get('/teams', teams.GET);
}
