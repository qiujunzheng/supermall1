<template>
  <div id="detailBaseInfo" v-if="Object.keys(goods).length!==0">
    <div class="base-info-top">
      <div class="title">{{goods.title}}</div>
      <div class="price">
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span v-if="goods.discountDesc"
              class="discountDesc"
              :style="discountDescBgc">{{goods.discountDesc}}</span>
      </div>
    </div>
    <div class="base-info-center">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="base-info-bottom">
      <div v-for="i in goods.services.length-1" class="services">
        <img :src="goods.services[i-1].icon" alt="">
        <span>{{goods.services[i-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {notEmptyString} from "common/utils"
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      discountDescBgc() {
        return {'background-color': this.goods.discountDescColor}
      },
    }
  }
</script>

<style scoped>
  #detailBaseInfo > div {
    padding: 5px;
    margin-top: 10px;
  }

  .base-info-top {
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  }

  .base-info-top .title {
    font-size: 22px;
    margin-bottom: 10px;
  }

  .price .newPrice {
    font-size: 26px;
    color: var(--color-high-text);
  }

  .price .oldPrice {
    font-size: 14px;
    color: var(--color-text-light);
    text-decoration: line-through;
  }

  .price .discountDesc {
    font-size: 14px;
    color: var(--color-text-white);
    border-radius: 8px;
    padding: 3px;
    margin-left: 5px;
    vertical-align: top;
  }

  .base-info-center {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: var(--color-text-light);
  }

  #detailBaseInfo .base-info-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 20px;
    margin-top: 30px;
  }

  .services img {
    width: 14px;
    vertical-align: middle;
  }
</style>
