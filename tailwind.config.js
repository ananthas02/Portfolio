/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#84cc16'
      }
    },
    fontFamily: {
      'logo':["Kaushan Script"],
      'primary': ["Monsterrat", 'sans-serif'],
      'secondary':["Poppins", 'sans-serif']
    },
    
  },
  plugins: [],
}