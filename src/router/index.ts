import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login-last',
    },
    {
      path: '/Data-Search',
      name: 'Data-Search',
      component: () => import('@/views/Data-Search/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: () => import('@/views/entrance/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/Data-history',
      name: 'Data-history',
      component: () => import('@/views/Data-history/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/Data-Analysis',
      name: 'Data-Analysis',
      component: () => import('@/views/Data-Analysis/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/Data-storage',
      name: 'Data-storage',
      component: () => import('@/views/Data-storage/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/login-last',
      name: 'login-last',
      component: () => import('@/views/login-last/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    REDIRECT_MAIN,
    NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
