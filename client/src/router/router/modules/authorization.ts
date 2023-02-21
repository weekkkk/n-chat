import type { RouteRecordRaw } from 'vue-router';
import { AUTHORIZATION } from './names';
/**
 * * Главная
 */
const Main: RouteRecordRaw = {
  name: AUTHORIZATION,
  path: AUTHORIZATION,
  meta: { Title: 'Авторизация' },
  component: () => import('@/pages/authorization.vue'),
};
export default Main;
