import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 2
 */

const Page2 = () => import('./Page2.vue');
const Detail2 = () => import('./Detail2.vue');

export const route2: RouteRecordRaw = {
  path: '/example-2',
  name: 'example2',
  component: Page2,
  meta: {
    title: 'Example 2',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example2Detail',
      component: Detail2,
      props: true,
      meta: {
        title: 'Detail 2',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 2`);
    next();
  },
};
