import request from '../request';
/**
 * 获取 新闻 https://www.free-api.com/doc/66
 * @param type - 类型,top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
 * @param key - 请求参数
 * @returns
 */
export function fetchGetNews(params: any) {
  return request.get(`/toutiao/index`, {
    params
  });
}
