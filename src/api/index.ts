import axios, { AxiosInstance } from 'axios';

const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    withCredentials: true,
  });

  instance.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
  instance.defaults.headers.put['Content-Type'] =
    'application/x-www-form-urlencoded';
  instance.defaults.timeout = 60000;
  return instance;
};

export const baseInstance = createAxiosInstance(
  process.env.REACT_APP_DEV_URI || ''
);
