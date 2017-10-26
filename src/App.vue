<template>
  <div id="app">
    <div class="content">
      <transition name='toggle'>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <footer class="nav-footer">
      <router-link tag="div" to='/index' class="nav-item" active-class="on">
        <span class="icon icon-home"></span>
        <p class="text">首页</p>
      </router-link> 
      <router-link tag="div" to='/cart' class="nav-item" active-class="on">
        <span class="icon icon-cart"></span>
        <p class="text">购物车</p>
      </router-link> 
      <router-link tag="div" to='/me' class="nav-item" active-class="on">
        <span class="icon icon-order"></span>
        <p class="text">个人中心</p>
      </router-link> 
      <router-link tag="div" to='/about' class="nav-item" active-class="on">
        <span class="icon icon-star"></span>
        <p class="text">关于</p>
      </router-link> 
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang='stylus'>
.content
  width 100%
  height 100%
  padding-bottom 55px
.nav-footer
  display flex 
  position fixed
  box-sizing border-box
  padding 5px 0
  bottom 0
  z-index 10
  background #fff
  height 55px
  width 100%
  font-size 0
  .nav-item
    flex 1
    text-align center
    font-size 0
    &.on
      .icon
        color #00bcd4
      .text
        color #00bcd4
    .icon
      font-size 24px
      color rgba(0,0,0,0.8)
    .text
      margin-top 2px
      font-size 12px
      color rgba(0,0,0,0.8)
</style>
