import axios from '../util/axios';

export const LOAD_STANDINGS = 'app/standings/LOAD_STANDINGS';
export const LOAD_STANDINGS_SUCCESS = 'app/standings/LOAD_STANDINGS_SUCCESS';
export const LOAD_STANDINGS_FAIL = 'app/standings/LOAD_STANDINGS_FAIL';

export const LOAD_TEAMS = 'pogpool/standings/LOAD_TEAMS';
export const LOAD_TEAMS_SUCCESS = 'pogpool/standings/LOAD_TEAMS_SUCCESS';
export const LOAD_TEAMS_FAIL = 'pogpool/standings/LOAD_TEAMS_FAILURE';

const initialState = {
   contestants: [],
   teams: {},
   loadingStandings: false,
   loadingTeams: false,
};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case LOAD_STANDINGS:
         return {
            ...state,
            loadingStandings: true,
            loadingStandingsError: null,
         };
      case LOAD_STANDINGS_SUCCESS:
         return {
            ...state,
            contestants: action.contestants,
            loadingStandings: false,
         };
      case LOAD_STANDINGS_FAIL:
         return {
            ...state,
            loadingStandings: false,
            loadingStandingsError: action.message,
         };
      case LOAD_TEAMS:
         return {
            ...state,
            loadingTeams: true,
            loadingTeamsError: null,
         };
      case LOAD_TEAMS_SUCCESS:
         return {
            ...state,
            teams: action.teams,
            loadingTeams: false,
         };
      case LOAD_TEAMS_FAIL:
         return {
            ...state,
            loadingTeams: false,
            loadingTeamsError: action.message,
         };
      default:
         return state;
   }
}

export const loadStandings = () =>
   dispatch => {
      dispatch({ type: LOAD_STANDINGS });
      axios
         .get('/standings')
         .then(
            ({ data: contestants }) => dispatch({ type: LOAD_STANDINGS_SUCCESS, contestants }),
            ({ message }) => dispatch({ type: LOAD_STANDINGS_FAIL, error: message }),
         );
   };

export const loadTeams = () =>
   dispatch => {
      dispatch({ type: LOAD_TEAMS });
      axios
         .get('/teams')
         .then(
            ({ data: teams }) => dispatch({ type: LOAD_TEAMS_SUCCESS, teams }),
            ({ message }) => dispatch({ type: LOAD_TEAMS_FAIL, error: message }),
         );
   };
