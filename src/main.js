import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './plugins/element.js';
import mstore from "./store.js";
import '@/assets/styles/init.css';

Vue.config.productionTip = false;

//自定义v-document-click指令
//当发生点击document事件时，执行binding.value(函数)
Vue.directive("document-click",{
  bind(el, binding, vnode) {
    document.addEventListener("click", binding.value, false);
  }
})

new Vue({
  store,
  router,
  mstore,
  render: h => h(App)
}).$mount('#app')
