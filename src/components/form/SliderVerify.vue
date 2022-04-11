<template>
  <div id="slider-verify">
    <div id="slider-image">
      <canvas id="canvas" width="300" height="180"></canvas>
    </div>
    <div id="slider-base">
      <span>滑动验证 >>></span>
      <div
        id="slider-success"
        :class="{ 'slider-success-ondrag': sliderStyle.onDrag }"
        :style="{ width: progressStyle.width + 'px' }"
      >
        <div
          id="slider-drag-block"
          :class="{ 'slider-success-ondrag': sliderStyle.onDrag }"
          :style="{ left: progressStyle.width + 'px' }"
          @mousedown="dragBlock"
        >
          <el-icon><arrow-right-bold /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, onMounted } from 'vue'

const prop = defineProps({
  height: {
    type: String,
    default: "35px"
  }
});

const releaseCapture = ref(false);

const sliderStyle = reactive({
  onDrag: false
})

// 拖动滑块进度条长度
const progressStyle = reactive({
  "width": 0
})


//松开滑块
const dragBlock = (event) => {
  releaseCapture.value = true;
}

//鼠标滑动回调函数
const moveSlider = (event) => {
  if (releaseCapture.value == false) {
    return;
  }
  var slider = document.getElementById("slider-drag-block");
  let evt = event || window.event;
  var box = slider.parentNode.getBoundingClientRect();
  var newLocation = (evt.clientX - box.left) - 20;
  if (newLocation < 0 || newLocation > 260) {
    newLocation = newLocation > 260 ? 260 : 0;
  }
  sliderStyle.onDrag = true;
  slider.left = newLocation + "px";
  progressStyle.width = newLocation;
}

//鼠标松开
document.onmouseup = function (event) {
  releaseCapture.value = false;
}

//鼠标移动
document.onmousemove = function (event) {
  moveSlider(event)
}



const initImages = () => {
  var canvas = document.getElementById("canvas");
  var canvasCtx = canvas.getContext("2d");

  var getRandomImgSrc = function () {
    return `https://picsum.photos/id/${getRandomNumberByRange(0, 1084)}/300/200`
  }

  var getRandomNumberByRange = function (start, end) {
    return Math.round(Math.random() * (end - start) + start)
  }

  var createImg = function (onload) {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = onload
    img.onerror = () => {
      img.setSrc(getRandomImgSrc()) // 图片加载失败的时候重新加载其他图片
    }

    img.setSrc = function (src) {
      const isIE = window.navigator.userAgent.indexOf('Trident') > -1
      if (isIE) { // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
        const xhr = new XMLHttpRequest()
        xhr.onloadend = function (e) {
          const file = new FileReader() // FileReader仅支持IE10+
          file.readAsDataURL(e.target.response)
          file.onloadend = function (e) {
            img.src = e.target.result
          }
        }
        xhr.open('GET', src)
        xhr.responseType = 'blob'
        xhr.send()
      }
      else img.src = src
    }

    img.setSrc(getRandomImgSrc())
    return img
  }

  var img = createImg(() => {
    draw(img)
  })

  var draw = (img) => {
    var x = 20
    var y = 20
    const l = 42 // 滑块边长
    const r = 9 // 滑块半径
    const PI = Math.PI
    const L = l + r * 2 + 3 // 滑块实际边长
    canvasCtx.drawImage(img, 0, 0);
    canvasCtx.beginPath()
    canvasCtx.moveTo(x, y)
    canvasCtx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI)
    canvasCtx.lineTo(x + l, y)
    canvasCtx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI)
    canvasCtx.lineTo(x + l, y + l)
    canvasCtx.lineTo(x, y + l)
    canvasCtx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true)
    canvasCtx.lineTo(x, y)
    canvasCtx.lineWidth = 2
    canvasCtx.fillStyle = 'rgba(255, 255, 255, 0.7)'
    canvasCtx.strokeStyle = 'rgba(255, 255, 255, 0.7)'
    canvasCtx.stroke()
    canvasCtx.globalCompositeOperation = 'destination-over'
    canvasCtx.fill()
  }
}

onMounted(initImages)

</script>

<style>
#slider-verify {
  margin: 0px auto;
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
  border: 0.5px #d5d5d5 solid;
}

#slider-image {
}

#slider-success {
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  box-sizing: content-box;
  background-color: rgb(137, 202, 255);
}

.slider-success-ondrag {
  height: 38px !important;
  top: -1px;
  border: 1px solid rgb(32, 148, 243);
}

#slider-drag-block {
  position: absolute;
  width: 40px;
  height: 40px;
  line-height: 43px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0px 2px 0 rgb(0 0 0 / 17%), 0 1px 4px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  transition: background-color 0.5s ease;
}

#slider-drag-block:hover {
  color: #ffffff;
  background-color: rgb(32, 148, 243);
}

#canvas {
  width: 100%;
  height: 100%;
}
</style>