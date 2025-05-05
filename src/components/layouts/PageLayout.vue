<template>
  <div class="min-h-screen bg-background-light">
    <div class="px-4 py-8 mx-auto">
      <h1 class="mb-6 text-3xl font-bold text-text-primary">{{ title }}</h1>
      <div class="grid gap-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLayout',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
