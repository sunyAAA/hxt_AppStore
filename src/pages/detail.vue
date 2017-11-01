<template>
  <scroll class="wrapper">
     <transition name='slide'>
      <div class="detail" v-if='goods.info.length'>
        <img :src="goods.info[0]">
        <img :src="goods.info[1]">
      </div>
     </transition>
  </scroll>
  
</template>

<script>
import Scroll from "../components/base/scroll";
export default {
  components: {
    Scroll
  },
  props:{
    goods:{
      type:Object,
      default(){
        return{
          info:[]
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.wrapper
  position absolute
  width 100%
  overflow hidden
  top 40px
  bottom 50px
  .detail
    padding 15px
    background #fff
    img
      width 100%
   
</style>
