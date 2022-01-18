const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        white: "#f5f5f5",
        black: "#0f1115",
        "steel-gray": {
          100: "#2f323b",
          200: "#252831",
          300: "#1b1e27",
          400: "#11141d",
          500: "#070a13",
        },
        blue: {
          100: "#2177ff",
          200: "#176dff",
          300: "#0d63f8",
          400: "#0359ee",
          500: "#004fe4",
        },
        violet: {
          100: "#9a58ff",
          200: "#904eff",
          300: "#8644f7",
          400: "#7c3aed",
          500: "#7230e3",
        },
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...fontFamily.sans],
        "gloria-hallelujah": ["Gloria Hallelujah", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
