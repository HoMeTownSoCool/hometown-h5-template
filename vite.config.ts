import { resolvePath } from './build/config/path';
import { createViteConfig } from '@hometownjs/vite-config-vue';
const { root, src } = resolvePath('./', import.meta.url);
const hometownViteConfig = {
  vitePathRoot: root,
  vitePathSrc: src
};
export default createViteConfig(hometownViteConfig, {});
