import Axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './end.point';

export function getList(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/korea/IndependenceActivist/List`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};

export function getNewList(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`http://27.101.201.20/opnAPI/publicReportList.do?nPageIndex=1`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};