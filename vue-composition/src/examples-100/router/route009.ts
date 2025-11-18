import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 9
 */

const Page9 = () => import('./Page9.vue');
const Detail9 = () => import('./Detail9.vue');

export const route9: RouteRecordRaw = {
  path: '/example-9',
  name: 'example9',
  component: Page9,
  meta: {
    title: 'Example 9',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example9Detail',
      component: Detail9,
      props: true,
      meta: {
        title: 'Detail 9',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 9`);
    next();
  },
};
