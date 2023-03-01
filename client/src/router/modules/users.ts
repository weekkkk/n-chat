import type { RouteRecordRaw } from 'vue-router';
import { USERS } from './names';
/**
 * * Пользователи
 */
const Users: RouteRecordRaw = {
  name: USERS,
  path: USERS,
  meta: { title: 'Пользователи' },
  components: {
    header: () => import('@/layouts/header-layout.vue'),
    default: () => import('@/layouts/box-layout.vue'),
  },
  children: [
    
  ]
};
export default Users;
