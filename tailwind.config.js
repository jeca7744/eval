/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      light: {
        ...require('daisyui/src/theming/themes')['light'],
        primary: '#4F46E5',
        'primary-focus': '#4338CA',
      },
    }],
  },
}