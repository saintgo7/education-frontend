import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 6
 */

const Page6 = () => import('./Page6.vue');
const Detail6 = () => import('./Detail6.vue');

export const route6: RouteRecordRaw = {
  path: '/example-6',
  name: 'example6',
  component: Page6,
  meta: {
    title: 'Example 6',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example6Detail',
      component: Detail6,
      props: true,
      meta: {
        title: 'Detail 6',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 6`);
    next();
  },
};
