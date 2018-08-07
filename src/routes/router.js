// 导入vue-router模块
import VueRouter from 'vue-router';
import Vue from 'vue';

// 导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
// 导入添加英雄组件
import HeroAdd from '../views/heroes/add.vue';

// 注册vue-router插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
  // 配置激活的类样式
  linkActiveClass: 'active',
  // 路由规则
  routes: [
    { path: '/', redirect: '/heroes' },
    { name: 'heroes', path: '/heroes', component: HeroesList },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'weapons', path: '/weapons', component: WeaponsList },
    { name: 'heroadd', path: '/heroes/add', component: HeroAdd }
  ]
});

// 模块中导出路由对象
export default router;
