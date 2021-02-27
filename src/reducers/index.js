import { combineReducers } from 'redux';
import searchHistory from './searchHistory';
import searchResults from './searchResult';
import currentQuery from './currentQuery';
/* Reducers - these are the strings we can grab the values at, Modern JS */
export default combineReducers({
  searchHistory,
  searchResults,
  currentQuery,
});
