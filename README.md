### Welcome RTS Labs

This is a `React/Redux` application that queries from the Hacker News Algolia API. The `store` only has two persistent data values and two `actions`.

##### Reducers

```javascript
{
    searchHistory,
    searchResults,
}
```

##### Actions

```javascript
export const addSearchResult = (search) => (dispatch) => {
  dispatch({ type: SEARCH_HISTORY, payload: search });
};
export const search = (search) => async (dispatch) => {
  const result = await axios.get(`${API_ROUTE}${search}`);
  dispatch({ type: SEARCH, payload: result.data });
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
