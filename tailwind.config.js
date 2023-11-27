/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'grey-232': '#E8E8E8',
      'black': '#000'
    },
    spacing: {
      '5px': '5px',
    }},
  },
  plugins: [],
}

