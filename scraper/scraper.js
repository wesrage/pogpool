import axios from 'axios';
import moment from 'moment';
import obex from 'obex';
import _ from 'lodash';
import { error } from './log';
import { Seasons } from '../modules/constants';
import * as NHL from '../modules/nhl';

export async function loadSchedule(year, season = Seasons.REGULAR) {
   const url = `https://statsapi.web.nhl.com/api/v1/schedule?season=${year}${year + 1}`;
   const { data: scheduleData } = await axios.get(url);
   const relevantGames = flattenSchedule(scheduleData).filter(game => game.gameType === season);
   return relevantGames.map(transformScheduleGame);
}

export async function loadStatsForGames(games) {
   return Promise.all(
      games.map(async ({ id, gameDateLocal }) => {
         try {
            const stats = await loadGame(id);
            return { gameDateLocal, stats };
         } catch (e) {
            error(`    Failed to load game ${id}`);
            return {};
         }
      }),
   );
}

async function loadGame(gameId) {
   const url = `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`;
   const { data: gameReport } = await axios.get(url);
   return parseStatsFromGameReport(gameReport);
}

const parseStatsFromGameReport = report => ({
   ...parseTeamStatsFromGameReport(report),
   ...parsePlayerStatsFromGameReport(report),
});

function parseTeamStatsFromGameReport({ gamePk: id, gameData, liveData }) {
   if (gameData.status.abstractGameState !== 'Final') {
      return {};
   }
   const homeScore = liveData.linescore.teams.home.goals;
   const awayScore = liveData.linescore.teams.away.goals;

   const winningTeam = homeScore > awayScore
      ? gameData.teams.home.abbreviation
      : gameData.teams.away.abbreviation;
   const losingTeam = homeScore > awayScore
      ? gameData.teams.away.abbreviation
      : gameData.teams.home.abbreviation;

   const roundNumber = +String(id)[7];
   return {
      [winningTeam]: {
         wins: 1,
         shutouts: Number(!homeScore || !awayScore),
      },
      [losingTeam]: {
         losses: 1,
         ...(gameData.game.type === Seasons.PLAYOFFS)
            ? { [`round${roundNumber}Losses`]: 1 }
            : {},
      },
   };
}

function parsePlayerStatsFromGameReport({ liveData: { boxscore: { teams } } }) {
   const players = {
      ...teams.away.players,
      ...teams.home.players,
   };
   return obex(players)
      .map(
         (__, player) => player.person.id,
         player => _.pick(player.stats.skaterStats, ['goals', 'assists']),
      )
      .filter((__, stats) => stats.goals || stats.assists)
      .raw();
}

const flattenSchedule = scheduleData =>
   scheduleData.dates.reduce((result, date) => [...result, ...date.games], []);

const transformScheduleGame = ({ gamePk: id, gameDate, status, teams }) => ({
   id,
   active: status.abstractGameState === 'Live',
   completed: status.abstractGameState === 'Final',
   teams: {
      away: NHL.teamKeys[teams.away.team.id],
      home: NHL.teamKeys[teams.home.team.id],
   },
   gameDateLocal: moment(gameDate).format('YYYY-MM-DD'),
   gameTime: moment.utc(gameDate).toDate(),
});
