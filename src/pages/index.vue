<template>
  <div class="index">
      <div class="top">
       <span class="icon-menu"></span>
       <input type="text" v-model="search">
      </div>
      <slide :slides='slides' :maxwidth='906'></slide>
  </div>
</template>

<script>
import Slide from '../components/slide/Slide'
export default {
  components: {
    Slide
  },
  data () {
    return {
      slides:[],
      search:''
    }
  },
  created () {
    this.$http.get('/api/slides').then(res=>{
      this.slides = res.data.data;
    })
  }
}
</script>

<style lang="stylus">

</style>

