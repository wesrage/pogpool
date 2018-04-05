import HttpError from '../HttpError'
import { loadGamesForDays } from '../dao'

export default {
   async GET(req, res) {
      try {
         return loadGamesForDays([req.query.date]) 
      } catch (error) {
         throw new HttpError(500, 'An unknown error occurred. Wesley might know.')
      }
   }
}