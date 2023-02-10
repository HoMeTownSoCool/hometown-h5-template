import AutoImport from 'unplugin-auto-import/vite';
export default AutoImport({
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
  imports: ['vue', 'vue-router'],
  dts: true
});
