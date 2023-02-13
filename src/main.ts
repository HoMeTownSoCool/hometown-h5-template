import { createApp } from 'vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import setupVantUI from '@/plugins/vant';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);

  // 挂载pinia状态
  setupStore(app);

  // 挂载路由
  await setupRouter(app);

  // 注册vantUI
  setupVantUI();

  // 路由准备就绪后挂载 App
  app.mount('#app');
}

setupApp();
