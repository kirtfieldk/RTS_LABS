import { SEARCH } from '../config/keywords';
/* This reducer fetches the search results  */
export default function searchResults(state = null, action) {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
}
