<template>
  <div class="showcase" >
    <div class="imgwrapper" @click='showDetail($event)'>
      <img :src="goods.image">
    </div>
    <div class="descwrapper">
      <h3 class="name">
        <slot name='icon'></slot>
        {{goods.name}}
      </h3>
    </div>
    <div class="pricewrapper">
      <span class="price">￥{{goods.price}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    showDetail(e) {
      if (!e._constructed) {
        return;
      }
      this.$emit("go-detail", this.goods);
    }
  }
};
</script>

<style lang="stylus">
.showcase
  flex 1
  border-bottom 1px solid rgba(0, 0, 0, 0.1)
  box-shadow 0px 1px 0px rgba(0, 150, 136, 0.3)
  &:nth-child(odd)
    border-right 1px solid rgba(0, 0, 0, 0.1)
  .imgwrapper
    padding 12px
    padding-top 0
    img
      width 100%
  .name
    font-size 1.2rem
    line-height 14px
    height 28px
    overflow hidden
    padding 5px 10px
    font-weight 500
  .pricewrapper
    position relative
    padding-bottom 10px
    text-align center
    .price
      color #e4393c
      font-size 1.2rem
      font-weight 600
    .icon
      font-size 2.5rem
      color #e4393c
      position absolute
      right 15px
      bottom 5px
</style>
