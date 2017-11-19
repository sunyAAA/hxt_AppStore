<template>
  <div class="index">
        <scroll class="wrapper" :click='true' 
        :scrollIndex='scrollIndex' :scrollHeight='scrollHeight'
        v-show='state.isShowDetail!=true'>
        <div class="slot">
          <slide :slides='slides' :maxwidth='906'></slide>
          <div class="icon-group">
            <div class="icon-item">
              <img src="../../static/icon/icon-1.jpg" alt="">
              <p class="text">五万亩自有稻田</p>
            </div>
            <div class="icon-item">
              <img src="../../static/icon/icon-2.jpg" alt="">
              <p class="text">15°C恒温存储</p>
            </div>
            <div class="icon-item">
              <img src="../../static/icon/icon-3.jpg" alt="">
              <p class="text">全城极速配送</p>
            </div>
          </div>
          <v-title :msg='"热销商品"'>
            <span class="icon icon-hot" slot='icon'></span> 
          </v-title>
          <div class="goodswrapper" style="display:flex">
            <showcase :goods='hot[0]' @go-detail='showDetail'>
              <span class="icon-hot" slot='icon'></span>
            </showcase>
            <showcase :goods='hot[1]' @go-detail='showDetail'>
               <span class="icon-hot" slot='icon'></span>
            </showcase>
          </div>
          <div class="goodswrapper" style="display:flex">
            <showcase :goods='hot[2]' @go-detail='showDetail'>
              <span class="icon-hot" slot='icon'></span>
            </showcase>
            <showcase :goods='hot[3]' @go-detail='showDetail'>
               <span class="icon-hot" slot='icon'></span>
            </showcase>
          </div>
          <div v-for='(item,index) in goods.data' :key='index' class="case-hook">
            <v-title :msg='item.name'></v-title>
            <div class="goodswrapper" style="display:flex" v-for='(food,n) in item.foods' v-if='n%2!=0'>
              <showcase :goods='item.foods[n-1]' @go-detail='showDetail'></showcase>
              <showcase :goods='item.foods[n]' @go-detail='showDetail'></showcase>
            </div>
            <div class="banner">
              <img :src="'./../../static/banner/banner-'+(index+1)+'.png'" alt="">
            </div>
          </div>
        </div>
      </scroll>
      <transition name='slide' >
       <detail class="detail" v-if='state.isShowDetail' :goods='detailData'  :state='state' :selectGoods='selectGoods'></detail>
      </transition>
  </div>
</template>

<script>
import Slide from "../components/Slide";
import VTitle from "../components/Title";
import Showcase from "../components/Showcase";
import Scroll from "../components/base/scroll";
import Detail from "../pages/detail";
export default {
  components: {
    Slide,
    VTitle,
    Showcase,
    Scroll,
    Detail,
  },
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      }
    },
    hot: {
      type: Array
    },
    goods: {
      type: Object
    },
    state: {
      type: Object,
      default() {
        return {
          isShowDetail: false
        };
      }
    },
    selectGoods: {
      type: Array
    },
    scrollIndex:{
      type:Number
    }
  },
  data() {
    return {
      detailData: {},
      scrollHeight:[]
    };
  },
  methods: {
    showDetail(obj) {
      (this.detailData = obj), (this.state.isShowDetail = true);
      this.$emit("detail");
    },
    _scrollInit(){
      let caseEle = document.getElementsByClassName('case-hook');
      console.log(caseEle)
      for(let i = 0 ; i<caseEle.length;i++){
        let item = caseEle[i]
        this.scrollHeight.push(item.offsetTop)
      }
    }
  },
  mounted () {
      setTimeout(() => {
        this._scrollInit()
      }, 1000)
  }
};
</script>

<style lang="stylus" scoped>
.index
  width 100%
  height 100%
  overflow hidden
  .wrapper
    position absolute
    width 100%
    overflow hidden
    top 40px
    bottom 50px
    .goodswrapper
      margin-bottom 15px
    .banner
      width 100%
      img
        width 100%
    .icon-group
      display flex
      font-size 0
      margin 20px 0 10px 0
      .icon-item
        flex 1
        text-align center
        img
          width 30%
        .text
          font-size 1rem
          line-height 20px
          padding-top 5px
  .slide-enter-active, .slide-leave-active
    transition all 0.5s ease
  .slide-enter, .slide-leave-active
    transform translateX(100%)
</style>

