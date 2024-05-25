/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {    
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... } 
           },     
           
           colors : {

        'bgColorVerde': '#c5eb99',
        'bgColorMorado': '#5e17eb',
        'bgColorNegro': '#000000',
        'bgColorBlanco': '#ffffff'

      },

      fontFamily: {
        "primary": '"Poppins", sans-serif',
        "primary-alt": '"Montserrat Alternates", sans-serif',
        "secondary": '"Merriweather", serif',
        "secondary-alt": '"Raleway", sans-serif',
      },
    },
  },
  plugins: [],
}





