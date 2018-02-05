const visibilityStateFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_STATE_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityStateFilter;