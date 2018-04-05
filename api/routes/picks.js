import HttpError from '../HttpError'
import { validatePicks } from '../../modules/validation'
import { savePicks } from '../dao'

export default {
   PUT(req, res) {
      console.log('Received picks...')
      const validationError = validatePicks(req.body)
      if (validationError) {
         throw new HttpError(400, validationError)
      }
      try {
         return savePicks(req.body)
      } catch (error) {
         throw new HttpError(500, 'An unknown error occurred. Wesley might know.')
      }
   }
}