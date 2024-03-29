import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/feature/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      keyframes: {
        growWidth: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        bounceDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '50%, 100%': { transform: 'translateY(0px)', opacity: '1' },
        },
      },

      animation: {
        growWidth: 'growWidth 1s ease-in-out',
        bounceDown: 'bounceDown 2.5s ease-in',
      },

      colors: {
        primaryColor: 'var(--primaryColor)',
        secondaryColor: 'var(--secondaryColor)',
        accentColor: 'var(--accentColor)',
        textColor: 'var(--textColor)',
        backgroundColor1: 'var(--backgroundColor1)',
        backgroundColor2: 'var(--backgroundColor2)',
        backgroundColor3: 'var(--backgroundColor3)',
        postCardBgColor: 'var(--postCardBgColor)',
        inputDefaultColor: 'var(--inputDefaultColor)',
        inputFocusColor: 'var(--inputFocusColor)',
      },

      screens: {
        'max-sm': { max: '767px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      fontFamily: {
        sans: ['IBM Plex Sans KR', 'IBM Plex Sans'],
        d2coding: 'D2Coding',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
