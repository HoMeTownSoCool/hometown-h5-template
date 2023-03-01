import { createViteConfig } from '@hometownjs/vite-config-vue';
import { setupVitePlugins } from './build/plugins';
import { resolvePath } from './build/utils';
const vitePath = resolvePath('./', import.meta.url);
export default createViteConfig({
  vitePathRoot: vitePath.root,
  vitePathSrc: vitePath.src,
  vitePluginsDefaults: ['vue', 'html', 'visualizer'],
  unpluginResolvers: ['Vant'],
  vitePluginsCustom: setupVitePlugins(),
  buildManualChunks: {
    vue: ['vue'],
    'vue-router': ['vue-router'],
    vant: ['vant'],
    'crypto-js': ['crypto-js']
  }
});
