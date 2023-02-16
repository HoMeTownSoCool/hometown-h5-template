export const dialogProps = {
  /**
   * 确定
   */
  confirmButtonText: {
    type: String,
    default: (): string => '确定'
  },
  /**
   * 取消
   */
  cancelButtonText: {
    type: String,
    default: (): string => '取消'
  },
  /**
   * 是否展示提交按钮
   */
  showConfirmButton: {
    type: Boolean,
    default: (): boolean => true
  },
  /**
   * 是否展示取消按钮
   */
  showCancelButton: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * 是否显示右上角X
   */
  showClose: {
    type: Boolean,
    default: (): boolean => true
  },
  /** 是否显示 */
  show: {
    type: Boolean,
    default: (): boolean => false
  }
};
