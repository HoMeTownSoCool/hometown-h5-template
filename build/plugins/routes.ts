import Pages from 'vite-plugin-pages';
export default Pages({
  dirs: [{ dir: 'src/views', baseRoute: '/' }],
  // 异步方式加载路由组件
  importMode: 'async',
  extensions: ['vue'],
  exclude: ['**/components/*.vue']
});
