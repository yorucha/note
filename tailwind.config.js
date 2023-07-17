/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1012px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      animation: {
        'fade-in': 'fade-in .3s ease-out',
        'spin-reverse': 'spin 60s linear infinite reverse'
      }
    }
  },
  plugins: []
}
