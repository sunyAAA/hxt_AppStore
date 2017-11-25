<template>
  <div class="index">
    <div class="logo">
      <img src="../../static/logo/logo.jpg" alt="">
    </div>
    <v-title :msg='"公司简介"'></v-title>
    <div class="content">
      <p class="text">
        湖北合鑫泰工贸有限公司是一家主要从事大米生产、粮油销售的综合型公司。公司成立于2007年，经营者及管理人员都具有多年从事粮食经营生产管理的经验和经历。多年来在行业内积淀的人脉关系，销售渠道，客户基础，市场信息等形成了公司巨大的资源优势。
      </p>
      <p class="text">
        我们的使命——让消费者吃的每一粒大米，每一滴油都健康、安全、放心！
        一直以来，公司紧紧围绕“树百年品牌，进百姓万家”的发展目标，立足产品质量，打造放心粮油品牌。
        目前公司主营产品品牌有“合鑫泰”“乍仑旺”“米美佳”系列大米以及“鲁花”系列食用油
      </p>
    </div>
  </div>
</template>

<script>
import VTitle from "../components/Title";
export default {
  components: {
    VTitle
  }
}
</script>

<style lang="stylus" scoped>
.index
  position absolute
  top 40px
  left 0
  right 0
  bottom 55px
  .logo
    text-align center
  .content
    padding 10px
    .text
      line-height 1.6rem
      font-size 1.2rem  
      text-indent 2.4rem
      text-align justify
</style>
