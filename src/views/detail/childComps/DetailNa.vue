<template>
  <div class="detail-na">
    <nav-bar :bgColor="bgColor">
      <template #left >
        <img src="~assets/images/common/back.svg" alt="" class="back" @click.native="goBack">
      </template>
      <template #center>
        <div class="title">
          <div v-for="(item,index) in titles"
               class="title-item"
               :class="{active:index === currentIndex}" @click="changeTitle(index)">{{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNa",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        bgColor: '#fff',
        currentIndex: 0,
      }
    },
    methods: {
      /**
       * 点击顶部栏 .title
       */
      changeTitle(index) {
        this.currentIndex = index
      },
      /**
       * 返回上一页
       */
      goBack(){
        this.$router.back()
      },
    },

  }
</script>

<style scoped>

  .title {
    display: flex;
    flex-wrap: nowrap;
  }

  .title-item {
    font-size: 16px;
    flex: 1;
    color: #424242;
  }

  .detail-na .active {
    color: var(--color-high-text);
  }
  .back{
    margin-top: 11px;
  }
</style>
