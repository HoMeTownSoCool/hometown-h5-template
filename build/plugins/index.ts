import autoImport from './auto-import';

export function setupVitePlugins() {
  const plugins = [autoImport];
  return plugins as never;
}
