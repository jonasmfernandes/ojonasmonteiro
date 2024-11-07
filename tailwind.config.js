/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E2EAFD",
        secondary: "#ACB5C7",
        tertiary: "#8994AE"
      }
    },
  },
  plugins: [],
}