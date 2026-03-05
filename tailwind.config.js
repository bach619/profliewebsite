/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'fluid-base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'fluid-lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        'fluid-xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
        'fluid-2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        'fluid-3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 1vw, 1rem)',
        'fluid-4': 'clamp(1rem, 2vw, 2rem)',
        'fluid-8': 'clamp(2rem, 4vw, 4rem)',
        'fluid-16': 'clamp(4rem, 8vw, 8rem)',
      },
      animation: {
        'bounce': 'bounce 1.5s infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'orbit': 'orbit 10s linear infinite',
        'float-orbit': 'float 4s ease-in-out infinite, orbit 10s linear infinite',
        'glitch-1': 'glitch1 2.5s infinite',
        'glitch-2': 'glitch2 2.5s infinite',
        'glitch-3': 'glitch3 2.5s infinite',
        'blink-cursor': 'blink 1s step-end infinite',
        'border-spin': 'borderSpin 4s linear infinite',
        'tooltip': 'tooltipShow 0.2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-15px)',
          },
        },
        orbit: {
          '0%': {
            transform: 'rotate(0deg) translateX(10px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(10px) rotate(-360deg)',
          },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00FF99' },
        },
        glitch1: {
          '0%, 100%': { transform: 'none' },
          '20%': { transform: 'skewX(4deg)' },
          '40%': { transform: 'translate(-4px) skew(-4deg)' },
          '60%': { transform: 'translate(2px) skew(2deg)' },
          '80%': { transform: 'skewX(-2deg)' },
        },
        glitch2: {
          '0%, 100%': { transform: 'none' },
          '25%': { transform: 'translate(2px, -2px)' },
          '50%': { transform: 'translate(-2px, 2px)' },
          '75%': { transform: 'translate(4px, -4px) scale(1.05)' },
        },
        glitch3: {
          '0%, 100%': { transform: 'none' },
          '30%': { transform: 'translate(-2px, 2px)' },
          '60%': { transform: 'translate(4px, -4px) skew(4deg)' },
          '85%': { transform: 'translate(-4px, 4px) scale(0.95)' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        tooltipShow: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 255, 0, 0.5)',
        '3d': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'skill': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};