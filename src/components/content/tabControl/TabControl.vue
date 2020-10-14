<template>
  <div class="tab-control" >
    <div class="tab-item" v-for="(item, index) in titles" @click="tabControlClick(index,item)">
      <span :class="{active: index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabControlClick(index) {
        this.currentIndex =index;
        this.$emit("shiftGoodsList",index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    position: sticky;
    top: 44px;
    width: 100%;
    height: 44px;
    display: flex;
    line-height: 44px;
    background-color: #fff;
  }

  .tab-control .tab-item {
    text-align: center;
    flex: 1;
  }

  .tab-control .active {
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }

  .tab-item span {
    padding: 5px;
  }
</style>
