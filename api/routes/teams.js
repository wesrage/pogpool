import teams from '../team-info';

export default {
   GET: (req, res) => {
      res.json(teams).end();
   },
};
