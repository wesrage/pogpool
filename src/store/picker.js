import axios from '../util/axios';

export const SUBMIT = 'app/picker/SUBMIT';
export const SUBMIT_SUCCESS = 'app/picker/SUBMIT_SUCCESS';
export const SUBMIT_FAIL = 'app/picker/SUBMIT_FAIL';
export const TOGGLE_PHOTOS = 'app/picker/TOGGLE_PHOTOS';

const initialState = {
   submitted: false,
   submitting: false,
   submitError: null,
   photosVisible: true,
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
            submitError: action.message,
         };
      case TOGGLE_PHOTOS:
         return {
            ...state,
            photosVisible: !state.photosVisible,
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
            ({ message }) => dispatch({ type: SUBMIT_FAIL, message }),
         );
   };

export const togglePhotos = () => ({
   type: TOGGLE_PHOTOS,
});
