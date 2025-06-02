export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        highlight: {
          '0%': { backgroundColor: 'rgba(59, 130, 246, 0.1)' },
          '100%': { backgroundColor: 'rgba(59, 130, 246, 0)' },
        }
      },
      animation: {
        highlight: 'highlight 2s ease-out'
      }
    },
  },
  plugins: [],
};