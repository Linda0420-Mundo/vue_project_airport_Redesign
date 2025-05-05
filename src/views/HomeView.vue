<script>
import linear from '@/assets/Home_header/linear.png';
import bg from '@/assets/Home_header/bg.png'
import main from '@/assets/Home_header/main.png'
import FlightsSearchBar from "@/components/FlightsSearchBar.vue"
import NewsComponent from "@/components/NewsComponent.vue"
import QuickAccess from "@/components/QuickAccess.vue"
import TimeZone from "@/components/TimeZone.vue"

export default {
  components: {
    FlightsSearchBar,
    NewsComponent,
    QuickAccess,
    TimeZone
  },
  data() {
    return {
      img: {
        linear,
        bg,
        main
      }
    }
  },
  computed: {
    headerHeight() {
      const header = document.querySelector('nav.fixed');
      return header ? header.offsetHeight : 0;
    }
  }
}
</script>

<template>
  <main class="flex relative flex-col gap-y-8 w-screen h-fit">
    <div id="home-main" class="px-0 sm:px-8 lg:px-12 bg-background-light" :style="{ height: `calc(100vh - ${headerHeight}px)` }">
      <div class="flex relative flex-wrap justify-center content-center items-center h-full">
        <img :src="img.bg" alt="" class="object-cover absolute top-0 w-full h-full opacity-60">
        <img :src="img.linear" alt="" class="object-cover absolute top-0 w-full h-full opacity-90">
        <img :src="img.main" alt="" class="object-cover z-0 max-w-[58%] aspect-auto">
        <TimeZone class="absolute right-0 bottom-0 translate-x-0 translate-y-0 sm:translate-y-1/2 sm:bottom-[20%] sm:translate-x-1/2"/>
      </div>
    </div>
    <NewsComponent />
    <div class="relative w-full z-90">
      <FlightsSearchBar />
    </div>
    <QuickAccess />
  </main>
</template>

<style></style>
