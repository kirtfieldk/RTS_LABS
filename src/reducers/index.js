import { combineReducers } from 'redux';
import searchHistory from './searchHistory';
import searchResults from './searchResult';
/* Reducers - these are the strings we can grab the values at, Modern JS */
export default combineReducers({
  searchHistory,
  searchResults,
});
