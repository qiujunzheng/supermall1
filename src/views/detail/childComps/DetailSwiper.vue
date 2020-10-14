<template>
  <div class="detail-swiper">
    <my-swiper class="de-swiper" ref="mySwiper" :options="swiperOption">
      <swiper-item v-for="item in topImgs">
          <img :src="item" alt="">
      </swiper-item>
    </my-swiper>
  </div>
</template>

<script>
  import {MySwiper, SwiperItem} from "components/common/swiper"

  import 'swiper/swiper-bundle.css'

  export default {
    name: "DetailSwiper",
    components: {
      MySwiper, SwiperItem,
    },
    data() {
      return {
        swiperOption: {}
      }
    },
    props: {
      topImgs: {
        type: Array,
        default() {
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .de-swiper {
    height: 300px;
    overflow: hidden;
    width: 100%;
  }
</style>

