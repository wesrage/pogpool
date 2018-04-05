import { Seasons } from '../modules/constants'

export const API_PORT = process.env.API_PORT
export const API_HOST = process.env.API_HOST
export const WEB_PORT = process.env.WEB_PORT
export const WEB_HOST = process.env.WEB_HOST

export default {
   YEAR: 2017,
   SEASON: Seasons.PLAYOFFS,
   PICKER_OPEN: process.env.NODE_ENV !== JSON.stringify('production')
}

export const Scoring = {
   GOAL: 1,
   ASSIST: 1,
   WIN: 2,
   SHUTOUT: 2,
   STANLEY_CUP: 20,
}