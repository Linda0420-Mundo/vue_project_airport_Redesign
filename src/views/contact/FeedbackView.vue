<template>
  <div class="p-6 mx-auto max-w-2xl">
    <h1 class="mb-8 font-bold text-center text-heading-xl text-text-primary">意見反饋</h1>
    <form @submit.prevent="submitFeedback" class="space-y-6">
      <div class="space-y-2">
        <label for="name" class="block font-medium text-body text-text-secondary">姓名</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          class="px-4 py-2 w-full rounded-md border border-border-color bg-background-light text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
        >
      </div>
      <div class="space-y-2">
        <label for="email" class="block font-medium text-body text-text-secondary">電子郵件</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="px-4 py-2 w-full rounded-md border border-border-color bg-background-light text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
        >
      </div>
      <div class="space-y-2">
        <label for="message" class="block font-medium text-body text-text-secondary">意見內容</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          class="px-4 py-2 w-full rounded-md border border-border-color bg-background-light text-text-primary focus:ring-2 focus:ring-brand-primary focus:border-brand-primary min-h-[150px]"
        ></textarea>
      </div>
      <button
        type="submit"
        class="px-4 py-2 w-full rounded-md transition-colors duration-200 text-text-inverse bg-brand-primary hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
      >
        提交
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FeedbackView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitFeedback() {
      // 這裡可以添加提交表單的邏輯
      console.log('提交的表單數據：', this.formData)
    }
  }
}
</script>
