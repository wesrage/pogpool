import axios from 'axios';

export const MAKE_SELECTION = 'app/picks/MAKE_SELECTION';
export const REMOVE_SELECTION = 'app/picks/REMOVE_SELECTION';
export const SUBMIT = 'app/picks/SUBMIT';
export const SUBMIT_SUCCESS = 'app/picks/SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'app/picks/SUBMIT_FAIL';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case MAKE_SELECTION:
         return {
            ...state,
            [action.group]: action.id,
         };
      case REMOVE_SELECTION:
         return {
            ...state,
            [action.group]: undefined,
         };
      default:
         return state;
   }
}

export const makeSelection = (group, id) => ({
   type: MAKE_SELECTION,
   group,
   id,
});

export const removeSelection = group => ({
   type: REMOVE_SELECTION,
   group,
});

export const submit = () =>
   (dispatch, getState) => {
      const payload = {
         ...getState().user,
         ...getState().picks,
      };
      dispatch({ type: SUBMIT });
      axios
         .put('http://localhost:3030/picks', payload)
         .then(response => dispatch({ type: SUBMIT_SUCCESS }))
         .catch(e => dispatch({ type: SUBMIT_FAIL, error: e }));
   };
