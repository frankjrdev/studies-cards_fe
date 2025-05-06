// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#91c5ec",
          400: "#61a5e0",
          500: "#3d8ad4",
          600: "#2b6cb0",
          700: "#1e4b8c",
          800: "#153e75",
          900: "#1a365d",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#b1beeb",
          300: "#a78bfa",
          400: "#8b5cf6",
          500: "#7c3aed",
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#2e1065",
        },
        background: {
          light: "#f8fafc",
          DEFAULT: "#ffffff",
          dark: "#1e293b",
        },
        titles: {
          light: "#8869a5",
          DEFAULT: "#4b5563",
          dark: "#1f2937",
        },
        success: {
          light: "#34C759",
          DEFAULT: "#22c55e",
          dark: "#15803d",
        },
        error: {
          light: "#FF3B30",
          DEFAULT: "#ef4444",
          dark: "#b91c1c",
        },
        warning: {
          light: "#FFCC00",
          DEFAULT: "#eab308",
          dark: "#a16207",
        },
        grey: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        display: ["Lexend", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        card: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      },
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [],
};
