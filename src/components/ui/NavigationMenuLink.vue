<template>
  <a
    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    :class="className"
    :href="href"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'NavigationMenuLink',
  props: {
    className: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    }
  }
}
</script>
