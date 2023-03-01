import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Login, Registration, Activation, Chat, Users } from './modules';
import { LOGIN, CHAT, ACTIVATION } from './modules/names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default-layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/layouts/form-layout.vue'),
        redirect: { name: 'registration' },
        children: [
          {
            name: 'registration',
            path: 'registration',
            component: () => import('@/forms/authorazation-form.vue'),
          },
          {
            name: 'login',
            path: 'login',
            component: () => import('@/forms/authorazation-form.vue'),
          },
          {
            name: 'activation',
            path: 'activation',
            component: () => import('@/forms/activation-form.vue'),
          },
        ],
      },
      {
        path: '',
        components: {
          header: () => import('@/layouts/header-layout.vue'),
          default: () => import('@/layouts/chat-layout.vue'),
        },
        children: [
          {
            name: 'chat',
            path: 'chat',
            component: () => import('@/pages/users-page.vue'),
          },
        ],
      },
      {
        path: '',
        components: {
          header: () => import('@/layouts/header-layout.vue'),
          default: () => import('@/layouts/box-layout.vue'),
        },
        children: [
          {
            name: 'users',
            path: 'users',
            component: () => import('@/pages/users-page.vue'),
          },
        ],
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
  if (title) document.title = `${brand}${title as string}`;

  const userStore = useUserStore();

  if (!userStore.user && localStorage.getItem('token')) {
    await userStore.checkAuth();
  }

  if (!userStore.user && to.name != LOGIN && to.name != REGISTRATION) {
    next({ name: LOGIN });
  } else if (
    userStore.user &&
    userStore.user.isActivated &&
    (to.name == LOGIN || to.name == REGISTRATION || to.name == ACTIVATION)
  ) {
    next({ name: 'users' });
  } else if (
    userStore.user &&
    !userStore.user.isActivated &&
    to.name != ACTIVATION
  ) {
    next({ name: ACTIVATION });
  } else {
    next();
  }
});
