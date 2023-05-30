/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      skew: {
        20: '20deg'
      },
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
        typing: 'typing 1.8s ease-in .8s 1 normal both',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        shine: 'shine 4s linear 0s forwards'
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
        },
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        },
        shine: {
          '20%, 100%': {
            transform: 'translateX(300%) skewX(-20deg)'
          }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
