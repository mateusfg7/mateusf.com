/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fff',
        text: '#111',
        secondText: '#444',
        primary: '#0070f3',
        unselectedText: '#444',
        unselectedSecondText: '#666'
      }
    }
  },
  plugins: []
}
