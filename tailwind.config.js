/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        multistep: '2px',
      },
      colors: {
        'ui-gray-300': '#D0D5DD',
        'ui-primary-600': '#7F56D9',
      },
    },
  },
  plugins: [],
}
