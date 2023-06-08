import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { FilterState } from "./types";

const baseURL =
  process.env.NODE_ENV === "production"
    ? `https://${process.env.VERCEL_URL}/api`
    : process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
});

export const fetchData = async (
  filter: FilterState
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/gallery",
    data: filter,
  };

  const response = await api(config);
  return response;
};

export default api;
