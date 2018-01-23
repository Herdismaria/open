import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import placesReducer from './placesReducer';
import appReducer from './appReducer';

export default combineReducers({
  search: searchReducer,
  places: placesReducer,
  app: appReducer,
});
