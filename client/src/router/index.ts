import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Login, Registration, Activation, Chat } from './modules';
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
        children: [Login, Registration, Activation],
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

import { useUserStore } from '@/stores/user';
import { REGISTRATION } from './modules/names';

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  const brand = '';
  document.title = `${brand}${title as string}`;

  // const userStore = useUserStore();

  // if (!userStore.isAuth && localStorage.getItem('token')) {
  //   await userStore.checkAuth();
  // }
  // if (!userStore.isAuth && to.name != LOGIN && to.name != REGISTRATION) {
  //   next({ name: LOGIN });
  // } else if (
  //   userStore.isAuth &&
  //   (to.name == LOGIN || to.name == REGISTRATION)
  // ) {
  //   next({ name: CHAT });
  // } else {
  //   next();
  // }
  next();
});
