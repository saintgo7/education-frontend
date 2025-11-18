import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 5
 */

const Page5 = () => import('./Page5.vue');
const Detail5 = () => import('./Detail5.vue');

export const route5: RouteRecordRaw = {
  path: '/example-5',
  name: 'example5',
  component: Page5,
  meta: {
    title: 'Example 5',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example5Detail',
      component: Detail5,
      props: true,
      meta: {
        title: 'Detail 5',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 5`);
    next();
  },
};
