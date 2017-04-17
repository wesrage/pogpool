import { combineReducers } from 'redux';
import games from './games';
import picker from './picker';
import picks from './picks';
import standings from './standings';
import user from './user';

export default combineReducers({
   games,
   picker,
   picks,
   standings,
   user,
});
