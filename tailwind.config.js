
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./Components", "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages", "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey-232': '#E8E8E8',
        'black': '#000'
      },
      spacing: {
        '5px': '5px',
      }
    },
  },
  plugins: [],
};
