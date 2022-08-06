/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1':"url(/images/bg1.png)",
        'bg2':"url(/images/bg2.png)"
      }
    },
  },
  plugins: [],
}