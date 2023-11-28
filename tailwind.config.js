
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
        "grey-232": "#E8E8E8",
        black: "#000",
      },
      spacing: {
        "5px": "5px",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",

        black: "900",
      },

    },
  },
  plugins: [],
};
