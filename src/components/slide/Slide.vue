<template>
    <div class='slide-show' @touchstart='clearInv' @touchend='runInv'>
        <div class="slide-img" ref='slideViewPort'>
            <ul :class='{slideTransition:!slideReset}'
                :style='{left:-(nowIndex+1)*imgWidth+"px"}'>
                <li>
                    <a>
                        <img :width="imgWidth"  :src="slides[slides.length-1].src" :key='-1'/>
                    </a>
                </li>
                <li v-for='(val,index) in slides' :key='index'>
                    <a>
                        <img :width="imgWidth"  :src="val.src" alt=""/>
                    </a>
                </li>
                <li>
                    <a>
                        <img :width="imgWidth" :src="slides[0].src" :key='slides.length'/>
                    </a>
                </li>
            </ul>
        </div>
        <h2>
          <ul>
            <li v-for='(item,index) in slides' :key="index" :class="{on:index===slideIndex}"></li>
          </ul>
        </h2>
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
      default: 3000
    }
  },
  data() {
    return {
      imgWidth: 0,
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
        this.reSetId = setInterval(() => {
          if (this.reSetFlag) {
            this.slideReset = false;
            clearInterval(this.reSetId);
            this.reSetId = null;
          }
        }, 1100);
      }
    },
    slides(cur,old) {
      if (cur!=old) {
        this.$nextTick(() => {
          this.imgWidth = this.$refs.slideViewPort.clientWidth;
          this.hammerEle = new Hammer(this.$refs.slideViewPort);
          this.hammerEle.on("swipeleft", ()=> {
            this.throttle(()=>{
               this.nowIndex++
            })
           
          });
          this.hammerEle.on("swiperight", ()=> {
           this.throttle(()=>{
               this.nowIndex--
            })
          });
        });
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
  margin: 10px 0;
  width: 100%;
  overflow: hidden;
  font-size: 0
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  color: #fff;
  background:transparent;
  opacity: 1;
  bottom: 0;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
}
.slide-show h2 ul li{
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: gray
}
.slide-show h2 ul li.on {
  background-color: blue
}
.slide-img {
  width: 100%;
  min-height: 192px;
  overflow: hidden;
}
.slide-img > ul {
  position: absolute;
  /*height: 345px;*/
  width: 1000%;
  left: 0px;
  padding: 0;
}

.slideTransition {
  transition: left 1s ease;
}
.slide-img > ul > li {
  overflow: hidden;
  float: left;
}
</style>