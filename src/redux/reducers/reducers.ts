import { initialState, initialFilterState } from "../../utils/constants";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FetchDataAction,
} from "../action/actions";

// Define the reducer function
export const fetchDataReducer = (
  state = initialState,
  action: FetchDataAction
) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const filterReducer = (state = initialFilterState, action: any) => {
  switch (action.type) {
    case "SET_SECTION_FILTER":
      return {
        ...state,
        section: action.payload,
      };
    case "SET_SORT_FILTER":
      return {
        ...state,
        sort: action.payload,
      };
    case "SET_WINDOW_FILTER":
      return {
        ...state,
        window: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "SET_SHOW_VIRAL":
      return {
        ...state,
        showViral: action.payload,
      };
    default:
      return state;
  }
};
