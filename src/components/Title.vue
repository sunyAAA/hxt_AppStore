<template>
  <div class="title">
    <div class="left">
      <div class="line"></div>
      <div class="point"></div>
    </div>
    <div class="text">
      <p> <slot name='icon'></slot> {{msg}}</p>
      </div>
    <div class="right">
      <div class="point"></div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="stylus">
title-color = rgba(0, 150, 136, 0.4)
.title
  display flex
  font-size 0
  padding 20px 0 10px 0
  .left
    flex 1
    position relative
    text-align center
    .line
      width 90%
      height 0
      margin-right 10px
      border-top 1px solid title-color
    .point
      position absolute
      bottom 14px
      right 0
      height 0
      width 4px
      border-top 4px solid  title-color
  .right
    flex 1
    position relative
    .line
      width 90%
      height 0
      margin-left 10px
      border-top 1px solid title-color
    .point
      position absolute
      bottom 14px
      left  0
      height 0
      width 4px
      border-top 4px solid  title-color
  .text
    flex 0 0 120px
    p
      text-align center
      position relative
      font-size 14px
      top -8px
      font-weight 500
      color title-color
</style>
