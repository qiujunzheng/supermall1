<template>
  <div id="detail">
    <detail-na class="detail-na"></detail-na>
    <scroll class="scroll" ref="scroll"
            :pull-up-load="true">
      <detail-swiper :topImgs="topImgs"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import DetailNa from "./childComps/DetailNa";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";

  import Scroll from "components/common/Scroll/Scroll";

  import {getDetail, Goods} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],
        goods: {},//商品信息
        shop:{},//商家信息
      }
    },
    components: {
      DetailNa, DetailSwiper, DetailBaseInfo,DetailShopInfo,
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
        console.log(this.goods);
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-na{
    background-color: #fff;
    z-index: 9;
    position: relative;
  }

  #detail .scroll {
    height: 300px;
  }
</style>
