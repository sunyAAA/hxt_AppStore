<template>
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
          <p></span>上新价：<span class="price">￥{{goods.price.toFixed(2)}}
            </span><selection class="select" @on-change='selectChange'></selection>
          </p>
        </div>
        <div class="price-info">
          <p>小计：<span class="price">￥{{(price*count).toFixed(2)}}</span>
          <button  class="btn" @click='push($event)' ref='btn' :disabled='ball.inTransition'>加入购物车</button>
          <div class="ball" :class="'ball'+index" v-for='(item,index) in ball'>
            <div class="inner" :class="'inner'+index"></div>
          </div>
        </p>
        </div>
        <div class="tab">
          <div class="tab-nav">
            <div class="nav-item" :class="{on:toggle}" @click='tabToggle'>详情</div>
            <div v-if='goods.ratings' class="nav-item" :class="{on:!toggle}" @click='tabToggle'>评价({{goods.ratings.length}})</div>
          </div>
          <transition name='show' >
            <div class="info" v-if="toggle">
              <img v-for='(item,index) in goods.info' :src='item' class='img-hook' :key='index' @load='imgOnload'>
            </div>
          </transition>
            <div class="rating--wrapper" v-if="!toggle">
              <rating v-for='(item,index) in goods.ratings' :rating='item' :key='index'></rating>
            </div>
        </div>

      </div>
  
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
    },
    state:{
      type:Object
    }
  },
  data(){
    return{
      name:'',
      price:'',
      count:1,
      imgae:'',
      toggle:true,
      imgCount:0,
      loadState:{doRefresh:false},
      ball:[
        {inTransition:false},
        {inTransition:false},
        {inTransition:false},
        {inTransition:false},
        {inTransition:false},
        {inTransition:false},
        {inTransition:false}
      ]
    }
  },
  methods:{
    selectChange(count){
      this.count = count
    },
    tabToggle(){
      this.toggle=!this.toggle;
      this.refresh()
    },
    push(ev){
      this.beforeDrop()
      for(let item of this.selectGoods){
        if(item.name === this.name){
          item.count+= this.count
          return
        }
      }
      let obj = {
        name : this.goods.name,
        image :this.goods.image,
        count:this.count,
        price:this.goods.price
      }
      this.selectGoods.push(obj);
    },
    imgOnload(){
      this.imgCount++
    },
    refresh(){
      this.loadState.doRefresh = true 
    },
    complete(){
      this.loadState.doRefresh = false;
    },
    drop(index){
      let rect = this.$refs['btn'].getBoundingClientRect();
      let x = -(rect.left-window.innerWidth*2/8);
      let y = window.innerHeight-rect.bottom;
      let ball = document.getElementsByClassName('ball'+index)[0]
      let inner = document.getElementsByClassName('inner'+index)[0]
      inner.style.opacity='1'
      ball.style.transform =`translate3d(0,${y}px,0)`
      inner.style.transform =`translate3d(${x}px,0,0)`
      ball.addEventListener('transitionend',()=>{
        let ball = document.getElementsByClassName('ball'+index)[0]
        let inner = document.getElementsByClassName('inner'+index)[0]
        inner.style.opacity='0'
        ball.style.transform =''
        inner.style.transform =''
        setTimeout(()=>{
           this.ball[index].inTransition=false;
        },400)
      })
    },
    beforeDrop(){
      for(let i =0;i<this.ball.length;i++){
        if(!this.ball[i].inTransition){
          this.ball[i].inTransition = true;
          this.drop(i)
          return
        }
      }
    }
  },
  created () {
    this.name = this.goods.name;
    this.image = this.goods.image;
    this.price = this.goods.price;
  }
};
</script>

<style lang="stylus" scoped>
@import '../common/stylus/base.styl'
  .detail
    padding 50px 15px 0 15px
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
        display flex
        flex-direction column 
        .row
          flex 1
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
      .info
        font-size 0
        img
          width 100%      
      .show-enter-active, .show-leave-active
        transition all 0.5s ease
      .show-enter, .show-leave-active
        transform translateX(100%)      
  .ball
    position absolute
    bottom 19px
    right 60px
    z-index 200
    transition: transform 0.4s cubic-bezier(0.39,-0.4,0.83,0.23)
    .inner
      width 16px
      height 16px
      border-radius 8px
      background dark
      opacity 0
      transition transform 0.4s linear 
</style>
