import { loadGamesForDays } from '../dao';

export default {
   GET: async (req, res) => {
      try {
         const games = await loadGamesForDays([req.query.date]);
         res.json(games).end();
      } catch (e) {
         res.status(500).json({ message: 'An unknown error occurred. Wesley might know.' }).end();
      }
   },
};
