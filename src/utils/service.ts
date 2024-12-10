import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.145:4000',
});
export const service = async (
  method: string,
  customHeader?: RawAxiosRequestHeaders | null,
  body?: any,
  endpoint?: string,
) => {
  const config: AxiosRequestConfig = body
    ? {
        url: endpoint,
        headers: customHeader
          ? customHeader
          : {
              'Content-Type': 'application/json',
            },
        method: method,
        data: body,
      }
    : {
        url: endpoint,
        headers: customHeader
          ? customHeader
          : {
              'Content-Type': 'application/json',
            },
        method: method,
      };
  const res: AxiosResponse = await instance(config);
  return res;
};
