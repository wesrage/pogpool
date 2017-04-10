import { combineReducers } from 'redux';
import picker from './picker';
import picks from './picks';
import user from './user';

export default combineReducers({
   picker,
   picks,
   user,
});
