<template>
  <div class="flex relative flex-col items-center text-gray-300 font-ibm">


    <!-- Footer 區塊 -->
    <footer id="footer" class="flex relative z-50 flex-col justify-evenly items-end px-8 py-20 w-full md:flex-row">
      <div class="absolute inset-0 z-[-7] bg-gradient-to-b from-transparent via-[#b1a2dd] to-[#7260a3]"></div>
      <div class=""></div>
      <div class="grid grid-cols-1 gap-4 w-full sm:grid-cols-3">
      <!-- 第一欄 -->
      <div class="flex flex-col gap-4 justify-between items-start w-full">
        <h3 class="text-3xl font-medium text-white">CoolSite</h3>
        <div class="flex gap-4">
          <a href="https://codepen.io/Juxtopposed" target="_blank" class="flex justify-center items-center w-12 h-12 rounded bg-white/10">
            <img src="https://assets.codepen.io/9051928/codepen_1.png" alt="Codepen" class="h-6" />
          </a>
          <a href="https://twitter.com/juxtopposed" target="_blank" class="flex justify-center items-center w-12 h-12 rounded bg-white/10">
            <img src="https://assets.codepen.io/9051928/x.png" alt="Twitter" class="h-6" />
          </a>
          <a href="https://youtube.com/@juxtopposed" target="_blank" class="flex justify-center items-center w-12 h-12 rounded bg-white/10">
            <img src="https://assets.codepen.io/9051928/youtube_1.png" alt="YouTube" class="h-6" />
          </a>
        </div>
      </div>

      <!-- 第二欄 -->
      <div class="flex flex-col w-full  bg-[#7260a3] rounded-xl px-4 py-4 gap-2">
        <p>About</p>
        <p>Our mission</p>
        <p>Privacy Policy</p>
        <p>Terms of service</p>
      </div>

      <!-- 第三欄 -->
      <div class="flex flex-col w-full  bg-[#7260a3] rounded-xl px-4 py-4 gap-2">
        <p>Services</p>
        <p>Products</p>
        <p>Join our team</p>
        <p>Partner with us</p>
      </div>
    </div>
    <p  class="absolute bottom-8 text-sm text-gray-500">2024 © All Rights Reserved</p>

    </footer>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ScrollCardFooter',
  setup() {
    onMounted(() => {
      // 若未來要處理滾動邏輯或其他效果，可放這邊
      console.log('Component mounted')
    })
  }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;500&display=swap");

.font-ibm {
  font-family: "IBM Plex Sans", sans-serif;
}

/* 自定義 mask 用於 footer 背景模糊效果 */
.mask-gradient {
  mask-image: linear-gradient(
  rgba(114, 96, 163, 0) 0%,
  rgba(114, 96, 163, 0.5) 10%,
  rgba(114, 96, 163, 0.8) 20%,
  rgba(114, 96, 163, 1) 30%,
  #7260a3 100%
);
-webkit-mask-image: linear-gradient(
  rgba(114, 96, 163, 0) 0%,
  rgba(114, 96, 163, 0.5) 10%,
  rgba(114, 96, 163, 0.8) 20%,
  rgba(114, 96, 163, 1) 30%,
  #7260a3 100%
);
}
</style>
