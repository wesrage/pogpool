import * as dao from '../dao'

export default {
   async GET(req, res) {
      const contestants = await dao.loadContestants()
      return contestants.map(c => `${c.firstName} ${c.lastName} (${c.sc})`)
   },
}
