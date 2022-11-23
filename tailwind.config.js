/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html", './src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}',],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#faf7f4",
        "secondary": "#ffc800",
        "bdark": "#202124",
        "black": "#000000E0"
      }, 
      backgroundImage: theme => ({
        heroimage: "url('/src/images/hero.jpeg')",
        ourgoal: "url('/src/images/ourgoal.jpeg')",
        logo1: "url('/src/images/Penthouse1.png')",
        logo2: "url('/src/images/Penthouse2.png')",
        whatimg: "url('/src/images/what.jpeg')",
        howbg: "url('/src/images/how.jpeg')",
        abtbg1: "url('/src/images/Maria.png')",
        abtbg2: "url('/src/images/download-3.jpeg')",
        abtbg3: "url('/src/images/download-4.jpeg')",
        mainabtbg: "url('/src/images/abt.jpg')",
        modalbg: "url('/src/images/modalbg.jpg')",
      
      }),
      screens: {
        "mobile": "375px",
      }
    },
  },
  plugins: [],
}
