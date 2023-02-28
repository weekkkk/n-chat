import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Login, Registration, Activation, Chat } from './modules';
import { LOGIN, CHAT, ACTIVATION } from './modules/names';

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
      Chat,
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

  const userStore = useUserStore();

  if (!userStore.user && localStorage.getItem('token')) {
    await userStore.checkAuth();
  }

  console.log(userStore.user);

  if (!userStore.user && to.name != LOGIN && to.name != REGISTRATION) {
    next({ name: LOGIN });
  } else if (
    userStore.user &&
    userStore.user.isActivated &&
    (to.name == LOGIN || to.name == REGISTRATION || to.name == ACTIVATION)
  ) {
    next({ name: CHAT });
  } else if (
    userStore.user &&
    !userStore.user.isActivated &&
    to.name != ACTIVATION
  ) {
    next({ name: ACTIVATION });
  } else {
    next();
  }
  // next();
});
