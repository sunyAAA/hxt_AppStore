<template>
    <div class="counter-component">
        <div class="counter-btn" @click="minus"> -</div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="fixNumber">
        </div>
        <div class="counter-btn" @click="add"> +</div>
    </div>
</template>

<script>
    export default {
        props: {
            max: {
                type: Number,
                default: 100
            },
            min: {
                type: Number,
                default: 1
            },
            now:{
                type: Number,
            },
            index:{
                type: Number
            }
        },
        watch:{
          number(){
              if(this.index!=undefined){
                   this.$emit('on-change',this.index,this.number)
              }else{
                this.$emit('on-change',this.number)
              }
          }
        },
        data(){
            return {
                number: this.min
            }
        },
        methods: {
            fixNumber(){
                let fix;
                if (typeof this.number === 'string') {
                    fix = Number(this.number.replace(/\D/g, ''))
                } else {
                    fix = this.number
                }
                fix > this.max ? fix = this.max : '';
                fix < this.min ? fix = this.min : '';
                this.number = fix
            },
            minus(){
                if(this.number<=this.min){
                    return
                }
                this.number--
            },
            add(){
                if(this.number>=this.max){
                    return
                }
                this.number++
            }
        },
        created () {
            if(this.now){
                this.number = this.now
            }
        }
    }
</script>

<style scoped>
    .counter-component {
        position: relative;
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
    }
    .counter-show {
        float: left;
    }
    .counter-show input {
        border: none;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        height: 23px;
        line-height: 23px;
        width: 30px;
        outline: none;
        text-indent: 2px;
        text-align: center;
    }
    .counter-btn {
        border: 1px solid #e3e3e3;
        float: left;
        height: 25px;
        line-height: 25px;
        width: 25px;
        text-align: center;
        cursor: pointer;
    }
    .counter-btn:hover {
        border-color: #4fc08d;
        background: #4fc08d;
        color: #fff;
    }
</style>