import { onRequest, onBackendSuccess, onBackendFail } from './callback';

const viteEnv = import.meta.env;
const viteHttpProxy = viteEnv.VITE_HTTP_PROXY === 'true';
const viteHttpProxyPerfix = viteEnv.VITE_HTTP_PROXY_PREFIX;
const viteHttpAPIUrl = viteEnv.VITE_HTTP_API_URL;
export const baseURL = viteHttpProxy ? viteHttpProxyPerfix : viteHttpAPIUrl;

export const axiosConfig = {
  baseURL
};

export const requestConfig = {
  codeKey: 'code',
  dataKey: 'data',
  msgKey: 'msg',
  onRequest,
  onBackendSuccess,
  onBackendFail
};
