export const CHANGE_FIELD = 'app/picks/CHANGE_FIELD';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case CHANGE_FIELD: return {
         ...state,
         [action.name]: action.value,
      };
      default: return state;
   }
}

export const changeField = ({ name, value }) => ({
   type: CHANGE_FIELD,
   name,
   value,
});
