import { SEARCH_HISTORY } from '../config/keywords';

/* This is the search history reducer */
export default function searchHistory(state = [], action) {
  switch (action.type) {
    /*  Add search string to end of search history array */
    case SEARCH_HISTORY:
      return [...state, action.payload];
    /* If no action just return state */
    default:
      return state;
  }
}
