/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark: "hsl(208.7,51.11%,17.65%)",
        light: "hsl(208.7,51.11%,17.65%)",
        primary: "#0eb582",
        textDark: "#2a374c",
        grey: "hsl(0,0%,96.86%)",
        lgreen: '#C6F9E9',
        darkBlue: '#18406b',
      },
      fontFamily: {
        'Raleway' :['Raleway', 'sans-serif']
      },
      keyframes: {
        sliding1:{
          from: {
            left:'0',
          },
          to: {
            left:'100%',
          },
        },
        sliding2:{
          from: {
            right:'0',
          },
          to: {
            right:'100%',
          },
        }
      },
      animation:{
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      },
      backgroundImage: {
        'banner-bg': 'url("./img/banner-bg.jpg")',
        'banner-img1': 'url("./img/banner-img1.png")',
        'banner-img2': 'url("./img/banner-img2.png")',
        'course-bg': 'url("./img/course-bg.png")',
      },
    },
  },
  plugins: [],
}

