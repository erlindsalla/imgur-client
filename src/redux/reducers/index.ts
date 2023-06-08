import { combineReducers } from "redux";

import { fetchDataReducer, filterReducer } from "./reducers";

export const rootReducer = combineReducers({
  images: fetchDataReducer,
  filters: filterReducer,
});
