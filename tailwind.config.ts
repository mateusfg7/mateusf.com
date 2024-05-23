import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      skew: {
        20: '20deg'
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        handwrite: 'var(--font-caveat)'
      },
      colors: {
        neutral: {
          1000: 'rgba(6, 6, 6)'
        },
        brand: {
          email: 'hsl(var(--email-color))',
          github: 'hsl(var(--github-color))',
          codepen: 'hsl(var(--codepen-color))',
          linkedin: 'hsl(var(--linkedin-color))',
          'stack-overflow': 'hsl(var(--stack-overflow-color))',
          reddit: 'hsl(var(--reddit-color))',
          twitter: 'hsl(var(--twitter-color))',
          instagram: 'hsl(var(--instagram-color))',
          arch: 'hsl(var(--arch-color))'
        }
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        typing: 'typing 1.8s ease-in .8s 1 normal both',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        shine: 'shine 4s linear 0s forwards',
        'custom-fade-down': 'custom-fade-down 200ms linear',
        'slide-left': 'slide-left 70ms linear',
        'slide-right': 'slide-right 70ms linear',
        'marquee-left': 'marquee-left var(--duration, 30s) linear infinite',
        'marquee-up': 'marquee-up var(--duration, 30s) linear infinite',
        'background-fade': 'background-fade 20s linear infinite'
      },
      keyframes: {
        typing: {
          from: {
            width: '1'
          },
          to: {
            width: '22.7rem'
          }
        },
        cursor: {
          '0%, 40%': { opacity: '1' },
          '60%, 100%': { opacity: '0' }
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)'
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        shine: {
          '20%, 100%': {
            transform: 'translateX(300%) skewX(-20deg)'
          }
        },
        'custom-fade-down': {
          '0%': {
            opacity: '0',
            transform:
              'translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            opacity: '1',
            transform:
              'translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'slide-right': {
          '0%': {
            transform:
              'translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            transform:
              'translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'slide-left': {
          '0%': {
            transform:
              'translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            transform:
              'translate(0, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        'background-fade': {
          '0%': { background: colors.blue['600'] },
          '25%': { background: colors.yellow['600'] },
          '50%': { background: colors.green['600'] },
          '75%': { background: colors.red['600'] },
          '100%': { background: colors.blue['600'] }
        }
      },
      scale: {
        flip: '-1'
      }
    },
    keyframes: {
      ...defaultTheme.keyframes,
      ping: {
        '0%': {
          transform: 'scale(1)'
        },
        '100%': {
          transform: 'scale(3)',
          opacity: '0'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-animate'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements'
    })
  ]
}

export default config
