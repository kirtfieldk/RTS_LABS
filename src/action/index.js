import axios from 'axios';
import {
  SEARCH_HISTORY,
  API_ROUTE,
  SEARCH,
} from '../config/keywords';

/* Actions that allow us to persist values accross the app */
export const addSearchResult = (search) => (dispatch) => {
  dispatch({ type: SEARCH_HISTORY, payload: search });
};
export const search = (search) => async (dispatch) => {
  const result = await axios.get(`${API_ROUTE}${search}`);
  dispatch({ type: SEARCH, payload: result.data });
};
