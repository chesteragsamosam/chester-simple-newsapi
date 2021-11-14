import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/News/News.vue')
  },
  {
    name: 'newsDetail',
    path: '/:slugtitle',
    component: () => import('./pages/NewsDetail/NewsDetail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
