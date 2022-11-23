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
        abtbg: "url('/src/images/profile.jpg')",
        mainabtbg: "url('/src/images/abt.jpg')",
        
      
      }),
      screens: {
        "mobile": "375px",
      }
    },
  },
  plugins: [],
}
