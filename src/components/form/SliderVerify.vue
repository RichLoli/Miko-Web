<template>
  <div id="slider-verify">
    <div id="silder-base" :style="sliderStyle">
      <span>滑动验证 >>></span>
      <div id="silder-success" :style="sliderStyle">
        <div id="slider-drag-block" @mousedown="dragBlock" @mouseup="dragBlockRelease"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const prop = defineProps({
  height: {
    type: String,
    default: "35px"
  }
});

const sliderStyle = {
  height: prop.height
}

const dragBlock = (el) => {
    console.log("鼠标按下");
    console.log(el);
}

const dragBlockRelease = () => {
    console.log("鼠标松开");
}

</script>

<style>
#slider-verify {
  width: 100%;
  border: 1px black solid;
}

#silder-base {
  background-color: rgb(255, 255, 255);
  text-align: center;
  color: rgb(167, 167, 167);
  user-select: none;
}

#silder-success {
  width: 100%;
  position: absolute;
  top: 0px;
  left: -310px;
  display: flex;
  justify-content: flex-end;
  background-color: rgb(78, 211, 89);
  border: 1px red solid;
}

#slider-drag-block {
    width: 40px;
    height: 100%;
    background-color: white;
    border: 1px blue solid;
    cursor: pointer;
}
</style>