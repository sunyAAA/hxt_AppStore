<template>
    <scroll class="wrapper">
      <div class="my-page">
          <div class="avatar">

          </div>
          <div class="nav">

          </div>
      </div>
    </scroll>
</template>

<script>
import Scroll from "../components/base/scroll";
export default {
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position absolute
  width 100%
  overflow hidden
  top 40px
  bottom 50px
  .my-page
    display flex
    flex-direction column
    .avatar
      height 200px
      background #e4393c
    .nav
      flex 1 
</style>

