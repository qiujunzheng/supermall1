<template>
  <div class="detail-shop-info-score">
    <div class="s-name">{{score.name}}</div>
    <div class="score" :class="{'s-better':score.isBetter}">{{score.score}}</div>
    <div class="is-better" :class="{better:score.isBetter}">
      <span>{{better}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo_score",
    props: {
      score: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    computed: {
      better() {
        return this.score.isBetter ? '高' : '低'
      }
    },
  }
</script>

<style scoped>
  .detail-shop-info-score {
    display: flex;
    flex-wrap: nowrap;
  }

  .detail-shop-info-score div {
    text-align: center;
    flex: 1;
  }

  .score {
    color: var(--color-common-green);
  }

  .s-better {
    color: var(--color-common-red);
  }

  .is-better span {
    padding: 1px;
    color: var(--color-text-white);
    background-color: var(--color-common-green);
  }

  .better span{
    background-color: var(--color-common-red);
  }
</style>
