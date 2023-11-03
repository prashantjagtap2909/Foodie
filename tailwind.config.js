/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      color1: "#F43127",
      color2: "#ffe7dc",
      color3: "#000000",
      color4: "#FFFFFF",
      color5: "#ffefe8",
      color6: "#ffd9c8",
      color7: "#FFBD9F",
      color8: "#7D7D7D",
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif'],
      potta: ['Potta One', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
     '1xl': '1.875rem', // 30px
      '2xl': '2.1875rem', // 35px
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
    },
  
    extend: {
    },
  },
  plugins: [],
}