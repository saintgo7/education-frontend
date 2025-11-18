import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 10
 */

const Page10 = () => import('./Page10.vue');
const Detail10 = () => import('./Detail10.vue');

export const route10: RouteRecordRaw = {
  path: '/example-10',
  name: 'example10',
  component: Page10,
  meta: {
    title: 'Example 10',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example10Detail',
      component: Detail10,
      props: true,
      meta: {
        title: 'Detail 10',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 10`);
    next();
  },
};
