// 导入vue-router模块
import VueRouter from 'vue-router';
import Vue from 'vue';

// 导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';

// 注册vue-router插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
  // 路由规则
  routes: [
    { name:'heroes', path:'/heroes', components: HeroesList},
    { name:'equips', path:'/equips', components: EquipsList},
    { name:'weapons', path:'/weapons', components: WeaponsList},
  ]
});

// 模块中导出路由对象
export default router;
