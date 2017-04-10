import { validatePicks } from '../../modules/validation';
import { savePicks } from '../dao';

export default {
   PUT: (req, res) => {
      const validationError = validatePicks(req.body);
      if (validationError) {
         res.status(400).json({ message: validationError });
      } else {
         savePicks(req.body)
            .then(() => res.status(200).end())
            .catch(e => {
               console.error(e);
               res.status(500)
                  .json({ message: 'An unknown error occurred. Wesley might know.' })
                  .end();
            });
      }
   },
};
