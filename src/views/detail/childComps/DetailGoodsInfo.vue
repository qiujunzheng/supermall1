<template>
  <div class="detail-goods-info">
    <div class="detail-info-desc">{{detailInfo.desc}}</div>
    <div class="detail-img-key">{{detailInfo.imgKey}}</div>
    <div class="detail-imgs">
      <img v-for="img in detailInfo.imgs" :src="img" alt="" @load="goodsImgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        count: 0,
        imgLength: 0,
      }
    },
    methods: {
      goodsImgLoad() {
        if (++this.count === this.imgLength) {
          this.$emit('goodsImgLoad')
        }
      }
    },
    watch:{
      detailInfoChange(detailInfo){
        this.imgLength = detailInfo.imgs.length
      }
    }
  }
</script>

<style scoped>
  .detail-imgs {
    width: 100%;
  }

  .detail-imgs img {
    width: 100%;
  }
</style>
