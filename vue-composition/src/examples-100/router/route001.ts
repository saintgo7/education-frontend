import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 1
 */

const Page1 = () => import('./Page1.vue');
const Detail1 = () => import('./Detail1.vue');

export const route1: RouteRecordRaw = {
  path: '/example-1',
  name: 'example1',
  component: Page1,
  meta: {
    title: 'Example 1',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example1Detail',
      component: Detail1,
      props: true,
      meta: {
        title: 'Detail 1',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 1`);
    next();
  },
};
