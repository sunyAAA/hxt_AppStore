<template>
    <div class='slide-show' @mouseover='clearInv' @mouseout='runInv'>
        <div class="slide-img">
            <ul :class='{slideTransition:!slideReset}'
                :style='{left:-(nowIndex+1)*imgWidth+"px"}'>
                <li>
                    <a :href="slides[slides.length-1].href">
                        <img :src="slides[slides.length-1].src" :key='-1'/>
                    </a>
                </li>
                <li v-for='(val,index) in slides' :key='index'>
                    <a :href="val.href">
                        <img :src="val.src" alt=""/>
                    </a>
                </li>
                <li>
                    <a :href="slides[0].href">
                        <img :src="slides[0].src" :key='slides.length'/>
                    </a>
                </li>
            </ul>
        </div>
        <h2>{{slides[slideIndex].title}}</h2>
        <ul class='slide-pages'>
            <li @click='throttle(prev)'>&lt;</li>
            <li v-for='(item,index) in slides'>
                <a :class='{on:index===slideIndex}' @click='throttle(goTo,index)'>{{index+1}}</a>
            </li>
            <li @click='throttle(next)'>&gt;</li>
        </ul>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      imgWidth: 900,
      nowIndex: 0,
      invId: null,
      isShow: true,
      slideReset: false,
      throttleId: null,
      delay: 1200,
      reSetFlag: false,
      reSetId: null
    };
  },
  computed: {
    slideIndex() {
      if (this.nowIndex <= -1) {
        return this.slides.length - 1;
      } else if (this.nowIndex >= this.slides.length) {
        return 0;
      } else {
        return this.nowIndex;
      }
    }
  },
  methods: {
    prev() {
      this.nowIndex--;
    },
    next() {
      this.nowIndex++;
    },
    goTo(index) {
      this.nowIndex = index;
    },
    throttle(method, arg) {
      if (this.throttleId) {
        return;
      }
      method(arg);
      this.throttleId = setTimeout(() => {
        this.throttleId = undefined;
      }, this.delay);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.nowIndex++;
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
      this.invId = null;
    }
  },
  watch: {
    nowIndex(curVal) {
      if (curVal === this.slides.length || curVal === -1) {
        setTimeout(() => {
          this.slideReset = true;
          if (curVal === this.slides.length) {
            this.nowIndex = 0;
          } else if (curVal === -1) {
            this.nowIndex = this.slides.length - 1;
          }
          this.reSetFlag = true;
        }, 1000);
        this.reSetId = setInterval(()=>{
            if(this.reSetFlag){
                this.slideReset = false;
                clearInterval(this.reSetId)
                this.reSetId=null
            }
        },1000)
      }
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<style scoped>
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
  overflow: hidden;
}
.slide-img > ul {
  position: absolute;
  /*height: 345px;*/
  width: 1000%;
  left: 0px;
}
.slideTransition {
  transition: left 1s ease;
}
.slide-img > ul > li {
  float: left;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
  color: lightblue;
}
</style>