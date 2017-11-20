<template>
  <scroll class="wrapper">
    <div class="cart" :class="{empty:selectGoods.length==0}">
      <div class="goodswrapper" v-if='selectGoods.length'>
        <div class="item">
          <div class="img">
            <img :src="selectGoods[0].image" style="width:100%">
          </div>
          <div class="info">
            <p class="text">{{selectGoods[0].name}}</p>
            <div class="sub">
              <span>￥{{selectGoods[0].price}}</span>
              <selection :now='selectGoods[0].count'></selection>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Selection from "../components/base/selection"
import Scroll from "../components/base/scroll";
export default {
  components: {
    Scroll,Selection
  },
  props:{
    selectGoods:{
      type:Array
    }
  },
  data(){
    return{
      emptyStyle:{
          background:"url(../../static/icon/cart_empty.png) no-repeat center center",
          backgroundSize:"60%"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position absolute
  width 100%
  overflow hidden
  top 40px
  bottom 50px
  .cart
    width 100%
    min-height 100%
    &.empty
      background url(../../static/icon/cart_empty.png) no-repeat center center
      background-size 60%
    .goodswrapper
      padding 10px
      .item 
        width 100%
        overflow hidden
        .img
          display inline-block
          width 30%
        .info
          display inline-block
          width 40%  
          vertical-align top
          padding 10px 0 0 25px
          font-size 0
          .text
            font-size 1.2rem
            line-height 1rem
            max-height 24px
            overflow hidden
          .sub 
            padding 10px 0
            & span
              color #e4393c
              



</style>
