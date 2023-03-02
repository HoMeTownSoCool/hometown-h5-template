import request from '../request';
/**
 * 获取something
 * @returns server random
 */
export function fetchJustExample() {
  return request.post('/something');
}
