import axios from 'axios';
import {
  SEARCH_HISTORY,
  API_ROUTE,
  SEARCH,
  CURRENT_QUERY,
} from '../config/keywords';

/* Actions that allow us to persist values accross the app */
export const addSearchResult = (query) => (dispatch) => {
  /* Need to dispatch this query as current one so we can always reference! */
  dispatch(currentApiQuery(query));
  /* */
  dispatch({
    type: SEARCH_HISTORY,
    payload: query,
  });
};
/* Query api via search term and tag, we need default values  */
export const search = (query) => async (dispatch) => {
  /* Need to dispatch this query as current one so we can always reference! */
  const result = await axios.get(API_ROUTE, {
    params: query,
  });
  dispatch({ type: SEARCH, payload: result.data });
};
/* Simple action to keep track of current query */
export const currentApiQuery = (query) => (dispatch) => {
  dispatch({ type: CURRENT_QUERY, payload: query });
};
