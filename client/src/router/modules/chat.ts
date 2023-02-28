import type { RouteRecordRaw } from 'vue-router';
import { CHAT } from './names';
/**
 * * Чат
 */
const Chat: RouteRecordRaw = {
  name: CHAT,
  path: CHAT,
  meta: { title: 'Чат' },
  components: {
    header: () => import('@/layouts/header-layout.vue'),
    default: () => import('@/layouts/base-layout.vue'),
  },
};
export default Chat;
