import { createViteConfig } from '@hometownjs/vite-config-vue';
import { hometownViteConfig, viteConfig } from './build/config';
export default createViteConfig(hometownViteConfig, viteConfig);
