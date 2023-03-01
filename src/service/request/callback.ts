import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { requestConfig } from './config';
import { SUCCESS_CODE, TOKEN_EXPIRED_CODE, TOKEN_EXPIRED_REDIRECT_URL } from './const';
import { showToast } from 'vant';

export function onRequest(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
  return new Promise(resolve => {
    const token = getToken() as string;
    config.headers = {
      ...config.headers,
      token
    };
    resolve(config);
  });
}

/** 处理成功 */
export function onBackendSuccess(responseData: Record<string, any> & AxiosResponse): boolean {
  const hasCodeKey = Object.keys(responseData).includes(requestConfig.codeKey);

  const isSuccessByCode = responseData.code === SUCCESS_CODE;

  const result = isObject(responseData) && hasCodeKey && isSuccessByCode;

  return result;
}

/** 处理失败 */
export function onBackendFail(responseData: Record<string, any> & AxiosResponse): Promise<AxiosResponse | void> {
  return new Promise(resolve => {
    const { data } = responseData;
    showToast({
      message: data.msg,
      onClose: () => {
        if (data.code === TOKEN_EXPIRED_CODE) {
          hanldeErrorByTokenExpired();
        }
      }
    });
    resolve(responseData);
  });
}

/** 处理token失效 */
export function hanldeErrorByTokenExpired() {
  removeToken();
  removeUserInfo();
  console.log(TOKEN_EXPIRED_REDIRECT_URL, 'gogogo');
}
