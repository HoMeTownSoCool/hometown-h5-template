import { createRequest } from '@hometownjs/request';
import { axiosConfig, requestConfig } from './config';
/** 创建请求器 */
export const request = createRequest(axiosConfig, requestConfig);
export default request;
