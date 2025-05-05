<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-text-primary mb-8">最新消息</h1>

      <div class="space-y-6">
        <div v-for="(item, index) in blogs" :key="index"
             class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <span class="text-sm text-text-tertiary">{{ item.date }}</span>
                <span v-if="item.highlight"
                      class="px-2 py-1 text-xs font-medium text-white rounded-full bg-brand-primary">
                  重要
                </span>
                <span class="text-sm text-text-tertiary">{{ item.readTime }} 分鐘閱讀</span>
              </div>
              <h2 class="text-xl font-semibold text-text-primary mb-3">{{ item.title }}</h2>
              <p class="text-text-secondary leading-relaxed">{{ item.description }}</p>
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
      return this.newsStore.blogs
    }
  }
}
</script>
