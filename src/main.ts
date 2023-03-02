import { createApp } from 'vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import App from './App.vue';
import '@/plugins/index';
// eslint-disable-next-line import/no-unresolved
import 'uno.css';
async function setupApp() {
  const app = createApp(App);

  // 挂载pinia状态
  setupStore(app);

  // 挂载路由
  await setupRouter(app);

  // 路由准备就绪后挂载 App
  app.mount('#app');
}

setupApp();
