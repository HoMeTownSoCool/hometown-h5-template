import { showToast, showDialog } from 'vant';
// Toast
import 'vant/es/toast/style';
// Dialog
import 'vant/es/dialog/style';
// Notify
// ImagePreview

export function setupVantUI() {
  window.$showToast = showToast;
  window.$showDialog = showDialog;
}
