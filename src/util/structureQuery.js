/* Utility function that structures the queries, keeps things DRY */
export const structureQuery = (query, tags, page = 1) => {
  if (tags) return { query, tags, page };
  return { query, page };
};
