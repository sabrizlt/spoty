export const addToFavourite = (company) => {
    return {
      type: "ADD_TO_FAVOURITE",
      payload: company,
    };
  };
  
  export const removeFromFavourite = (company) => {
    return {
      type: "REMOVE_FROM_FAVOURITE",
      payload: company,
    };
  };