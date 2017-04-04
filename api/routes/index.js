import wildcard from './wildcard';

export function createRoutes(app) {
   app.get('*', wildcard);
}
