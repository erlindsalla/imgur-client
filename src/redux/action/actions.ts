import axios from "axios";
import { Dispatch } from "redux";

import { fetchData } from "../../utils/axiosConfig";
import {
  FilterActions,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "../../utils/constants";
import { RootState } from "../store";

// Define the action types

// Define the action interfaces
interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any;
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  error: string;
}

export type FetchDataAction =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export const fetchDataAction = () => {
  return async (
    dispatch: Dispatch<FetchDataAction>,
    getState: () => RootState
  ) => {
    const { filters } = getState();

    // eslint-disable-next-line no-debugger
    debugger;
    try {
      dispatch({ type: FETCH_DATA_REQUEST });

      const response = await fetchData(filters);
      console.log(response.data, "----->");
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: FETCH_DATA_FAILURE,
        error: "Error occurred while fetching data",
      });
    }
  };
};

export const setSectionFilter = (section: string) => {
  return {
    type: FilterActions.SET_SECTION_FILTER,
    payload: section,
  };
};

export const setSortFilter = (sort: string) => {
  return {
    type: FilterActions.SET_SORT_FILTER,
    payload: sort,
  };
};

export const setWindowFilter = (window: string) => {
  return {
    type: FilterActions.SET_WINDOW_FILTER,
    payload: window,
  };
};

export const setPage = (page: number) => {
  return {
    type: FilterActions.SET_PAGE,
    payload: page,
  };
};

export const setShowViral = (showViral: boolean) => {
  return {
    type: FilterActions.SET_SHOW_VIRAL,
    payload: showViral,
  };
};

export { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS };
