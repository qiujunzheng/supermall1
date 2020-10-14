<template>
  <div class="nav-bar" :style="backgroundColor">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center" :style="centerStyle">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      bgColor: {
        type: String,
        default: "#d4619b"
      },
      centerStyle: {
        default: {
          fontSize: "20px", color: 'white'
        }
      }
    },
    computed: {
      backgroundColor() {
        return {background: this.bgColor}
      }
    },
  }
</script>

<style >
  .nav-bar {
    top: 0;
    padding-bottom: 44px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    display: flex;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }

  .nav-bar .left {
    max-width: 60px;
    height: 44px;
    flex: 1;
  }

  .nav-bar .center {
    flex: 3;
    height: 44px;
  }

  .nav-bar .right {
    max-width: 60px;
    height: 44px;
    flex: 1;
  }
</style>
