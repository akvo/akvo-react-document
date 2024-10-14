/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '120rem',
        '10xl': '150rem',
      },
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem', // 640px
        md: '3rem', // 768px
        lg: '4rem', // 1024px
        xl: '4rem', // 1280px
      },
    },
  },
  plugins: [],
};
