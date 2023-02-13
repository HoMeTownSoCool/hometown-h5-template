import autoImport from './auto-import';
import uno from './uno';

export function setupVitePlugins() {
  const plugins = [autoImport, uno];
  return plugins as never;
}
