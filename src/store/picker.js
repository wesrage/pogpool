import axios from '../util/axios';

export const SUBMIT = 'app/picks/SUBMIT';
export const SUBMIT_SUCCESS = 'app/picks/SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'app/picks/SUBMIT_FAIL';

const initialState = {
   submitted: false,
   submitting: false,
   submitError: null,
};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case SUBMIT:
         return {
            ...state,
            submitted: false,
            submitting: true,
         };
      case SUBMIT_SUCCESS:
         return {
            ...state,
            submitted: true,
            submitting: false,
         };
      case SUBMIT_FAIL:
         return {
            ...state,
            submitting: false,
            submitError: action.error,
         };
      default:
         return state;
   }
}

export const submit = () =>
   (dispatch, getState) => {
      const payload = {
         ...getState().user,
         ...getState().picks,
      };
      dispatch({ type: SUBMIT });
      axios.put('/picks', payload)
         .then(
            () => dispatch({ type: SUBMIT_SUCCESS }),
            ({ message }) => dispatch({ type: SUBMIT_FAIL, error: message }),
         );
   };
