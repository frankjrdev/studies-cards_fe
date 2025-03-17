// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#91c5ec",
        secondary: "#b1beeb",
        background: "#c68bdf",
        titles: "#8869a5",
        white: "#FFFFFF",
        black: "#000000",
        success: "#34C759",
        error: "#FF3B30",
        warning: "#FFCC00",
        grey: {
          light: "#D1D1D6",
          medium: "#8E8E93",
          dark: "#3A3A3C",
        },
      },
    },
  },
  plugins: [],
};
