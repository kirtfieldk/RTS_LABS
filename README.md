### Welcome RTS Labs

This is a `React/Redux` application that queries from the Hacker News Algolia API. The `store` only has three persistent data values and three `actions`. All results and search histories are `links` if able. Strong use of `axios` and its ability to set perams. The utility function
`structureQuery` create a valid query without having to repeat the logic in many places of app.

`axios.get(URL, {params: {...}})`

##### Reducers

```javascript
{
  searchHistory,
  searchResults,
  currentQuery,
}
```

##### Actions

```javascript
/* Actions that allow us to persist values accross the app */
export const addSearchResult = (search, tag = '') => (dispatch) => {
  dispatch({
    type: SEARCH_HISTORY,
    payload: { search, tag },
  });
};
/* Query api via search term and tag, we need default values  */
export const search = (search, tags = '', page = 1) => async (
  dispatch,
) => {
  const result = await axios.get(API_ROUTE, {
    params: { tags, query: search },
  });
  dispatch({ type: SEARCH, payload: result.data, page });
};
```

## Run

On a fresh instance, use the command

```
    npm i
```

to install all the `dependencies`.

Then run,

```
    npm start
```

to start the instance on port `3000`.

## Dockerfile

```linux
    docker build -t rts .

    docker run -p 3000:3000 --name rts rts
```

Running this application in a `docker` container runs the production instance.
