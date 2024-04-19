import axios, {AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
const baseUrl = 'https://www.omdbapi.com/';
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 100000,
});

const requestHandler = async (request: InternalAxiosRequestConfig & AxiosRequestConfig) => request;

const responseHandler = (response: AxiosResponse) => response.data;

const errorHandler = (error: unknown) => Promise.reject(error);

instance.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);

instance.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);

export default instance;
