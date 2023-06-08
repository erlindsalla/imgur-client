import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { FilterState } from "./types";

// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? `https://${process.env.VERCEL_URL}/api`
//     : process.env.REACT_APP_API_BASE_URL;

const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:9000"
    : "https://imgur-server-production-c1cd.up.railway.app";
const api = axios.create({
  baseURL: baseURL,
});

export const fetchData = async (
  filter: FilterState
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // Allow all origins
    },
    url: "/gallery",
    data: filter,
  };
  debugger;
  const response = await api(config);
  return response;
};

export default api;
