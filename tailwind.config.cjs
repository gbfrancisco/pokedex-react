/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
