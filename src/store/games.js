import moment from 'moment';
import axios from '../util/axios';
import { DATE_THRESHOLD } from '../../modules/constants';

export const LOAD = 'app/games/LOAD';
export const LOAD_SUCCESS = 'app/games/LOAD_SUCCESS';
export const LOAD_FAIL = 'app/games/LOAD_FAIL';

const initialState = {
   games: [],
   loaded: false,
   loading: false,
   loadError: null,
};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case LOAD:
         return {
            ...state,
            loaded: false,
            loading: true,
         };
      case LOAD_SUCCESS:
         return {
            ...state,
            games: action.games,
            loaded: true,
            loading: false,
         };
      case LOAD_FAIL:
         return {
            ...state,
            loaded: false,
            loading: false,
            loadError: action.message,
         };
      default:
         return state;
   }
}

export const load = () => dispatch => {
   dispatch({ type: LOAD });
   const now = moment.utc();
   const date = now.hour() < DATE_THRESHOLD ? now.subtract(1, 'day') : now;
   const dateString = date.format('YYYY-MM-DD');
   return axios
      .get(`/games?date=${dateString}`)
      .then(
         ({ data: games }) => dispatch({ type: LOAD_SUCCESS, games }),
         ({ message }) => dispatch({ type: LOAD_FAIL, message }),
      );
};
