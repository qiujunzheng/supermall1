<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
  }
</script>

<style scoped>
  .recommend {
    margin-top: 10px;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 8px solid #eee;
  }

  .recommend .recommend-item {
    text-align: center;
    flex: 1;
    font-size: 14px;
  }

  .recommend .recommend-item img {
    height: 85px;
    padding: 5px;
  }
</style>
