import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import fetchAlbums from "../reducers/fetchAlbums";
import search from "../reducers/search";

const allReducers = combineReducers({
  favourite: favouriteReducer,
  fetchAlbums: fetchAlbums,
  search: search,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
