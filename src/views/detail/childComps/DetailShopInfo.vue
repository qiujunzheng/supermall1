<template>
  <div class="detail-shop-info">
    <div class="shop-title">
      <img :src="shop.shopLogo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shopping-info">
      <div class="info-left">
        <p class="data">{{cSells}}</p>
        <p class="data">{{shop.cGoods}}</p>
        <p class="text">总销量</p>
        <p class="text">全部宝贝</p>
      </div>
      <div class="info-right">
        <!--这里还是用个组件来搞吧-->
        <detail-shop-info_score v-for="s in shop.score" :score="s" />
      </div>
    </div>
    <div class="enter-shop">
      <a :href="shop.shopUrl">
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
  import DetailShopInfo_score from "./DetailShopInfo_score";
  export default {
    name: "DetailShopInfo",
    components:{
      DetailShopInfo_score
    },
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      cSells() {
        let sells = this.shop.cSells + 0
        if (sells < 1000) {
          return sells
        } else if (sells < 10000) {
          return (sells / 1000).toFixed(1) + '千'
        } else {
          return (sells / 10000).toFixed(1) + '万'
        }
      }
    },
  }
</script>

<style scoped>
  .shop-title {
    margin: 40px 0 30px 0;
    height: 50px;
    font-size: 20px;
  }

  .shop-title img {
    width: 50px;
    vertical-align: middle;
    margin: 0 10px;
  }

  .shopping-info {
    display: flex;
    height: 80px;
  }

  .info-left {
    flex: 1;
    border-right: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
    text-align: center;
  }

  .info-left .data {
    font-size: 24px;
    width: 50%
  }

  .info-left .text {
    font-size: 14px;
    width: 50%;
  }

  .info-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
  }
  .enter-shop{
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: var(--color-light-grey);
  }
</style>
