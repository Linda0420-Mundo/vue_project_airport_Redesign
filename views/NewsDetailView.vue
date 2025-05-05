<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <router-link to="/" class="flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-sm" />
          <span>返回首頁</span>
        </router-link>
      </div>

      <div v-if="currentNews" class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center space-x-3 mb-4">
          <span class="text-sm text-text-tertiary">{{ currentNews.date }}</span>
          <span v-if="currentNews.highlight"
                class="px-2 py-1 text-xs font-medium text-white rounded-full bg-brand-primary">
            重要
          </span>
          <span class="text-sm text-text-tertiary">{{ currentNews.readTime }} 分鐘閱讀</span>
        </div>

        <h1 class="text-3xl font-bold text-text-primary mb-6">{{ currentNews.title }}</h1>

        <div class="prose max-w-none">
          <p class="text-text-secondary leading-relaxed text-lg">{{ currentNews.description }}</p>
        </div>

        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <button @click="shareNews" class="flex items-center space-x-2 text-text-tertiary hover:text-brand-primary transition-colors">
                <font-awesome-icon :icon="['fas', 'share']" />
                <span>分享</span>
              </button>
              <button @click="printNews" class="flex items-center space-x-2 text-text-tertiary hover:text-brand-primary transition-colors">
                <font-awesome-icon :icon="['fas', 'print']" />
                <span>列印</span>
              </button>
            </div>
            <div class="text-sm text-text-tertiary">
              最後更新：{{ currentNews.date }}
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
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
  .bg-white {
    box-shadow: none;
  }
  button {
    display: none;
  }
}
</style>
