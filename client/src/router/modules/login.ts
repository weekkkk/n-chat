import type { RouteRecordRaw } from 'vue-router';
import { LOGIN } from './names';
/**
 * * Авторизация
 */
const Login: RouteRecordRaw = {
  name: LOGIN,
  path: LOGIN,
  meta: { title: 'Вход' },
  component: () => import('@/forms/authorazation-form.vue'),
};
export default Login;
