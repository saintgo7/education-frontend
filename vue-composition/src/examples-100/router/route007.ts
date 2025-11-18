import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 7
 */

const Page7 = () => import('./Page7.vue');
const Detail7 = () => import('./Detail7.vue');

export const route7: RouteRecordRaw = {
  path: '/example-7',
  name: 'example7',
  component: Page7,
  meta: {
    title: 'Example 7',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example7Detail',
      component: Detail7,
      props: true,
      meta: {
        title: 'Detail 7',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 7`);
    next();
  },
};
