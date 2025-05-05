<script>
import linear from '@/assets/Home_header/linear.png';
import bg from '@/assets/Home_header/bg.png'
import main from '@/assets/Home_header/main.png'
import FlightsSearchBar from "@/components/FlightsSearchBar.vue"
import NewsComponent from "@/components/NewsComponent.vue"
import QuickAccess from "@/components/QuickAccess.vue"

export default {
  components: {
    FlightsSearchBar,
    NewsComponent,
    QuickAccess,
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


}
</script>

<template>
  <main  class="flex relative flex-col gap-y-8 w-screen h-fit" >
    <div id="home-main" class="px-5 sm:px-8 lg:px-12">
      <div class="flex relative flex-wrap justify-center content-center">
        <img :src="img.bg" alt="" class="object-cover absolute top-0 w-full h-full opacity-60">
        <img :src="img.linear" alt="" class="object-cover absolute w-full h-full opacity-90">
        <img :src="img.main" alt="" class="object-cover z-0 max-w-[58%] aspect-auto">
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
