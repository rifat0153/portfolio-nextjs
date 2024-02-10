const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const containerQueryPlugin = require('@tailwindcss/container-queries');
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
      },
      fontSize: {
        '7xl': '5rem',
        md: '16px',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        alegreya: ['var(--font-alegreya)'],
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
    },
  },
  plugins: [
    containerQueryPlugin,
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections([
        'mdi',
        'lucide',
        'devicon',
        'logos',
        'fa6-brands',
        'tabler',
        'devicon-plain',
        'icon-park',
        'ic',
        'vscode-icons',
        'bytesize',
        'uil',
      ]),
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    }),
    nextui(),
  ],
};
