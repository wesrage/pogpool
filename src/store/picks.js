export const MAKE_SELECTION = 'app/picks/MAKE_SELECTION';
export const REMOVE_SELECTION = 'app/picks/REMOVE_SELECTION';

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
