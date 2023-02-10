import { setupVitePlugins } from '../plugins/index';
export const hometownViteConfig = {
  unpluginResolvers: ['Vant'],
  vitePluginsCustom: setupVitePlugins()
};
