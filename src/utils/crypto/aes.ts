import CryptoJS from 'crypto-js';

const CryptoSecretAES = '__CryptoJS_Secret__';

/**
 * 加密数据
 * @param data - 数据
 */
export function encryptoAES(data: any) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecretAES).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decryptoAES(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecretAES);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
