import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 3
 */

const Page3 = () => import('./Page3.vue');
const Detail3 = () => import('./Detail3.vue');

export const route3: RouteRecordRaw = {
  path: '/example-3',
  name: 'example3',
  component: Page3,
  meta: {
    title: 'Example 3',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example3Detail',
      component: Detail3,
      props: true,
      meta: {
        title: 'Detail 3',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 3`);
    next();
  },
};
