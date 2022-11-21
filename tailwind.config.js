/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html", './src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}',],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#faf7f4",
        "secondary": "#ffc800",
      }, 
      backgroundImage: theme => ({
        heroimage : "url('/src/images/hero.jpeg')",
      })
    },
  },
  plugins: [],
}
