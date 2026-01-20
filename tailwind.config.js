/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dotPulse: {
          "0%": {
            opacity: "0.25",
            transform: "scale(0.6)",
          },
          "30%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "60%": {
            opacity: "0.25",
            transform: "scale(0.6)",
          },
          "100%": {
            opacity: "0.25",
            transform: "scale(0.6)",
          },
        },
      },
      animation: {
        dotPulse: "dotPulse 0.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
