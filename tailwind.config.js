/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyanBlue: "#74DCDF",
          cyanHue: "#00D4FF",
          white: "#FFFFFF",
          black: "#000000",
          darkCyan: "#5FC6C9",
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      SPACING: {
        navbar: "72px"
      }
    },
  },
  plugins: [],
}
