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
    path: '/',
    component: () => import('@/layouts/default-layout.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export { routes };
export default router;
/**
 * * Обработка переходов по роутам
 */
router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;
  const brand = '';
  if (title) document.title = `${brand}${title as string}`;
  next();
});
