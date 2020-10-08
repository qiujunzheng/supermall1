<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<style>
  #tab-bar{
    display: flex;
    margin: 0 auto;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px  rgba(0,0,0,0.08);
  }



</style>
