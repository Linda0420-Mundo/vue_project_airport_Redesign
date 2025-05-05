<script>
import { RouterView } from 'vue-router'
import FooterComponent from "@/components/FooterComponent.vue"
import WebHeader from "@/components/TestArea.vue"

export default {
  components: {
    RouterView,
    WebHeader,
    FooterComponent
  },
  data() {
    return {
      resizeCount: 0
    }
  },
  computed: {
    headerHeight() {
      this.resizeCount;
      const header = document.querySelector('nav.fixed');
      return header ? header.offsetHeight : 0;
    }
  },
  mounted() {
    // 監聽視窗大小變化
    window.addEventListener('resize', () => {
      this.resizeCount++;
    });

    // 監聽導航欄變化
    const header = document.querySelector('nav.fixed');
    if (header) {
      const resizeObserver = new ResizeObserver(() => {
        this.resizeCount++;
      });
      resizeObserver.observe(header);
    }
  },
  beforeUnmount() {
    // 清理事件監聽器
    window.removeEventListener('resize', () => {
      this.resizeCount++;
    });
  }
}
</script>

<template>
  <header>
    <link href="/src/style.css" rel="stylesheet">
  </header>
  <WebHeader class="z-[100]" />
  <RouterView class="z-0 bg-background-light" :style="{ marginTop: `${headerHeight}px` }" />
  <FooterComponent class="z-10"/>
</template>

<style>
</style>
