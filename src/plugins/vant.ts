import { showToast, showDialog } from 'vant';
import type { ToastOptions, DialogOptions } from 'vant';
// Toast
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';
// Notify
// ImagePreview

export function setupVantUI() {
  (window as Window & Record<string, any>).$showToast = (options: ToastOptions | string): void => {
    showToast(options);
  };
  (window as Window & Record<string, any>).$showDialog = (options: DialogOptions): void => {
    showDialog(options);
  };
}
