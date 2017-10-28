<template>
  <div class="title">
    <div class="left">
      <div class="line"></div>
    </div>
    <div class="text">
      <p>

      {{msg}}

      </p>
      </div>
    <div class="right">
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
      border-top 1px solid rgba(0,150,136,0.4)
  .right
    flex 1
    position relative
    .line
      width 90%
      height 0
      margin-left 10px
      border-top 1px solid rgba(0,150,136,0.4)
  .text
    flex 0 0 120px
    font-size 16px
    p
      text-align center
      position relative
      top -8px
      font-weight 500
      color rgba(0,150,136,0.6)
  .icon
    color #e4393c    
</style>
