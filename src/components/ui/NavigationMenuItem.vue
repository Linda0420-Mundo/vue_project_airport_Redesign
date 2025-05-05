<template>
  <li :class="className">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'NavigationMenuItem',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
