/** @type {import('tailwindcss').Config} */
import textShadow from 'tailwindcss-textshadow'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        'lg': '0 0 10px rgba(0,0,0,0.5)',
        'none': 'none',
      },
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',
        'brand-primary': 'var(--brand-primary)',
        'brand-secondary': 'var(--brand-secondary)',
        'background-light': 'var(--background-light)',
        'background-light-off': 'var(--background-light-off)',
        'background-off': 'var(--background-off)',
        'border-color': 'var(--border-color)',
        'footer-bg': 'var(--footer-bg)',
        'footer-text': 'var(--footer-text)',
        'footer-text-muted': 'var(--footer-text-muted)',
        'footer-border': 'var(--footer-border)',
        'footer-hover': 'var(--footer-hover)',
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      fontSize: {
        'display': 'var(--font-display)',
        'heading-xl': 'var(--font-heading-xl)',
        'heading-lg': 'var(--font-heading-lg)',
        'heading-md': 'var(--font-heading-md)',
        'heading-sm': 'var(--font-heading-sm)',
        'body-xl': 'var(--font-body-xl)',
        'body-lg': 'var(--font-body-lg)',
        'body': 'var(--font-body)',
        'body-sm': 'var(--font-body-sm)',
        'body-xs': 'var(--font-body-xs)',
        'caption': 'var(--font-caption)',
        'micro': 'var(--font-micro)',
      },
      fontWeight: {
        'bold': 'var(--weight-bold)',
        'semibold': 'var(--weight-semibold)',
        'medium': 'var(--weight-medium)',
        'regular': 'var(--weight-regular)',
      },
      lineHeight: {
        'tight': 'var(--line-tight)',
        'snug': 'var(--line-snug)',
        'normal': 'var(--line-normal)',
        'relaxed': 'var(--line-relaxed)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    textShadow
  ],
}

