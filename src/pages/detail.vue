<template>
  <scroll class="wrapper">
      <div class="detail">
          <div class="desc">
            <h3 class="title"><span class="icon icon-rice_1"></span>{{goods.name}}</h3>
            <p class="text">{{goods.description}}</p>
        </div>
        <div class="header">
          <div class="left">
            <img :src="goods.image">
          </div>
          <div class="right">
            <p class="row unit border-1px">
              规格：<span class="icon icon-box"></span>{{goods.unit}}
            </p>
            <p class="row place border-1px">
              产地：<span class="icon icon-place"></span>{{goods.place}}
            </p>
            <p class="row brand border-1px">
              品牌：<span class="icon icon-brand"></span>{{goods.brand}}
            </p>
            <p class="row">
              月销：<span class="icon icon-brand"></span><span class=" sellcount">{{goods.sellCount}}</span>件
            </p>
          </div>
        </div>
        <div class="price-wrapper">
          <p></span>上新价：<span class="price">￥{{goods.price}}
            </span><selection class="select" @on-change='selectChange'></selection>
          </p>
        </div>
        <div class="price-info">
          <p>小计：<span class="price">￥{{(selected.price*selected.count).toFixed(1)}}</span>
          <button class="btn" @click='push'>加入购物车</button>
        </p>
        </div>
        <div class="tab">
          <div class="tab-nav">
            <div class="nav-item" :class="{on:toggle}" @click='tabToggle'>详情</div>
            <div class="nav-item" :class="{on:!toggle}" @click='tabToggle'>评价({{goods.ratings.length}})</div>
          </div>
          <transition name='show' >
            <div class="info" v-if="toggle">
              <img v-for='(item,index) in goods.info' :src="item" :key='index'>
            </div>
          </transition>
            <div class="rating--wrapper" v-if="!toggle">
              <rating v-for='item in goods.ratings' :rating='item'></rating>
            </div>
        </div>
        
      </div>
  </scroll>
  
</template>

<script>
import Scroll from "../components/base/scroll";
import Selection from "../components/base/selection"
import Rating  from '../components/rating'
export default {
  components: {
    Scroll,Selection,Rating
  },
  props: {
    goods: {
      type: Object
    },
    selectGoods:{
      type:Array
    }
  },
  data(){
    return{
      selected:{
        name:'',
        price:'',
        image:'',
        count:1
      },
      toggle:true
    }
  },
  methods:{
    selectChange(count){
      this.selected.count = count
    },
    tabToggle(){
      this.toggle=!this.toggle;
    },
    push(){
      this.selectGoods.push(this.selected)
    }
  },
  created () {
    this.selected.name = this.goods.name;
    this.selected.image = this.goods.image;
    this.selected.price = this.goods.price;
  }
};
</script>

<style lang="stylus">
@import '../common/stylus/base.styl'
.wrapper
  position absolute
  width 100%
  overflow hidden
  top 40px
  bottom 50px
  .detail
    padding 15px
    background #fff
    .header
      font-size 0
      display flex
      padding  10px 0
      border-1px-bottom(light)
      .left
        flex 1
        img
          width 100%
      .right
        flex 1
        margin-left 10px
        .row
          font-size 1.2rem
          line-height 1.5rem
          padding 1rem 0 1rem 1rem
          color dark
          font-weight 550px
          border-1px-bottom(light)
          &:last-child
            border-none()
          .icon
            font-size 1.2em
            margin-right 10px
        .sellcount
          display inline-block
          padding 0 5px
          font-size 1.6rem
          color #e4393c
    .desc
      font-size 0
      border-1px-bottom(light)
      padding-bottom 10px
      .title
        padding 0 10px
        display block
        text-align center
        font-size 1.6rem
        color dark
        .icon
          font-size 1.6rem
          color light
          padding-right 10px
      .text
        display block
        margin-top 10px
        text-align center
    .price-wrapper,.price-info
      margin-top 10px
      padding 10px 0
      position relative
      border-1px-bottom(light)
      p
      font-size 1.6rem
      color dark
      .icon
        padding-right 10px
      .price
        font-size 1.8 rem
        font-weight 500
        font-style normal
        color #e4393c   
      .select,.btn
        position absolute
        right 0
        bottom 5px
      .btn
        height 35px 
        width 120px 
        font-size 1.5rem
        background dark
        border 0
        color #fff
        line-height 24px
    .tab
      margin-top 30px
      .tab-nav
        font-size 0
        padding-bottom 10px
        .nav-item
          display inline-block
          width 50%   
          height 30px   
          font-size 1.4rem
          line-height 30px
          text-align center
          color dark
          border-1px-bottom(light)
          &.on
            color #fff
            background dark 
      img
        width 100%      
      .show-enter-active, .show-leave-active
        transition all 0.5s ease
      .show-enter, .show-leave-active
        transform translateX(100%)      


</style>
