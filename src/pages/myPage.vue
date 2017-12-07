<template>
    <scroll class="wrapper">
      <div class="my-page">
          <div class="avatar">
            <div class="avatar-wrapper">
              <img src="../../static/icon/avatar.jpg" alt="">
            </div>
            <p>登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册</p>
          </div>
          <div class="nav">
            <div class="item">
              <span class="icon-box"></span>
              <p>已完成</p>
            </div>
            <div class="item">
              <span class="icon-car"></span>
              <p>运输中</p>
            </div>
            <div class="item">
              <span class="icon-order"></span>
              <p>待发货</p>
            </div>
          </div>
          <div class="nav">
            <div class="item">
              <span class="icon-box"></span>
              <p>我的钱包</p>
            </div>
            <div class="item">
              <span class="icon-car"></span>
              <p>运输中</p>
            </div>
            <div class="item">
              <span class="icon-order"></span>
              <p>待发货</p>
            </div>
          </div>
      </div>
    </scroll>
</template>

<script>
import Scroll from "../components/base/scroll";
export default {
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/base.styl'
.wrapper
  position absolute
  width 100%
  overflow hidden
  top 40px
  bottom 50px
  .my-page
    display flex
    flex-direction column
    .avatar
      height 200px
      background light
      .avatar-wrapper
        margin auto
        position relative
        top 60px
        width 80px
        height 80px
        border-radius 40px
        background gray
        overflow hidden
        & img 
          width 100%
      &>p
        position relative
        top 80px
        width 100% 
        text-align center
        color #333
    .nav
      flex 1 
      display flex
      .item
        flex 1
        height 80px
        text-align center
        padding-top 10px
        border-1px-bottom(light)
        border-right 1px solid light
        &:last-child
          border-right none
        &>span 
          display inline-block
          margin-top 10px
          font-size 28px
          line-height 30px
          color dark
        &>p
          font-size 1.4rem
          line-height 40px  
          color #333

</style>

