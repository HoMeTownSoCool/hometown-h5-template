import type { App } from 'vue';
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';
const { VITE_HASH_ROUTE = 'false', VITE_BASE_URL } = import.meta.env;
const history =
  VITE_HASH_ROUTE === 'true'
    ? createWebHashHistory(VITE_BASE_URL as string)
    : createWebHistory(VITE_BASE_URL as string);

export const router = createRouter({
  history,
  routes
});

export async function setupRouter(app: App) {
  app.use(router);
  await router.isReady();
}
