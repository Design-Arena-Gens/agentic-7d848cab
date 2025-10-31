import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3efff',
          100: '#e5dcff',
          200: '#cab7ff',
          300: '#af93ff',
          400: '#9570ff',
          500: '#7b4dff',
          600: '#603ad6',
          700: '#472aa7',
          800: '#311c75',
          900: '#1c1043'
        },
        accent: '#ff8c42',
        ink: '#1f1a2e'
      },
      fontFamily: {
        heading: ['var(--font-cinzel)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif']
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(circle at top, rgba(123,77,255,0.25), rgba(242, 241, 249, 0.95))'
      }
    }
  },
  plugins: []
};

export default config;
