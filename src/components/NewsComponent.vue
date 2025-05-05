<template>
  <div class="px-5 sm:px-8 lg:px-12 bg-background-light">



      <!-- News Marquee -->
      <div class="z-10 rounded-md">
        <div class="overflow-hidden relative">
          <div class="flex justify-between items-center">
            <div class="flex flex-1 items-center space-x-4">
              <font-awesome-icon :icon="['fas', 'newspaper']" class="text-xl text-brand-primary" />
              <div class="overflow-hidden flex-1 whitespace-nowrap">
                <transition name="fade" mode="out-in">
                  <div :key="currentIndex" class="inline-block">
                    <span class="mx-4">
                      {{ currentNews.date }} - {{ currentNews.title }}
                    </span>
                  </div>
                </transition>
              </div>
            </div>
            <router-link :to="{ name: 'news-detail', params: { id: currentIndex }}"
                        class="flex items-center ml-4 space-x-2 transition-colors text-brand-primary hover:text-brand-secondary">
              <span>MORE</span>
              <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-sm" />
            </router-link>
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
  data() {
    return {
      currentIndex: 0,
      timer: null
    }
  },
  computed: {
    blogs() {
      return this.newsStore.sortedLatestNews
    },
    currentNews() {
      return this.blogs[this.currentIndex]
    }
  },
  methods: {
    startNewsRotation() {
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.blogs.length
      }, 5000)
    }
  },
  mounted() {
    this.startNewsRotation()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>