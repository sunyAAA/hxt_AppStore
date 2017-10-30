<template>
  <div class="index">
      <scroll class="wrapper">
        <div class="slot">
          <slide :slides='slides' :maxwidth='906'></slide>
          <v-title :msg='"热销商品"'>
            <span class="icon icon-hot" slot='icon'></span> 
          </v-title>
          <showcase></showcase>
          <showcase></showcase>
          <showcase></showcase>
          <showcase></showcase>
          <showcase></showcase>
        </div>
      </scroll>
  </div>
</template>

<script>
import Slide from "../components/Slide";
import VTitle from "../components/Title";
import Showcase from "../components/Showcase";
import Scroll from "../components/base/scroll";
export default {
  components: {
    Slide,
    VTitle,
    Showcase,
    Scroll
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
  },
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
  .top
    position absolute
    top 0
    z-index 10
    width 100%
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
        border-radius 24px
        text-align center
</style>

