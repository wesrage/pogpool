export const ACTION_TYPE_NAME = 'app/substore/ACTION_TYPE_NAME';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
   switch (action.type) {
      case ACTION_TYPE_NAME: return {
         ...state,
         property: action.value,
      };
      default: return state;
   }
}

export const simpleCreator = () => ({
   type: ACTION_TYPE_NAME,
   property: 'value',
});

export const thunkCreator = () => (dispatch, getState) => {
   dispatch({ type: ACTION_TYPE_NAME });
   fetch('/resource')
      .then(() => {
         if (getState().prop === 'someValue') {
            dispatch({ type: ACTION_TYPE_NAME });
         }
      })
      .catch(() => {
         dispatch({ type: ACTION_TYPE_NAME });
      });
};
