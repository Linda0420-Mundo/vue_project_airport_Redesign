<template>
  <div
    class="flex absolute left-0 top-full justify-center"
    :class="className"
  >
    <div
      class="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 "
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenuViewport',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
