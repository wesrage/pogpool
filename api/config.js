import { Seasons } from '../modules/constants';

export const API_PORT = process.env.API_PORT;
export const API_HOST = process.env.API_HOST;
export const WEB_PORT = process.env.WEB_PORT;
export const WEB_HOST = process.env.WEB_HOST;

export default {
   YEAR: 2016,
   SEASON: Seasons.PLAYOFFS,
   DB_URL: 'mongodb://localhost:27017/pogpool',
   PICKER_OPEN: process.env.NODE_ENV !== 'production',
};
