import { resolvePath } from '../utils/index';

const vitePath = resolvePath('/', import.meta.url);
export const viteConfig = {
  resolve: {
    alias: {
      '~': vitePath.root,
      '@': vitePath.src
    }
  }
};
