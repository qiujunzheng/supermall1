<template>
  <tabbar>
    <tabItem path="/home">
      <template #item-icon><img src="~assets/images/tabbar/home.svg" alt=""></template>
      <template #item-icon-active><img src="~assets/img/tabBar/home-act.svg"></template>
      <template #item-text>主页</template>
    </tabItem>
    <tabItem path="/category">
      <template #item-icon><img src="~assets/images/tabbar/list.svg" alt=""></template>
      <template #item-icon-active><img src="~assets/img/tabBar/list-act.svg"></template>
      <template #item-text>目录</template>
    </tabItem>
    <tabItem path="/cart">
      <template #item-icon><img src="~assets/images/tabbar/cart.svg" alt=""></template>
      <template #item-icon-active><img src="~assets/img/tabBar/cart-act.svg"></template>
      <template #item-text>购物车</template>
    </tabItem>
    <tabItem path="/profile">
      <template #item-icon><img src="~assets/images/tabbar/user.svg" alt=""></template>
      <template #item-icon-active><img src="~assets/img/tabBar/user-act.svg"></template>
      <template #item-text>我的</template>
    </tabItem>
  </tabbar>
</template>

<script>
  import tabbar from "../common/tabbar/tabbar";
  import tabItem from "../common/tabbar/tabItem";

  export default {
    name: "MainTabbar",
    components: {
      tabbar, tabItem
    }

  }
</script>

<style scoped>

</style>
