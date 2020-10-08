<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item v-slot="aaa">
        <div >11111</div>
<!--        <img src="./assets/img/tabBar/home.svg" slot="itemIcon" alt="">-->
<!--        <div slot="item-text">首页</div>-->
      </tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 49px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
</style>
