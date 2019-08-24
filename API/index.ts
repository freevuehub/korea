import Axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './end.point';

export const getList = () => new Promise((resolve, reject) => {
  Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/list`)
  .then((res: AxiosResponse) => resolve(res))
  .catch((e: AxiosError) => reject(e))
});

export const getKey = (key: string) => new Promise((resolve, reject) => {
  Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/list/${key}`)
  .then((res: AxiosResponse) => resolve(res))
  .catch((e: AxiosError) => reject(e))
});

export function addData(id: string, data: any): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.post(`${endpoint.BASE_URL}/${endpoint.VER}/korea/${id}`, data)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};
