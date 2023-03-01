import request from '../request';
/**
 * 获取服务端随机因子
 * @returns server random
 */
export function fetchGetServerRandom() {
  return request.post('/account/api/walletAcc/getServerRandom');
}
