const searchTermFilter = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM_FILTER':
      return action.search_term;
    default:
      return state;
  }
};

export default searchTermFilter;