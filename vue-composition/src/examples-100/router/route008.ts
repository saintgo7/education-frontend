import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 8
 */

const Page8 = () => import('./Page8.vue');
const Detail8 = () => import('./Detail8.vue');

export const route8: RouteRecordRaw = {
  path: '/example-8',
  name: 'example8',
  component: Page8,
  meta: {
    title: 'Example 8',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example8Detail',
      component: Detail8,
      props: true,
      meta: {
        title: 'Detail 8',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 8`);
    next();
  },
};
