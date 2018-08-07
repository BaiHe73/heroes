// 导入模块 模块化语法 CommonJs
// const Vue = require('vue');

// ES6中模块化的语法
import Vue from 'vue'
import App from './App.vue'

// 导入全局样式
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';

// 导入路由模块
import router from './routes/router';

new Vue({
  // ??????????
  // 配置路由
  router,
  el: '#app',
  render: h => h(App)
})
