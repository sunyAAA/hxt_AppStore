<template>
  <div class="menu" @click='closeMenu'> 
    <div class="wrapper">
      <div class="logo">
        <img src="../../static/logo/logo.png" alt="">
      </div>
      <ul class="menu-wrapper">
        <li v-for='(item,index) in goods.data' 
        @click.stop='scroll($event,index)'>{{item.name}} <span class="icon icon-right" 
        ></span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object
    }
  },
  methods:{
    scroll(e,index){
      this.$emit('scroll-change',index)
      setTimeout(()=> {
        this.$emit('close-menu');
      }, 200);
    },
    closeMenu(){
      this.$emit('close-menu');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../common/stylus/base.styl";
.menu
  position absolute
  top 40px
  bottom 55px
  left 0
  right 0
  background rgba(0,0,0,0.1)
  font-size 0
  .wrapper
    width 60%
    height 100%
    background #fff
    .logo
      width 100%
      height 120px
      img
        width 80%
        margin 10px 20px
    .menu-wrapper
      width 100%
      list-style none
      margin-top 20px
      li
        font-size 1.6rem
        line-height 50px
        margin 0 20px
        text-align center
        color dark
        border-1px-bottom(light)
        .icon
          padding 0 10px
</style>
