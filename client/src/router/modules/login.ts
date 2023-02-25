import type { RouteRecordRaw } from 'vue-router';
import { LOGIN } from './names';
/**
 * * Авторизация
 */
const Login: RouteRecordRaw = {
  name: LOGIN,
  path: LOGIN,
  meta: { Title: 'Авторизация' },
  component: () => import('@/pages/login-page.vue'),
};
export default Login;
