<template>
  <div class="index">
      <transition name='slide' >
        <scroll class="wrapper" :click='true'  v-if='state.isShowDetail!=true'>
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
          <div v-if='hot.length' class="goodswrapper" style="display:flex">
            <showcase :goods='hot[0]' @go-detail='showDetail'>
              <span class="icon-hot" slot='icon'></span>
            </showcase>
            <showcase :goods='hot[1]' @go-detail='showDetail'>
               <span class="icon-hot" slot='icon'></span>
            </showcase>
          </div>
          <div class="goodswrapper" style="display:flex">
            <showcase :goods='hot[0]' @go-detail='showDetail'>
              <span class="icon-hot" slot='icon'></span>
            </showcase>
            <showcase :goods='hot[1]' @go-detail='showDetail'>
               <span class="icon-hot" slot='icon'></span>
            </showcase>
          </div>
        </div>
      </scroll>
      <detail class="detail" v-else :goods='detailData'  :state='state' :selectGoods='selectGoods'></detail>
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
    Detail
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
    selectGoods:{
      type:Array
    }
  },
  data() {
    return {
      detailData: {}
    };
  },
  methods: {
    showDetail(obj) {
      (this.detailData = obj), (this.state.isShowDetail = true);
      this.$emit("detail");
    }
  }
};
</script>

<style lang="stylus">
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

