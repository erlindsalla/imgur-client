import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";

import { FilterState, IImage } from "../utils/types";

import { rootReducer } from "./reducers/index";

export interface RootState {
  images: {
    data: IImage[];
    loading: boolean;
    error: any;
  };
  filters: FilterState;
}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
);
