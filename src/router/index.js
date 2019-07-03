import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import About from '../pages/About';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'Page 2',
        component: About,
      },
      { path: '*', redirect: '/' }
];

const router = new Router({
    mode: 'history',
    routes,
  });
  
  export default router;