export enum SectionFilters {
  Hot = "hot",
  Top = "top",
  User = "user",
}

export enum SortFilters {
  Viral = "viral",
  Top = "top",
  Time = "time",
  Rising = "rising",
}

export enum WindowFilters {
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
  All = "all",
}

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const FilterActions = {
  SET_SECTION_FILTER: "SET_SECTION_FILTER",
  SET_SORT_FILTER: "SET_SORT_FILTER",
  SET_WINDOW_FILTER: "SET_WINDOW_FILTER",
  SET_PAGE: "SET_PAGE",
  SET_SHOW_VIRAL: "SET_SHOW_VIRAL",
};

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const initialFilterState = {
  section: "hot",
  sort: "viral",
  window: "day",
  page: 1,
  showViral: true,
};
