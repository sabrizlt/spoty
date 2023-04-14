const initialState = {
    fetchedAlbums: {
      popAlbums: [],
      rockAlbums: [],
      hiphopAlbums: [],
      allAlbums: [],
    },
    loading: true,
  };
  
  const fetchAlbums = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_ALBUMS":
        return {
          ...state,
          fetchedAlbums: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default fetchAlbums;