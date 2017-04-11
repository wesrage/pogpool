import picks from './picks';

export function createRoutes(app) {
   app.put('/picks', picks.PUT);
}
