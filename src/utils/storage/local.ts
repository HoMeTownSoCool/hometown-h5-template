import { encryptoAES, decryptoAES } from '../crypto';

interface StorageData {
  value: any;
  expire: number | null;
}

/** 默认缓存期限为7天 */
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 7;

/** 设置local storage缓存 */
export function setLocal(key: string, value: any, expire: number | null = DEFAULT_CACHE_TIME) {
  const storageData: StorageData = {
    expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
    value
  };
  const json = encryptoAES(storageData);
  window.localStorage.setItem(key, json);
}

/** 获取local storage缓存 */
export function getLocal<T>(key: string) {
  const json = window.localStorage.getItem(key);
  if (json) {
    let storageData: StorageData | null = null;
    try {
      storageData = decryptoAES(json);
    } catch {
      // 防止解析失败
    }
    if (storageData) {
      const { value, expire } = storageData;
      // 在有效期内直接返回
      if (expire === null || expire >= Date.now()) {
        return value as T;
      }
    }
    removeLocal(key);
    return null;
  }
  return null;
}

/** 删除local storage缓存 */
export function removeLocal(key: string) {
  window.localStorage.removeItem(key);
}

/** 清除local storage缓存 */
export function clearLocal() {
  window.localStorage.clear();
}
