<template>
  <nav class="relative" :class="className">
    <slot />
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
