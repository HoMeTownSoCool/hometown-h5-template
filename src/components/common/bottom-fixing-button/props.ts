export const bottomFixingButtonProps = {
  /** 按钮的文字 */
  text: {
    type: String,
    default: (): string => '确定'
  },
  /** 按钮是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  }
};
