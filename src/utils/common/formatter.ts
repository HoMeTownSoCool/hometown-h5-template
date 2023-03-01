/**
 * 在字符串中填充空格
 * @param param 参数
 * @returns
 */
export function fillSpace({ val, oldVal, step }: Record<string, any>): string {
  let res = val;
  if (val.length > (oldVal?.length || 0)) {
    if (step.includes(val.length)) {
      const length = val.length;
      res = `${val.substr(0, length - 1)} ${val[length - 1]}`;
    }
  } else if (step.includes(val.length)) {
    res = val.replace(/\s*$/g, '');
  }
  return res;
}
