import autoImport from './auto-import';
import Unocss from 'unocss/vite';
import vconsole from './vconsole';

export function setupVitePlugins() {
  const plugins = [autoImport, Unocss()];
  if (process.env.NODE_ENV === 'development') {
    plugins.push(vconsole);
  }
  return plugins as never;
}
