import { viteVConsole } from 'vite-plugin-vconsole';
import path from 'path';
export default viteVConsole({
  entry: path.resolve('src/main.ts'),
  localEnabled: true,
  enabled: true,
  config: {
    maxLogNumber: 1000
  }
});
