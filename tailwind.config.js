/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pantone: {
          dark: '#0B0C10',   /* Almost Black Base */
          282: '#1F2833',    /* Deep Slate Blue/Gray */
          surface: '#1F2833',/* Surface Card Fill */
          lightBg: '#C5C6C7',/* Light Silver Accent */
          accent: '#66FCF1', /* Vivid Bright Cyan */
          teal: '#45A29E',   /* Deep Teal Accent */
        }
      }
    },
  },
  plugins: [],
}