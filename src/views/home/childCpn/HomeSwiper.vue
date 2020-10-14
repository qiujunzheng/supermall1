<template>
  <my-swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </my-swiper>
</template>

<script>
  import {MySwiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "HomeSwiper",
    components: {
      MySwiper, SwiperItem
    },
    props: {
      banners: Array
    },
    data() {
      return {
        isLoad: false
    }
    },
    methods: {
      imageLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
