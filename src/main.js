/*
 * @Author: your name
 * @Date: 2025-02-17 17:07:26
 * @LastEditors: your name
 * @LastEditTime: 2025-02-17 17:53:53
 * @Description: 
 * @FilePath: /love-demo/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
