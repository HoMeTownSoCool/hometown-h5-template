import { createRequest } from '@hometownjs/request';
import { axiosConfig, requestConfig } from './config';
/** 创建请求器 */
export const request = createRequest(axiosConfig, requestConfig);
export default request;
// https://www.jianshu.com/p/53deecb09077
