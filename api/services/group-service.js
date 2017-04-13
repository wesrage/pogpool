import obex from 'obex';
import _ from 'lodash';

export function getContestantFromPicks({ firstName, lastName, ...picks }, groups) {
   const players = _(groups)
      .map(group => group.players || group.teams)
      .flatten()
      .keyBy('id')
      .value();
   return {
      firstName,
      lastName,
      picks: {
         ...obex(picks).mapValues(value => players[value]).raw(),
      },
   };
}

export function getSkaterPicks(picks) {
   const picksMap = obex(picks).filter(groupName => /^[lcrfd]/.test(groupName)).raw();
   return getPicksFromPicksMap(picksMap);
}

export function getPicksByPosition(picks, position) {
   const picksMap = obex(picks).filter(groupName => groupName.startsWith(position)).raw();
   return getPicksFromPicksMap(picksMap);
}

export function getGoaliePicks(picks) {
   const picksMap = obex(picks).filter(groupName => /^g/.test(groupName)).raw();
   return getPicksFromPicksMap(picksMap);
}

function getPicksFromPicksMap(picksMap) {
   const picks = Object.keys(picksMap).map(groupName => ({
      groupName,
      pick: picksMap[groupName],
   }));
   return [...picks].sort(groupNameSort);
}

function groupNameSort(a, b) {
   const posA = a.groupName[0].toLowerCase();
   const posB = b.groupName[0].toLowerCase();
   const indexA = +a.groupName.slice(1);
   const indexB = +b.groupName.slice(1);
   return posA < posB ? -1 : posA > posB ? 1 : indexA < indexB ? -1 : indexA > indexB ? 1 : 0;
}
