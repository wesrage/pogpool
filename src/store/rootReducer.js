import { combineReducers } from 'redux';
import picks from './picks';
import user from './user';

export default combineReducers({
   picks,
   user,
});
