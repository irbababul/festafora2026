/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F27A22',
          amber: '#FB923C',
          gold: '#F59E0B',
          olive: '#4D7C0F',
          lime: '#84CC16',
          skyblue: '#38BDF8',
          blue: '#0284C7',
          dark: '#0F172A',
          cardBg: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}