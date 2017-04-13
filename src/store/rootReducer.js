import { combineReducers } from 'redux';
import picker from './picker';
import picks from './picks';
import standings from './standings';
import user from './user';

export default combineReducers({
   picker,
   picks,
   standings,
   user,
});
