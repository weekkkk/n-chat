import type { RouteRecordRaw } from 'vue-router';
import { ACTIVATION } from './names';
/**
 * * Активация аккаунта
 */
const Activation: RouteRecordRaw = {
  name: ACTIVATION,
  path: ACTIVATION,
  meta: { title: 'Активация' },
  component: () => import('@/forms/activation-form.vue'),
};
export default Activation;
