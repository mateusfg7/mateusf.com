/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'chivo-mono': ['"Chivo Mono"', 'cursive']
      },
      colors: {
        neutral: {
          1000: 'rgba(17, 17, 17)'
        }
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        typing: 'typing 1.8s ease-in .8s 1 normal both'
      },
      keyframes: {
        typing: {
          from: {
            width: 0
          },
          to: {
            width: '22.7rem'
          }
        },
        cursor: {
          '0%, 40%': { opacity: 1 },
          '60%, 100%': { opacity: 0 }
        }
      }
    }
  },
  plugins: []
}
