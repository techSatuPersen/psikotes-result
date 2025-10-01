// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
      'sans': ['Plus Jakarta Sans', 'sans-serif'],
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        'lp': { max: '650px' },
      },
    },
  },
}