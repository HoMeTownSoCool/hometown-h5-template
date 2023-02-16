import type { PropType } from 'vue';

export type InputType = undefined | 'text' | 'password';
export const pInputProps = {
  /** model value */
  modelValue: {
    type: String,
    default: ''
  },
  /** 描述 */
  placeholder: {
    type: String,
    default: (): string => ''
  },
  /** input输入框的类型 */
  type: {
    type: String as PropType<InputType>,
    default: (): string => 'text'
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  /** 校验 */
  verifyPass: {
    type: Function,
    default: () => true
  },
  /** 校验失败的文字提示 */
  verifyFailWord: {
    type: String,
    default: (): string => '校验失败'
  }
};
