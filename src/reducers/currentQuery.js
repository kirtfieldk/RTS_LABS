import { CURRENT_QUERY } from '../config/keywords';
/* Data store for our current query */
export default function currentQuery(state = null, action) {
  switch (action.type) {
    case CURRENT_QUERY:
      return action.payload;
    default:
      return state;
  }
}
