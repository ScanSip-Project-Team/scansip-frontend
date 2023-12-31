export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/Modal.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-232": "#E8E8E8",
        black: "#000",
        greenScanSip: "#18C166",
        greyAddArticlesButton: "#F3F3F3",
        darkGrey: "#363636",
        ligthGrey: "rgba(0, 0, 0, 0.05);",
      },
      borderRadius: {
        5: "5px",
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
      width: {
        available: "-webkit-fill-available",
        300: "300px",
      },
      height: {
        available: "-webkit-fill-available",
        svh: "100svh",
        7.5: "30px",
      },
      rounded: {
        "10px": "10px",
      },

      fontFamily: {
        serif: ["Roboto"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
