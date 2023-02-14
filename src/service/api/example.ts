import request from '../request';

/**
 * 获取小姐姐
 * @returns Promise
 */
export function fetchGetGirl() {
  return request.get('/api/video_dyv2/');
}

/**
 * 获取 微博热搜
 * @returns
 */
export function fetchGetMostSearched() {
  return request.get(`/api/weibo-rs/`);
}
