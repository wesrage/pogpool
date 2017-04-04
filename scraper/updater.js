// TODO: Update schedule
// Once daily
// TODO: Update today's game stats
// Every five minutes while one or more games are ongoing
// TODO: Update all past game stats (for corrections)
// Once daily

import { loadSchedule } from './scraper';
import { saveGames } from './dao';
import { info } from './log';

export async function updateSchedule(year, season) {
   info(`Updating schedule for ${year} season ${season}...`);
   try {
      const games = await loadSchedule(year, season);
      await saveGames(games);
      info('    ...Done updating schedule.');
   } catch (e) {
      throw e;
   }
}

export async function updateActiveGames() {

}
