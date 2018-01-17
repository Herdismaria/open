import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import placesReducer from './placesReducer';

export default combineReducers({
  search: searchReducer,
  places: placesReducer,
});
