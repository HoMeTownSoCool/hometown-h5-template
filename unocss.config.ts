import { presetUno, presetAttributify, presetIcons, defineConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import { createRules, createShortcuts, createTheme } from './src/plugins/unocss';
export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  transformers: [transformerDirectives()],
  rules: createRules(),
  shortcuts: createShortcuts(),
  theme: createTheme()
});
