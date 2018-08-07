// 导入模块 模块化语法 CommonJs
// const Vue = require('vue');

// ES6中模块化的语法
import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
})
