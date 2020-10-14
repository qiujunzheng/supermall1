<template>
  <div id="detail">
    <detail-na class="detail-na"></detail-na>
    <scroll class="scroll" ref="scroll"
            :pull-up-load="true">
      <detail-swiper :topImgs="topImgs"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/Scroll/Scroll";

  import DetailNa from "./childComps/DetailNa";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import emitter from "../../common/emitter";
  import {debounce} from "../../common/utils";

  import {getDetail, Goods, Shop} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],
        goods: {},//商品信息
        shop: {},//商家信息
      }
    },
    components: {
      DetailNa, DetailSwiper, DetailBaseInfo, DetailShopInfo,
      Scroll,
    },
    created() {
      //获得数据
      this.iid = this.$route.params.id;
      getDetail(this.iid).then((res) => {
        console.log(res);
        //获取顶部轮播图信息
        let data = res.result
        this.topImgs = data.itemInfo.topImages;
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取商家信息
        this.shop = new Shop(data.shopInfo)
      })
    },
    mounted(){
      //监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      emitter.on("detailImgLoad", () => {
        console.log(1);
        refresh()
      })
    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-na {
    background-color: #fff;
    z-index: 9;
    position: relative;
  }

  #detail .scroll {
    height: calc(100% - 44px)
  }
</style>
