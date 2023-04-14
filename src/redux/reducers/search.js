const initialState = {
    searched: {
      tracks: [],
      albums: [],
      artists: [],
    },
    loading: true,
  };
  
  const search = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_SEARCH":
        return {
          ...state,
          searched: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default search;