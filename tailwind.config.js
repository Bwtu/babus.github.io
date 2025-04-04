module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          100: '#F3E8FF',
          200: '#E9D5FF',
          600: '#9333EA',
          700: '#7E22CE',
        },
        'indigo': {
          100: '#E0E7FF',
          600: '#4F46E5',
          700: '#4338CA',
        },
        'pink': {
          500: '#EC4899',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 3s infinite',
        'pulse': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
} 