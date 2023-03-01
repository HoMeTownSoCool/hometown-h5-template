/**
 * 千分符分割
 * @param num 数字
 * @returns 1,000
 */
export function splitThousandSeparator(num: number | string): string {
  let tempnum = Number(num);
  let prefix = '';
  if (tempnum < 0) {
    tempnum *= -1;
    prefix = '-';
  }
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILI_PATTERN = /(?=(?!\b)(\d{3})+\.?\b)/g;
  const str: string = tempnum.toString().replace(DIGIT_PATTERN, m => m.replace(MILI_PATTERN, ','));
  return prefix + str;
}
