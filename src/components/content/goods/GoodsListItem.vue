<template>
  <div class="goods-item" @click="itemClick" >
    <div class="goods-img-box" :style="imgHeight_c">
      <img :src="goodsItem.show.img" @load = 'imageLoad'>
    </div>
    <div class="goods-content" >
      <p>{{goodsItem.title}}</p>
      <div class="goods-content-msg">
        <span class="price">{{goodsItem.price}}</span>
        <span class="collectBtn"></span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import emitter from "../../../common/emitter";

  export default {
    name: "GoodsListItem",
    data(){
      return {
        isHeightKnown:0
      }
    },
    props: {
      goodsItem: {
        type: Object,
        default() {
            return {}
        }
      },
    },
    computed:{
      imgHeight_c(){
        return {'height':window.innerWidth / 2 * 1.42+'px'}
      }
    },
    methods:{
      imageLoad(){
       emitter.emit('itemImgLoad')
      },
      //详情页跳转
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style>
  .goods-item{
    width: 50%;
    text-align: center;
  }

  .goods-item img{
    width: 95%;
  }
  .goods-content{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .goods-content .goods-content-msg{
    position: relative;
    width: 60%;
    font-size: 14px;
    display: flex;
    justify-content: space-evenly;
  }
  .goods-content p{
    width: 80%;
    height: 30px;
    overflow: hidden;
    font-size: 14px;
  }
  .goods-content-msg span{
    flex:1;
  }
  .goods-content-msg .price{
    color: var(--color-tint);
  }
  .goods-content-msg .collectBtn{
    content: "";
    position: absolute;
    left: 50%;
    width: 14px;
    height: 14px;
    background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>
