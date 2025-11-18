import { RouteRecordRaw } from 'vue-router';

/**
 * Router Example 4
 */

const Page4 = () => import('./Page4.vue');
const Detail4 = () => import('./Detail4.vue');

export const route4: RouteRecordRaw = {
  path: '/example-4',
  name: 'example4',
  component: Page4,
  meta: {
    title: 'Example 4',
    requiresAuth: false,
    roles: ['user', 'admin'],
  },
  children: [
    {
      path: 'detail/:id',
      name: 'example4Detail',
      component: Detail4,
      props: true,
      meta: {
        title: 'Detail 4',
      },
    },
  ],
  beforeEnter: (to, from, next) => {
    console.log(`Entering route 4`);
    next();
  },
};
