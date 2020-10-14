<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template #center>购物街</template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @shiftGoodsList="shiftGoodsList"
                 class="tab-control"
                 ref="tabControl1"
                 v-show="isTabFixed"
    ></tab-control>
    <scroll class="scroll" ref="scroll"
            @scroll="scroll"
            @pullingUp="pullingUp"
            :probe-type="3"
            :pull-up-load="true">
      <home-swiper :banners="banners"
                   @swiperImgLoad="getTabControlH"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <fashion-view/>
      <tab-control :titles="['流行','新款','精选']"
                   @shiftGoodsList="shiftGoodsList"
                   ref="tabControl2"
                   v-show="!isTabFixed"
                   :class="{Fixed:isTabFixed}"
      ></tab-control>
      <goods-list :goods="goodsList"></goods-list>
    </scroll>
    <back-top @click.native="backClick"
              v-show="backTopShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import Scroll from "../../components/common/Scroll/Scroll";

  import HomeSwiper from "./childCpn/HomeSwiper"
  import HomeRecommendView from "./childCpn/HomeRecommendView";
  import FashionView from "./childCpn/FashionView";
  import GoodsList from "components/content/goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeGoods, getHomeMultidata} from "../../network/home";
  import {debounce} from "../../common/utils";
  import emitter from "../../common/emitter";

  export default {
    name: "Home",
    data() {
      return {
        //导航栏样式
        centerStyle: {
          color: "blue",
          fontSize: '18px'
        },

        //首页需要的数据
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },

        currentGoodsList: 'pop',  //当前商品列表
        backTopShow: false, //是否显示 backTop组件
        tabOffsetTop: 0, //tabControl组件top值
        isTabFixed: false,//tabControl是否为pos fixed
        saveY: 0,  //保存离开home是的y位置信息
      }
    },
    components: {
      NavBar, TabControl,
      HomeSwiper, HomeRecommendView, FashionView, GoodsList, BackTop,
      Scroll
    },
    methods: {
      /**
       * 网络相关
       * /
       /**
       * 网络请求获取全部数据
       * @param type
       */
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => this.goods[type].list.push(...res.data.list))
        this.goods[type].page++
        this.$nextTick(_ => this.$refs.scroll.finishPullUp())
      },

      /**
       * 改变商品列表显示
       * @param index
       */
      shiftGoodsList(index) {
        let obj = {0: 'pop', 1: 'new', 2: 'sell'}
        this.currentGoodsList = obj[index]
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      /**
       * 返回top
       */
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      /**
       * 滚动控制
       */
      scroll(pos) {
        if (pos.y < -1000 && !this.backTopShow) {
          this.backTopShow = true
        } else if (pos.y > -1000 && this.backTopShow) {
          this.backTopShow = false
        }

        //判断tabControl是否吸顶
        if (pos.y < -this.tabOffsetTop + 44 && !this.isTabFixed) {
          this.isTabFixed = true
        } else if (pos.y > -this.tabOffsetTop + 44 && this.isTabFixed) {
          this.isTabFixed = false
        }

      },

      /**
       * 上拉加载更多
       */
      pullingUp: function () {
        this.getHomeGoods(this.currentGoodsList)
        this.$refs.scroll.refresh()//刷新content和wrapper大小
      },

      /**
       * 获取tabControll高度
       */
      getTabControlH() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      }
    },
    computed: {
      goodsList() {
        return this.goods[this.currentGoodsList].list
      },
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      });
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      //监听图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      emitter.on("itemImgLoad", () => {
        refresh()
      })
    },
    activated() {//进入home路由时
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    deactivated() {//离开路由时记录better-scroll组件的位置
      this.saveY = this.$refs.scroll.getScrollY()
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .scroll {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
