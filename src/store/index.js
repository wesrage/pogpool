/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import {
   applyMiddleware,
   compose,
   createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import rootReducer from './rootReducer';

export function configureStore(initialState) {
   const composeEnhancers = (__DEVELOPMENT__)
      ? composeWithDevTools({})
      : compose;
   const middlewares = [
      thunk,
   ];
   const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
         applyMiddleware(...middlewares),
         persistState(['picks', 'user']),
      ),
   );

   if (module.hot) {
      module.hot.accept(() => {
         const nextRootReducer = require('./rootReducer');
         store.replaceReducer(nextRootReducer);
      });
   }

   return store;
}
