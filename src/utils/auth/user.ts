import { EnumStorageKey } from '@/enum';
import { getLocal, removeLocal, setLocal } from '../storage/index';

/** 设置用户信息 */
export function setUserInfo<U>(userInfo: U) {
  setLocal(EnumStorageKey['user-info'], userInfo);
}

/** 获取local中的 用户信息 */
export function getUserInfo() {
  return getLocal(EnumStorageKey['user-info']);
}

/** 设置token */
export function setToken(token: string) {
  setLocal(EnumStorageKey.token, token);
}

/** 获取local中的 token */
export function getToken() {
  return getLocal(EnumStorageKey.token);
}
/** 去除token */
export function removeToken() {
  removeLocal(EnumStorageKey.token);
}

/** 去除用户信息 */
export function removeUserInfo() {
  removeLocal(EnumStorageKey['user-info']);
}
