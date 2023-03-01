// 姓名
export function nameReg(name: string) {
  const reg = /[^a-zA-Z0-9\u4E00-\u9FA5.·]/g;
  if (reg.test(name)) {
    return true;
  }
  return false;
}
// 身份证
export function IDReg(id: string) {
  const reg = /(^([1-6][1-9]|50)\d{4}(18|19|20)\d{2}((0[1-9])|10|11|12)(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
  if (reg.test(id)) {
    return false;
  }
  return true;
}
