/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        line: '1px',
      },
      spacing: {
        76: '312px',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      height: {
        multistep: '2px',
        line: '1px',
        76: '312px',
      },
      width: {
        line: '1px',
        76: '312px',
        'form-1': '360px',
        'form-2': '',
        'form-3': '',
      },
      colors: {
        'ui-gray-25': '#FCFCFD',
        'ui-gray-100': '#EAECF0',
        'ui-gray-200': '#D0D5DD',
        'ui-gray-700': '#344054',
        'ui-gray-500': '#667085',
        'ui-gray-300': '#979FAF',
        'ui-gray-400': '#8C94A6',
        'ui-primary-200': '#E9D7FE',
        'ui-primary-500': '#8E69DD',
        'ui-primary-600': '#7F56D9',
        'ui-primary-700': '#6941C6',
        'ui-base-white': '#FCFCFD',
      },
    },
  },
  plugins: [],
}
