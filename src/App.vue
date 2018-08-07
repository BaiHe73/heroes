<template>
  <div id="app">
    <!-- 头部 -->
    <!-- 头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <!-- 侧边栏组件 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表管理 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入组件
  // 导入头部组件
  import AppHeader from './components/AppHeader.vue';
  // 导入侧边栏组件
  import AppSidebar from './components/AppSidebar.vue';

  export default {
    components: {
      AppHeader,
      AppSidebar
    }
  };
</script>

<style>

</style>
