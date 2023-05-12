/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F4F4",
        },
        default: {
          DEFAULT: "#111111",
        },
        primary: {
          DEFAULT: "rgba(22, 171, 248, 1)",
          100: "rgba(22, 171, 248, 0.1)",
          200: "rgba(22, 171, 248, 0.2)",
          300: "rgba(22, 171, 248, 0.3)",
          400: "rgba(22, 171, 248, 0.4)",
          500: "rgba(22, 171, 248, 0.5)",
          600: "rgba(22, 171, 248, 0.6)",
          700: "rgba(22, 171, 248, 0.7)",
          800: "rgba(22, 171, 248, 0.8)",
          900: "rgba(22, 171, 248, 0.9)",
        },
        secondary: {
          DEFAULT: "rgba(237, 76, 92, 1)",
          100: "rgba(237, 76, 92, 0.1)",
          200: "rgba(237, 76, 92, 0.2)",
          300: "rgba(237, 76, 92, 0.3)",
          400: "rgba(237, 76, 92, 0.4)",
          500: "rgba(237, 76, 92, 0.5)",
          600: "rgba(237, 76, 92, 0.6)",
          700: "rgba(237, 76, 92, 0.7)",
          800: "rgba(237, 76, 92, 0.8)",
          900: "rgba(237, 76, 92, 0.9)",
        },
      },
    },
  },
  plugins: [],
};
