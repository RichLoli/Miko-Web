<template>
  <div id="slider-verify">
    <div></div>
    <div id="slider-base">
      <span>滑动验证 >>></span>
      <div id="slider-success" :class="sliderStyle">
        <div id="slider-drag-block" :style="sliderStyle" @mousedown="dragBlock">
          <span>-></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

const prop = defineProps({
  height: {
    type: String,
    default: "35px"
  }
});

const releaseCapture = ref(false);

const sliderStyle = reactive({
  "slider-success-ondrag": false
})

const dragBlock = (event) => {
  releaseCapture.value = true;
}

const moveSlider = (event) => {
  if (releaseCapture.value == false) {
    return;
  }
  var slider = document.getElementById("slider-drag-block");
  let evt = event || window.event;
  var box = slider.parentNode.getBoundingClientRect();
  var newLocation = (evt.clientX - box.left) - 20;
  if (newLocation < 0 || newLocation > 200) {
    return;
  }
  var progress = document.getElementById("silder-success");
  sliderStyle.left = newLocation + "px";
  progress.style.width = newLocation + "px";
}


document.onmouseup = function (event) {
  releaseCapture.value = false;
}

document.onmousemove = function (event) {
  moveSlider(event)
}

</script>

<style>
#slider-verify {
  margin: 150px auto;
  width: 300px;
  height: 250px;
  background-color: bisque;
}

#slider-base {
  color: #45494c;
  height: 40px;
  line-height: 40px;
  text-align: center;
  user-select: none;
  position: relative;
  background-color: #f7f9fa;
}

#slider-success {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: rgb(137, 202, 255);
}

.slider-success-ondrag {
  height: 38px;
  border: 1px solid rgb(0, 135, 245);
}

#slider-drag-block {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.5s ease;
}
</style>