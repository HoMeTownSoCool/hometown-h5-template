import { createViteConfig } from '@hometownjs/vite-config-vue';
import { setupVitePlugins } from './build/plugins';
import { resolvePath } from './build/utils';
const vitePath = resolvePath('./', import.meta.url);
export default createViteConfig({
  vitePathRoot: vitePath.root,
  vitePathSrc: vitePath.src,
  unpluginResolvers: ['Vant'],
  vitePluginsCustom: setupVitePlugins()
});
