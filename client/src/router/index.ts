import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { Authorization } from './modules';
import { AUTHORIZATION } from './modules/names';

const routes: Array<RouteRecordRaw> = [
  {
    name: '',
    path: '',
    component: () => import('@/layouts/form-layout.vue'),
    redirect: { name: AUTHORIZATION },
    children: [Authorization],
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
