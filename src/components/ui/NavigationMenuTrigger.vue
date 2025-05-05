<template>
  <button
    class="group flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
    :class="className"
  >
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>

<script>
export default {
  name: 'NavigationMenuTrigger',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
