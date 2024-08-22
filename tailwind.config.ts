// tailwind.config.js

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: {
        DEFAULT: "#000",
        100: "#000319",
        200: "rgba(17, 25, 40, 0.75)",
        300: "rgba(255, 255, 255, 0.125)",
      },
      white: {
        DEFAULT: "#FFF",
        100: "#BEC1DD",
        200: "#C1C2D3",
      },
      blue: {
        "100": "#E4ECFF",
      },
      purple: "#CBACF9",
      blue_or_red : "#FF3D3D"
    }
  },
  plugins: [],
}