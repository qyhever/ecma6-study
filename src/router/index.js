import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import axios from '@/axios/axios';

export default new Router({
  routes: [
    { path: '/axios', component: axios }
  ]
});