import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primaryColor)',
        secondaryColor: 'var(--secondaryColor)',
        accentColor: 'var(--accentColor)',
        textColor: 'var(--textColor)',
        backgroundColor1: 'var(--backgroundColor1)',
        backgroundColor2: 'var(--backgroundColor2)',
        backgroundColor3: 'var(--backgroundColor3)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'IBM Plex Sans KR'], // 여기에 커스텀 글꼴 추가
        d2coding: 'D2Coding',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
  plugins: [],
};
export default config;
