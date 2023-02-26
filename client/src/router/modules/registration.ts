import type { RouteRecordRaw } from 'vue-router';
import { REGISTRATION } from './names';
/**
 * * Регистрация
 */
const Registration: RouteRecordRaw = {
  name: REGISTRATION,
  path: REGISTRATION,
  meta: { title: 'Регистрация' },
  component: () => import('@/forms/authorazation-form.vue'),
};
export default Registration;
