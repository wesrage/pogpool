// TODO: Update schedule
// Once daily
// TODO: Update today's game stats
// Every five minutes while one or more games are ongoing
// TODO: Update all past game stats (for corrections)
// Once daily

import moment from 'moment';
import * as scraper from './scraper';
import * as dao from './dao';
import { getTimeToNextGameStart, renderGameString } from './helpers';
import { info, error } from './log';
import { Seasons } from '../modules/constants';

export async function updateSchedule(year, season) {
   info(`Updating schedule for ${year} season ${season}...`);
   try {
      const games = await scraper.loadSchedule(year, season);
      await dao.saveGames(games);
      info('    ...Done updating schedule.');
      return;
   } catch (err) {
      error(err);
   }
}

async function getActiveGames() {
   try {
      return await dao.loadActiveGames();
   } catch (err) {
      error('   There was a problem retrieving the list of active games:');
      error(err.stack);
   }
}

async function displayWaitTime() {
   const timeToWait = await getTimeToNextGameStart();
   info(
      `
      No active games found.
      Waiting ${moment.duration(timeToWait).humanize()} for next game start.
      `,
   );
}

function logActiveGames(games) {
   info('Active games:');
   games.map(renderGameString).map(info);
}

function logNewlyCompletedGames(games) {
   if (games.length) {
      info('Newly completed games:');
      games.map(renderGameString).map(info);
   }
}

async function saveGames(games) {
   try {
      await dao.saveGames(games);
   } catch (err) {
      error('There was a problem saving newly completed games:');
      error(err.stack);
   }
}

async function updateStatsForActiveGames(games) {
   info('Begin updating stats from active games...');
   const statSets = await scraper.loadStatsForGames(games);
   try {
      await Promise.all(
         statSets.map(statSet => dao.saveStats(statSet.gameDateLocal, statSet.stats)),
      );
   } catch (err) {
      error('There was a problem updating stats for active games');
      error(err.stack);
   }
   info('...Done updating stats for active games');
}

export async function updateActiveGames() {
   info('Updating active games...');
   const games = await getActiveGames();
   if (!games.length) {
      await displayWaitTime();
   } else {
      // TODO:
      // Does completed in db have to mean something different from completed from API

      logActiveGames(games);
      const completedGames = games.filter(game => game.completed);
      logNewlyCompletedGames(completedGames);
      await saveGames(completedGames);
      await updateStatsForActiveGames();
   }
}

export function updateForLateCorrections() {
   info("Updating stats for late corrections from today and yesterday's games...");
   const today = moment().format('YYYY-MM-DD');
   const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
   return updateStatsForDays([today, yesterday])
      .then(() => {
         info('   ...Done updating for late corrections.');
      })
      .catch(err => {
         error('   There was a problem updating for late corrections:');
         error(err.stack);
      });
}

export function updateStatsForDay(dateString) {
   return updateStatsForDays([dateString]);
}

export function updateStatsForDays(dateStrings) {
   info('Updating stats for days: ');
   info(dateStrings.join(', '));
   return dao.loadGamesForDays(dateStrings).then(scraper.loadStatsForGames).then(games => {
      const statsByDate = games.reduce(
         (acc, game) => ({
            ...acc,
            [game.gameDateLocal]: {
               ...acc[game.gameDateLocal],
               ...game.stats,
            },
         }),
         {},
      );
      return Promise.all([
         ...Object.keys(statsByDate).map(date => {
            const stats = statsByDate[date];
            return dao.saveStats(date, stats);
         }),
         ...games.map(dao.updateGameStatus),
      ]).then(() => {
         info('    ...Done!');
      });
   });
}

const firstDay = moment('2017-04-12');
const lastDay = moment('2017-06-15');
const allDays = [];
for (
   let currentDay = firstDay;
   !currentDay.isAfter(lastDay);
   currentDay = currentDay.clone().add(1, 'day')
) {
   allDays.push(currentDay);
}

updateSchedule(2016, Seasons.PLAYOFFS).then(() =>
   updateStatsForDays(allDays.map(day => day.format('YYYY-MM-DD'))),
);
