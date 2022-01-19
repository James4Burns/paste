module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./library/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./types/**/*.{ts,tsx}",
    "./utilities/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      dark: "#111111",
      light: "#ffffff",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
