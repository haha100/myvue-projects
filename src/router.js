//路由配置文件

import Vue from 'vue';
import Router from 'vue-router';
import Default from './layout/Default.vue';
import FirstPage from './page/firstpage.vue';
import ChangeCity from "./page/changeCity.vue";
import GoodsList from "./page/goodsList.vue";
import BlankPage from "./layout/blank.vue";
import Login from "./page/login.vue";
import Register from "./page/register.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/home',
      component: Default,
      children: [{
        path: '/home',
        name: 'firstpage',
        component: FirstPage
      },{
        path: "/changeCity",
        name: "changeCity",
        component: ChangeCity
      },{
        path: "s/:name",
        name: "goods",
        component: GoodsList
      }]
    },{
      path: "/blank",
      name: "blank",
      component: BlankPage,
      children: [{
        path: "login",
        name: "login",
        component: Login
      }, {
        path: "register",
        name: "register",
        component: Register
      }]
    }
  ]
})
