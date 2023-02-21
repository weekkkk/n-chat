import type { RouteRecordRaw } from 'vue-router';
import { AUTHORIZATION } from './names';
/**
 * * Авторизация
 */
const Authorization: RouteRecordRaw = {
  name: AUTHORIZATION,
  path: AUTHORIZATION,
  meta: { Title: 'Авторизация' },
  component: () => import('@/pages/authorization-page.vue'),
};
export default Authorization;
