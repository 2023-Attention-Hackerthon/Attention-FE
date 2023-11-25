import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

baseAxios.interceptors.request.use((config) => {
  if (!config.headers) {
    throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
  }

  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default baseAxios;
