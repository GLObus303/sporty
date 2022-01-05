import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = 'http://localhost:3000';

export const axiosGet = async <T = any>(
  url: string,
  options?: AxiosRequestConfig,
) => {
  const axiosResponse = await axios.get<T>(`${baseUrl}${url}`, options);

  return axiosResponse?.data;
};

export const axiosPost = async <T = any>(
  url: string,
  body: any,
  options?: AxiosRequestConfig,
) => {
  const axiosResponse = await axios.post<T>(`${baseUrl}${url}`, body, options);

  return axiosResponse?.data;
};
