<template>
  <ul class="flex flex-1 list-none items-center justify-center gap-1" :class="className">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'NavigationMenuList',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
