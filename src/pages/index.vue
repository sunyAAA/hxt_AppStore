<template>
  <div class="index">
      <div class="top">
        <div class="menu-wrapper">
        <span class="icon icon-menu"></span>
        </div>
        <div class="right">
          <input class="search" type="text" v-model="search" placeholder="请输入搜索内容">
          <span class="icon-search"></span>
        </div>
      </div>
      <slide :slides='slides' :maxwidth='906'></slide>
      <v-title :msg='"热销商品"'>
<!--         <span class="icon icon-hot" slot='icon-left'></span>
        <span class="icon icon-hot" slot='icon-right'></span> -->
      </v-title>
  </div>
</template>

<script>
import Slide from "../components/slide/Slide";
import VTitle from "../components/Title"
export default {
  components: {
    Slide,VTitle
  },
  data() {
    return {
      slides: [],
      search: ""
    };
  },
  created() {
    this.$http.get("/api/slides").then(res => {
      this.slides = res.data.data;
    });
  }
};
</script>

<style lang="stylus">
.top
  display flex
  height 40px
  background #009688
  font-size 0
  .menu-wrapper
    flex 0 0 50px
    color #fff
    padding-top 8px
    padding-left 10px
    .icon
      font-size 24px
      line-height 24px
  .right
    flex 1
    padding-top 8px
    padding-right 20px
    .search
      width 100%
      height 24px
      border 0
      border-radius  24px
      text-align center
</style>

