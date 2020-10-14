<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive include="Home,Category,Cart,Me">
        <component class="view" :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/MainTabbar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
