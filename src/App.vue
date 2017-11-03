<template>
  <div id="app">
    <div class="top">
      <div class="icon-wrapper">
        <span v-if="state.nowIndex==='Index'" class="icon icon-menu"></span>
        <span v-else class="icon icon-pull_left" @click='goIndex'></span>
      </div>
      <div class="right">
        <p class="text">{{title}}</p>
      </div>
    </div>
    <div class="content">
      <router-view :goods='goods' :slides='slides' :hot='hot' :state='state' :selectGoods='selectGoods' @detail='changeTitle'/>
    </div>
    <footer class="nav-footer">
      <router-link tag="div" to='/index' class="nav-item" active-class="on">
        <span class="icon icon-home"></span>
        <p class="text">首页</p>
      </router-link> 
      <router-link tag="div" to='/cart' class="nav-item cart" active-class="on">
        <span class="icon icon-cart"><span class="count" v-if='count>0'>{{count}}</span></span>
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
  name: "app",
  data(){
    return{
      hot:[],
      slides:[],
      goods:{},
      selectList:[],
      isShowDetail:false,
      detailData:{},
      state: {
        nowIndex:'Index',
        isShowDetail:'false'
      },
      selectGoods:[]
    }
  },
  computed:{
    title(){
      switch(this.state.nowIndex){
        case 'Index': return "合鑫泰移动商城"
        case 'Cart' : return "购物车"
        case 'Me' : return  "个人中心"
        case 'About':return '关于合鑫泰'
        case 'Detail':return '商品详情'
      }
    },
    count(){
      let total=0
      this.selectGoods.forEach(item=>{
        total+=item.count
      })
      return total
    }
  },
  created () {
    this.$http.get('/api/goods').then(res=>{
      this.goods=res.data;
    })
    this.$http.get("/api/slides").then(res => {
      this.slides = res.data.data;
    });
    this.$http.get('/api/hot').then(res=>{
      this.hot = res.data.data;
    })

  },
  watch: {
    $route(){
      this.state.nowIndex=this.$route.name;
      if(this.$route.name!='Index'){
        this.state.isShowDetail=false
      }
    }
  },
  methods:{
    changeTitle(){
      this.state.nowIndex='Detail'
    },
    goIndex(){
      this.state.nowIndex='Index'
      this.state.isShowDetail=false
    }
  },
};
</script>

<style lang='stylus'>
@import "./common/stylus/base.styl";
  .top
    position absolute
    top 0
    z-index 10
    width 100%
    display flex
    height 40px
    background #009688
    font-size 0
    .icon-wrapper
      position absolute
      left 0
      color #fff
      padding-top 8px
      padding-left 10px
      .icon
        font-size 24px
        line-height 24px
    .right
      flex 1
      padding 0 20px
      .text
        width 100%
        text-align center
        padding 10px 20px 10px 0
        font-size 16px
        line-height 20px
        color #fff
.content
  width 100%
  height 100%
  padding-bottom 55px
  overflow hidden
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
  .cart
    .icon
      position relative
      .count 
        position absolute
        display inline-block
        right -10px
        top -8px
        width 16px
        height 16px
        text-align center
        font-size 1rem
        color #fff
        border-radius 8px
        line-height 16px
        background #e4393c

</style>
