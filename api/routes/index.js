import wildcard from './wildcard';
import picks from './picks';

export function createRoutes(app) {
   app.put('/picks', picks.PUT);
   app.get('*', wildcard);
}
