import picks from './picks';
import standings from './standings';

export function createRoutes(app) {
   app.put('/picks', picks.PUT);
   app.get('/standings', standings.GET);
}
