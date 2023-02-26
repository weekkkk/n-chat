import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Login, Registration, Chat } from './modules';
import { LOGIN, CHAT } from './modules/names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'forms' },
    component: () => import('@/layouts/default-layout.vue'),
    children: [
      {
        name: 'forms',
        path: 'forms',
        component: () => import('@/layouts/form-layout.vue'),
        redirect: { name: LOGIN },
        children: [Login, Registration],
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
  const { title } = to.meta;
  const brand = '';
  document.title = `${brand}${title as string}`;
  next();
});
