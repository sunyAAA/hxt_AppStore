<template>
  <div class="showcase">
      <div class="showcase-item">
        <div class="left">
          <img src="https://img.alicdn.com/bao/uploaded/i3/1785679309/TB2k4DIdwxlpuFjSszgXXcJdpXa_!!1785679309.jpg_180x180.jpg">
        </div>
        <div class="right">
          <h3 class="title">
            <span class="icon icon-rice_2"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span></span>
            纯进口泰国茉莉香米
            </h3>
          <p class="desc">泰国物产精华茉莉香米，纯正口感</p>
          <div class="row">
            <span class="unit">
              <span class='icon-box'></span>
              ：10kg
            </span>
            <span class="sellcount">月销：229件</span>
          </div>
          <div class="row">
            <span class="place">
              <span class="icon icon-place"></span>
              <span class="text">：泰国</span>  
            </span>
            <span class="brand">
                <span class="text">品牌：乍伦旺</span>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus">
.showcase
  width 100%
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
      flex 1 
      padding 10px
      font-size 10px
      .title
        font-size 14px
        font-weight 550
        padding 0
        .icon
          padding-right 10px
      .desc 
        color rgba(0, 150, 136, 0.4)
        margin-top 10px
        line-height 15px
      .unit
        padding-right 15px 
      .row
        margin-top 10px
        .place 
          font-size 0
          margin-right 15px
          .icon
            font-size 14px
            position relative
            top 1px
          .text
            font-size 10px
        .brand
          font-size 0
          .text 
            font-size 10px  
            line-height 14px 
</style>
