<template>
  <div
    class="absolute left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 overflow-hidden  shadow-lg rounded-md border data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute  "
    :class="className">
    <div
      class="relative h-[var(--radix-navigation-menu-viewport-height)] w-full  bg-popover text-popover-foreground  md:w-full">
      <div class="">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationMenuContent',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
