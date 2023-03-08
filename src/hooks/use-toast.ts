import { showToast, showLoadingToast, closeToast, showSuccessToast, showFailToast } from 'vant';
import { type ToastOptions } from 'vant';
const TOAST_LOADING_CONFIG = {
  message: '加载中...',
  forbidClick: true,
  loadingType: 'spinner'
};
export function useToast() {
  /** loading */
  function loading(config?: ToastOptions) {
    showLoadingToast(Object.assign(TOAST_LOADING_CONFIG, config));
  }
  /** normal */
  function toast(text: string, onClose?: () => void) {
    showToast({
      message: text,
      onClose
    });
  }
  /** success */
  function success(text: string, onClose?: () => void) {
    showSuccessToast({
      message: text,
      onClose
    });
  }
  /** 关闭 */
  function close() {
    closeToast();
  }
  function error(text: string, onClose?: () => void) {
    showFailToast({
      message: text,
      onClose
    });
  }
  return {
    loading,
    success,
    toast,
    close,
    error
  };
}
