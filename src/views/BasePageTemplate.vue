<template>
  <div class="w-full min-h-screen bg-gradient-to-b from-background-base to-background-light">
    <!-- 頁面標題區 -->
    <div class="relative py-12 bg-gradient-to-r text-text-inverse from-brand-primary to-brand-secondary">
      <div class="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
      <div class="relative px-4 mx-auto">
        <h1 class="font-bold tracking-tight text-heading-xl">{{ pageTitle }}</h1>
        <p v-if="pageDescription" class="mt-3 max-w-2xl opacity-90 text-body-lg">{{ pageDescription }}</p>
      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="px-5 mx-auto sm:px-8 lg:px-12">
      <div class="py-8 bg-background-light">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePageTemplate',
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    pageDescription: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.bg-primary-600 {
  background-color: var(--primary-color, #1a56db);
}
</style>
