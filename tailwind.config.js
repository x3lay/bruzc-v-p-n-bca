/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00ff88', // Неоновый зелёный
        dark: '#0a0a0a', // Глубокий тёмный фон
        accent: '#ff007a', // Яркий розовый акцент
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Современный шрифт
      },
    },
  },
  plugins: [],
}