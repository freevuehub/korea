import Axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './end.point';

export function getList(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/korea/tempList`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};
export function getNewList(id: string): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/korea/list/${id}`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};
export function getIdx(id: string, key: string): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/korea/list/${id}/${key}`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};

export function addData(id: string, data: any): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.post(`${endpoint.BASE_URL}/${endpoint.VER}/korea/${id}`, data)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};
