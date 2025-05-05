<template>
  <button
    :class="computedClass"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'].includes(value)
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    class: {
      type: String,
      default: ''
    }
  },
  computed: {
    computedClass() {
      const baseClasses = "flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

      const variantClasses = {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      };

      const sizeClasses = {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      };

      return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${this.class}`;
    }
  }
};
</script>
