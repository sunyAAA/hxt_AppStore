<template>
  <div class="showcase">
    
      <div class="showcase-item" v-if='goods'>
        <div class="left">
          <img :src='goods.image'>
        </div>
        <div class="right">
          <h3 class="title">
            <span class="icon icon-rice_2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
            {{goods.name}}
            </h3>
          <p class="desc">{{goods.description}}</p>
          <div class="row">
            <span class="unit">
              <span class='icon-box'></span>
              ：{{goods.unit}}
            </span>
            <span class="sellcount">月销：{{goods.sellCount}}件</span>
          </div>
          <div class="row">
            <span class="place">
              <span class="icon icon-place"></span>
              <span class="text">：{{goods.place}}</span>  
            </span>
            <span class="brand">
                <span class="text">品牌：{{goods.brand}}</span>
            </span>
          </div>
          <div class="bottom">
            <span class="price">￥{{goods.price}}</span>
          </div>
          <div class="cart">
             <span class="icon-cart-add"></span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="stylus">
.showcase
  width 100%
  margin-top 10px
  font-size 0
  border-bottom 1px solid rgba(0,0,0,0.1)
  box-shadow 0 2px 1px 1px rgba(0, 150, 136, 0.1)
  .showcase-item
    display flex
    .left
      flex 0,0,120
      padding   10px
      img 
        width 120px
    .right 
      position relative
      flex 1 
      padding 10px
      font-size 10px
      .title
        font-size 14px
        height 28px
        line-height 14px
        font-weight 550
        padding 0
        .icon
          padding-right 10px
          vertical-align middle
      .desc 
        color rgba(0, 150, 136, 0.5)
        margin-top 5px
        height 14px
        overflow hidden
        line-height 14px
      .unit
        padding-right 15px 
      .row
        margin-top 5px
        .place 
          font-size 0
          margin-right 15px
          .icon
            font-size 14px
            position relative
            top 2px
          .text
            font-size 10px
        .brand
          font-size 0
          .text 
            font-size 10px  
            line-height 14px 
      .bottom
        position absolute
        bottom 15px  
        .price
          font-size 1rem
          color #e4393c
      .cart 
        position absolute
        bottom 0
        right 0
        padding 15px 15px 10px 15px
        font-size 1.5rem
        color #e4393c   
</style>
