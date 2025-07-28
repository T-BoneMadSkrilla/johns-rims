/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          50: '#f0f4f1',
          100: '#dde8e0',
          200: '#bbd1c1',
          300: '#8db39a',
          400: '#5a8f6b',
          500: '#4D7051',
          600: '#3f5a42',
          700: '#344736',
          800: '#2d3a2e',
          900: '#1f2a20',
        }
      }
    },
  },
  plugins: [],
}