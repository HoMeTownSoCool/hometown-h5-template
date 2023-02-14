import autoImport from './auto-import';
import Unocss from 'unocss/vite';

export function setupVitePlugins() {
  const plugins = [autoImport, Unocss()];
  return plugins as never;
}
