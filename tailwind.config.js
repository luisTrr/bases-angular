/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'


module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animations
  ],
}

