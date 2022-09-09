/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      height: {
        multistep: '2px',
      },
      width: {
        'form-1': '360px',
        'form-2': '',
        'form-3': '',
      },
      colors: {
        'ui-gray-300': '#D0D5DD',
        'ui-gray-700': '#344054',
        'ui-gray-500': '#667085',
        'ui-primary-500': '#8E69DD',
        'ui-primary-600': '#7F56D9',
        'ui-primary-700': '#6941C6',
      },
    },
  },
  plugins: [],
}
