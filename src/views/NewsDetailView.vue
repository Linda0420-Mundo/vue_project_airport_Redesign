<template>
  <div class="px-4 py-8 mx-auto">
    <div class="mx-auto max-w-4xl">
      <div class="mb-8">
        <router-link to="/" class="flex items-center space-x-2 transition-colors text-brand-primary hover:text-brand-secondary">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-body-sm" />
          <span>返回首頁</span>
        </router-link>
      </div>

      <div v-if="currentNews" class="p-6 rounded-lg shadow-md bg-background-light">
        <div class="flex items-center mb-4 space-x-3">
          <span class="text-body-sm text-text-tertiary">{{ currentNews.date }}</span>
          <span v-if="currentNews.highlight"
                class="px-2 py-1 font-medium rounded-full text-body-xs text-text-inverse bg-brand-primary">
            重要
          </span>
          <span class="text-body-sm text-text-tertiary">{{ currentNews.readTime }} 分鐘閱讀</span>
        </div>

        <h1 class="mb-6 font-bold text-heading-xl text-text-primary">{{ currentNews.title }}</h1>

        <div class="max-w-none prose">
          <p class="leading-relaxed text-body-lg text-text-secondary">{{ currentNews.description }}</p>
        </div>

        <div class="pt-6 mt-8 border-t border-border-color">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <button @click="shareNews" class="flex items-center space-x-2 transition-colors text-text-tertiary hover:text-brand-primary">
                <font-awesome-icon :icon="['fas', 'share']" />
                <span>分享</span>
              </button>
              <button @click="printNews" class="flex items-center space-x-2 transition-colors text-text-tertiary hover:text-brand-primary">
                <font-awesome-icon :icon="['fas', 'print']" />
                <span>列印</span>
              </button>
            </div>
            <div class="text-body-sm text-text-tertiary">
              最後更新：{{ currentNews.date }}
            </div>
          </div>
        </div>
      </div>

      <div v-else class="py-12 text-center">
        <p class="text-text-tertiary">找不到該新聞內容</p>
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
    currentNews() {
      const id = parseInt(this.$route.params.id)
      return this.newsStore.blogs[id]
    }
  },
  methods: {
    shareNews() {
      // 實現分享功能
      if (navigator.share) {
        navigator.share({
          title: this.currentNews.title,
          text: this.currentNews.description,
          url: window.location.href
        })
      } else {
        // 複製連結到剪貼簿
        navigator.clipboard.writeText(window.location.href)
        alert('連結已複製到剪貼簿')
      }
    },
    printNews() {
      window.print()
    }
  }
}
</script>

<style>
@media print {
  .container {
    padding: 0;
  }
  .bg-background-light {
    box-shadow: none;
  }
  button {
    display: none;
  }
}
</style>
