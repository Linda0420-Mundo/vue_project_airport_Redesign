<template>
  <div
    class="top-full z-[1] flex h-2.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in"
    :class="className"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"></div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenuIndicator',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
