import type { RouteRecordRaw } from 'vue-router';
import { CHAT } from './names';
/**
 * * Чат
 */
const Chat: RouteRecordRaw = {
  name: CHAT,
  path: CHAT,
  meta: { Title: 'Чат' },
  component: () => import('@/pages/chat-page.vue'),
};
export default Chat;
