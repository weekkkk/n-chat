import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
/**
 * * Роуты
 */
const routes: Array<RouteRecordRaw> = [
  {
    name: 'authorazation',
    path: '/authorazation',
    component: () => import('@/layouts/form-layout.vue'),
    redirect: { name: 'login' },
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('@/forms/authorazation-form.vue'),
        meta: {
          title: 'Вход',
        },
      },
      {
        name: 'registration',
        path: 'registration',
        component: () => import('@/forms/authorazation-form.vue'),
        meta: {
          title: 'Регистрация',
        },
      },
      {
        name: 'activation',
        path: 'activation',
        component: () => import('@/forms/activation-form.vue'),
        meta: {
          title: 'Активация',
        },
      },
    ],
  },
  {
    name: 'default',
    path: '/',
    component: () => import('@/layouts/header-layout.vue'),
    redirect: { name: 'chat' },
    children: [
      {
        name: 'chat',
        path: 'chat',
        component: () => import('@/layouts/chat-layout.vue'),
        meta: {
          title: 'Чат',
        },
      },
      {
        name: 'information',
        path: 'information',
        component: () => import('@/layouts/box-layout.vue'),
        redirect: { name: 'users' },
        children: [
          {
            name: 'users',
            path: 'users',
            component: () => import('@/pages/users-page.vue'),
            meta: {
              title: 'Пользователи',
            },
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

import { useUserStore } from '@/stores';
/**
 * * Обработка переходов по роутам
 */
router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  const brand = '';
  if (title) document.title = `${brand}${title as string}`;

  const userStore = useUserStore();
  if (!userStore.isAuthChecked) {
    await userStore.checkAuth();
  }

  if (userStore.user) {
    if (
      to.name == 'registration' ||
      to.name == 'login' ||
      to.name == 'activation'
    )
      next({ name: 'users' });
    else next();
  } else {
    if (
      to.name != 'registration' &&
      to.name != 'login' &&
      to.name != 'activation'
    ) {
      next({ name: 'login' });
    } else next();
  }
});
