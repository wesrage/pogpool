import PrettyError from 'pretty-error'
import HttpError from '../HttpError'
import { loadGamesForDays } from '../dao'

const pretty = new PrettyError()

export default {
   async GET(req, res) {
      try {
         return loadGamesForDays([req.query.date]) 
      } catch (error) {
         console.error(pretty.render(error))
         throw new HttpError(500, 'An unknown error occurred. Wesley might know.')
      }
   }
}