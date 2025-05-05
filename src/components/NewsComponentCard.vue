<template>
  <div class="px-5 sm:px-8 lg:px-12">
    <div class="flex relative flex-col justify-between px-5 py-20 rounded-2xl md:flex-row">
      <!-- Left Text -->
      <div class="z-10 mb-8 md:w-1/4 md:mb-0">
        <h2 class="font-bold leading-tight text-text-primary text-heading-md">
          最新消息
        </h2>
        <p class="mt-3 leading-normal text-text-secondary text-body">
          查看最新航班相關資訊與公告
        </p>
      </div>

      <!-- News Marquee -->
      <div class="z-10 p-5 bg-white rounded-md shadow-news sm:p-6 md:p-8 md:w-2/3">
        <div class="overflow-hidden relative">
          <div class="flex items-center space-x-4">
            <font-awesome-icon :icon="['fas', 'newspaper']" class="text-xl text-brand-primary" />
            <div class="overflow-hidden whitespace-nowrap">
              <div class="inline-block animate-marquee">
                <span v-for="(item, index) in blogs" :key="index" class="mx-4">
                  {{ item.date }} - {{ item.title }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- News Detail -->
        <div class="mt-6 space-y-4">
          <div v-for="(item, index) in blogs" :key="index"
               class="p-4 rounded-lg transition-all duration-300 hover:bg-gray-50">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-text-tertiary">{{ item.date }}</span>
                  <span v-if="item.highlight"
                        class="px-2 py-1 text-xs font-medium text-white rounded-full bg-brand-primary">
                    重要
                  </span>
                </div>
                <h3 class="mt-1 font-semibold text-text-primary">{{ item.title }}</h3>
                <p class="mt-2 text-sm text-text-tertiary">{{ item.description }}</p>
              </div>
              <div class="ml-4">
                <span class="text-sm text-text-tertiary">{{ item.readTime }} 分鐘閱讀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from '../stores/newsStore'

export default {
  setup() {
    const newsStore = useNewsStore()
    return { newsStore }
  },
  computed: {
    blogs() {
      return this.newsStore.sortedLatestNews
    }
  }
}
</script>

<style>
.shadow-news {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
              rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
              rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>