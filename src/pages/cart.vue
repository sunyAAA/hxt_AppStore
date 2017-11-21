<template>
  <scroll class="wrapper" :pullup='true'>
    <div class="cart" :class="{empty:selectGoods.length==0}">
      <div class="goodswrapper" v-if='selectGoods.length'>
        <div class="item" v-for='(item,index) in selectGoods' :key='index'>
          <div class="img">
            <img :src="item.image" style="width:100%">
          </div>
          <div class="info">
            <p class="text">{{item.name}}</p>
            <div class="selwrapper">
              <span class="subprice">￥{{item.price}}&nbsp;&nbsp;&nbsp;x</span>
              <selection style="float:right" :index='index' :now='item.count' @on-change='selectChange' ></selection>
            </div>
            <div class="pricewrapper">
              <span>小计：</span>
              <span class="price">￥{{(item.count*item.price).toFixed(2)}}</span>
            </div>
          </div> 
          <span class="delete" @click='remove(index)'>x</span>
        </div>
      </div>
    </div>
    <div class="cart-detail">
      <div class="case">
          合计
      </div>
      <div class="total">
          ￥ {{total}}
      </div>
      <div class="pay">
          结算
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
  },
  computed: {
    total(){
      let n = 0;
      for(let item of this.selectGoods){
        n+= item.price*item.count
      }
      return n.toFixed(2)
    }
  },
  methods: {
    selectChange(index,number){
      console.log(index,number)
      this.selectGoods[index].count = number
    },
    remove(index){
      this.selectGoods.splice(index,1);
    }
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
  .cart
    width 100%
    min-height 100%
    padding-bottom 45px
    &.empty
      background url(../../static/icon/cart_empty.png) no-repeat center center
      background-size 60%
    .goodswrapper
      padding 10px
      padding-top 0
      .item 
        position relative
        display flex
        width 100%
        padding 10px 0
        border-1px-bottom(light)
        .img
          flex 30% 0 0
        .info
          position relative
          flex 1
          vertical-align top
          padding 0 0 0 25px
          font-size 0
          .text
            font-size 1.2rem
            line-height 1rem
            padding-right 20px
            max-height 24px
            overflow hidden
          .selwrapper
            width 100%
            height 27px
            padding 15px 0 10px 0
            & span
              display inline-block
              line-height 27px
              text-align center
            .text
              padding-left 15px  
            .subprice
              line-height 27px 
          .pricewrapper
            position absolute
            width 100%
            bottom 5px
            height 14px
            line-height 14px
            .price
              float right 
              margin-right 35px
              font-size 1.2rem
              color #e4393c
        .delete
          display inline-block
          position absolute
          top 0
          right 0
          width 24px
          height 24px
          line-height 24px
          font-size 1.5rem
          text-align center 
          z-index 10   
          .text
            font-size 2rem
            width 60px
            text-align center
            height 100%
            line-height 90px  
            color #fff
            background #e4393c
  .cart-detail
    position absolute
    display flex
    bottom 0
    width 100%
    height 45px
    background rgba(0,0,0,0.3)   
    .case
      flex 50px 0 0
      font-size 1.5rem
      line-height 45px
      text-align center
      color #fff
    .total
      flex 1  
      line-height 45px
      font-size 1.5rem
      font-weight 700
      text-align center
      color #e4393c
    .pay
      flex 100px 0 0 
      line-height 45px
      font-size 1.8rem
      text-align center
      background #e4393c
      color #fff
</style>
