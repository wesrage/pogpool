import obex from 'obex'
import _ from 'lodash'

export function getContestantFromPicks(
  { firstName, lastName, ...picks },
  groups
) {
  const players = _(groups)
    .filter(group => group.id !== 'sc')
    .map(group => group.players || group.teams)
    .flatten()
    .keyBy('id')
    .value()
  return {
    firstName,
    lastName,
    picks: {
      ...obex(picks)
        .mapValues(value => players[value])
        .raw(),
    },
  }
}

export function getSkaterPicks(picks) {
  const picksMap = obex(picks)
    .filter(groupName => /~[lcrfd]/.test(groupName))
    .raw()
  return getPicksFromPicksMap(picksMap)
}

export function getPicksByPosition(picks, position) {
  const picksMap = obex(picks)
    .filter(groupName => groupName.startsWith(position))
    .raw()
  return getPicksFromPicksMap(picksMap)
}

function getPicksFromPicksMap(picksMap) {
  const picks = Object.keys(picksMap).map(groupName => ({
    groupName,
    pick: picksMap[groupName],
  }))
  return [...picks].sort(groupNameSort)
}

function groupNameSort(a, b) {
  const [posA, posB] = [a, b].map(x => x.groupName[0].toLowerCase)
  const [indexA, indexB] = [a, b].map(x => +x.groupName.slice(1))
  return posA < posB
    ? -1
    : posA > posB
    ? 1
    : indexA < indexB
    ? -1
    : indexA > indexB
    ? 1
    : 0
}
