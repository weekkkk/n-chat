import type { RouteRecordRaw } from 'vue-router';
import { CHAT } from './names';
/**
 * * Чат
 */
const Chat: RouteRecordRaw = {
  name: CHAT,
  path: CHAT,
  meta: { Title: 'Чат' },
  components: {
    aside: () => import('@/pages/dialogs-page.vue'),
    // header: () => import('@/pages/messages-page.vue'),
    body: () => import('@/pages/messages-page.vue'),
    footer: () => import('@/pages/input-page.vue'),
  },
};
export default Chat;
