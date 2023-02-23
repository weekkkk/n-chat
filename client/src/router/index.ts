import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Authorization, Chat } from './modules';
import { AUTHORIZATION, CHAT } from './modules/names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'default' },
    component: () => import('@/layouts/default-layout.vue'),
    children: [
      {
        name: 'forms',
        path: 'forms',
        component: () => import('@/layouts/form-layout.vue'),
        redirect: { name: AUTHORIZATION },
        children: [Authorization],
      },
      {
        name: 'default',
        path: 'default',
        component: () => import('@/layouts/base-layout.vue'),
        redirect: { name: CHAT },
        children: [Chat],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export { routes };
export default router;

router.beforeEach(async (to, from, next) => {
  const { Title } = to.meta;
  const brand = '';
  document.title = `${brand}${Title as string}`;
  next();
});
