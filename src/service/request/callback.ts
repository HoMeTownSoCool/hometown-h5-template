import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { requestConfig } from './config';
export function onRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
  return new Promise(resolve => {
    resolve(config);
  });
}

export function onBackendSuccess(responseData: any): boolean {
  /** 后端自定义的成功code */
  const SUCCESS_CODE = 0;

  const hasCodeKey = Object.keys(responseData).includes(requestConfig.codeKey);

  const isFailedByCode = responseData.code !== SUCCESS_CODE;

  const result = isObject(responseData) && hasCodeKey && isFailedByCode;

  return result;
}

export function onBackendFail(responseData: any): Promise<AxiosResponse | void> {
  return new Promise(resolve => {
    resolve(responseData);
  });
}
