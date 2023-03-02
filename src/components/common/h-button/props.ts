import type { PropType } from 'vue';
export type ButtonType = undefined | 'primary' | 'secondary';
export const buttonProps = {
  /** 按钮的类型 */
  type: {
    type: String as PropType<ButtonType>,
    default: (): undefined => undefined
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 是否是「文字」按钮 */
  text: {
    type: Boolean,
    default: (): boolean => false
  }
};
