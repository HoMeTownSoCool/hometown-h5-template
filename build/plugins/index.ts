import autoImport from './auto-import';
import Unocss from 'unocss/vite';
import vconsole from './vconsole';
import routes from './routes';

export function setupVitePlugins() {
  const plugins = [autoImport, Unocss(), routes];
  if (process.env.NODE_ENV === 'development') {
    plugins.push(vconsole);
  }
  return plugins as never;
}
