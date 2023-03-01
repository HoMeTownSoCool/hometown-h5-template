import request from '../request';
/**
 * 钱包账户查询
 */
export function fetchQueryAccInfo() {
  return request.post('/account/api/walletAcc/queryAccInfo');
}
/**
 * 钱包账户注销
 */
export function fetchReleaseAcc() {
  return request.post('/account/api/walletAcc/releaseAcc');
}
/**
 * 查询手机号
 */
export function fetchGetUserInfo() {
  return request.post('/user/api/user/getUserInfo');
}
/**
 * 发送验证码
 */
export function fetchSendCheckCodeAfterLogin() {
  return request.post('/user/api/wechat/sendCheckCodeAfterLogin');
}
