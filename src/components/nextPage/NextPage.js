import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../action';
import { structureQuery } from '../../util/structureQuery';

const NextPage = ({ currentQuery, currentApiQuery, search }) => {
  const [page, setPage] = useState(1);
  //Called everytime we increase the page count or decrease it
  // We query the current query but the next or prev page
  useEffect(() => {
    if (currentQuery && currentQuery.reset) setPage(2);
    const executQuery = () => {
      if (currentQuery && page >= 1) {
        const query = structureQuery(
          currentQuery.query,
          currentQuery.tags,
          page,
        );
        currentApiQuery(query);
        search(query);
      }
    };
    executQuery();
  }, [page]);
  /* call the query for next or prev page, if page is one we cannot decrease its count */
  return (
    <div className="space">
      <span
        onClick={() =>
          page !== 1 ? setPage(page - 1) : setPage(page)
        }
      >
        previous Page...
      </span>
      {currentQuery && currentQuery.reset ? 1 : page}
      <span onClick={() => setPage(page + 1)}>Next Page...</span>
    </div>
  );
};
/* Grab currentQuery from store */
const mapStateToProps = ({ currentQuery }) => {
  return { currentQuery };
};
export default connect(mapStateToProps, actions)(NextPage);
