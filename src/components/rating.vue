<template>
  <div class="rating">
    <span class="avatar"><img :src="rating.avatar">
      <p class="name">{{rating.username}}</p>
    </span>
    <p class="text">{{text}}</p>
    <p class="bottom"><span class="time">{{time}}</span></p>
  </div>
</template>

<script>
export default {
  props:{
    rating:{
      type:Object,
      default(){
        return{
          text:''
        }
      }
    }
  },
  computed:{
    text(){
      if(this.rating.text!=''){
        return this.rating.text;
      }
        return "评价方未及时做出评价,系统默认好评!"
    },
    time(){
      if(this.rating.rateTime!=''){
          let data = new Date(this.rating.rateTime)
          return data.toLocaleString().split(" ")[0]  
      }else{
        return "";
      }
      
    }
  }
}
</script>

<style lang="stylus">
@import "../common/stylus/base.styl";
.rating
  position relative
  font-size 0
  padding-bottom 10px
  border-1px-bottom(light)
  color #7CB5BB
  .text
    line-height 20px
    height 40px
  .text,.bottom
    padding 10px 0 0 80px
  .avatar
    position absolute
    left 10px
    top 10px
    width 40px
    height 40px
    .name
      font-size 1.2rem
      padding-top 10px
</style>
