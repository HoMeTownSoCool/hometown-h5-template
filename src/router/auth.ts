import type { Router } from 'vue-router';

/** 注册路由守卫 */
export function setupRouterBeforeEach(router: Router) {
  router.beforeEach((to, _, next) => {
    const { query } = to;
    if (query.t) {
      /** 存储token */
      setToken(query.t as string);
      /** 初始化用户信息 */
      initializeUserInfo();
      /** 判断用户是否实名 */
      if (checkAuthenticationStatus()) {
        next();
      } else {
        // console.log('from', _);
        // console.log('to', to);
        next('/name-auth');
      }
    }
    next();
  });
}

/** 初始化用户信息 */
function initializeUserInfo() {
  const mockUserInfo = {
    name: 'xxx',
    isAuth: true
  };
  setUserInfo(mockUserInfo);
}

/** 处理是否实名认证 */
export function checkAuthenticationStatus() {
  const userInfo = getUserInfo() as Record<string, string | boolean>;
  const isAuthenticated = userInfo.isAuth;
  return isAuthenticated;
}
