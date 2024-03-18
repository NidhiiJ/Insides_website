/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Maharlika : ['Maharlika', 'regular'],
        Poppins: ['Poppins']
      },
      brightness: {
        25: '.25',
        75: '.75',
      },
      backgroundImage: {
        'contactus-image': "url('/contactusbg.png')",
      }
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    // fontFamily: {
    //   Maharlika : ['Maharlika', 'regular'],
    // }
  },
  plugins: [],
}

