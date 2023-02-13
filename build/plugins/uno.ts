import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';

// https://vitejs.dev/config/
// https://icones.js.org/
// https://uno.antfu.me/
export default Unocss({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-col': 'flex flex-col'
  },
  theme: {
    colors: {
      primary: '#ccf'
    }
  }
});
