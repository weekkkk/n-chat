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
    redirect: { name: 'chat' },
    children: [
      {
        path: 'forms',
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
        name: 'chat',
        path: 'chat',
        components: {
          header: () => import('@/layouts/header-layout.vue'),
          default: () => import('@/layouts/chat-layout.vue'),
        },
        redirect: { name: 'dialog' },
        children: [
          {
            name: 'dialog',
            path: 'dialog/:userId',
            components: {
              dialogs: () => import('@/pages/dialogs-page.vue'),
              messages: () => import('@/pages/messages-page.vue'),
              input: () => import('@/pages/input-page.vue'),
            },
            props: {
              input: (route) => {
                return { userId: route.params.userId };
              },
            },
          },
        ],
      },
      {
        path: 'list',
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
