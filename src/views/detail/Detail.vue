<template>
  <div id="detail">
    <detail-na class="detail-na"></detail-na>
    <scroll class="scroll" ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            @scroll="scroll">
      <detail-swiper :topImgs="topImgs"
                     @detailImgLoad="detailImgLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo"
                         @goodsImgLoad="goodsImgLoad"></detail-goods-info>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
  import Scroll from "components/common/Scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import DetailNa from "./childComps/DetailNa";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

  import {DetailInfo, getDetail, Goods, Shop} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],
        goods: {},//商品信息
        shop: {},//商家信息
        detailInfo: {},//详情数据
        backTopShow:false,
      }
    },
    components: {
      BackTop,
      DetailGoodsInfo,
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
        //获取商品详情数据
        this.detailInfo = new DetailInfo(data.detailInfo)
      })
    },
    methods: {
      detailImgLoad() {
        //监听轮播图加载完成，刷新scroll content高度
        this.$refs.scroll.refresh()
      },
      goodsImgLoad(){
        this.$refs.scroll.refresh()
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      scroll(pos){
        if (pos.y < -1000 && !this.backTopShow) {
          this.backTopShow = true
        } else if (pos.y > -1000 && this.backTopShow) {
          this.backTopShow = false
        }
      }
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
