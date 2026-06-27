/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D95F1A',
        'brand-light': '#F2894A',
        'brand-dark': '#B84E10',
        cream: '#FAFAF8',
        'gray-warm': '#F5F4F1',
        'gray-mid': '#E8E7E3',
        'text-dark': '#1A1A18',
        'text-mid': '#4A4A45',
        'text-muted': '#8A8A82',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}