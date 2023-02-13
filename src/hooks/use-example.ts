/** 示例hook */
export function useExample() {
  /** 两数相加 */
  function add(num1: number, num2: number) {
    return num1 + num2;
  }
  return {
    add
  };
}
