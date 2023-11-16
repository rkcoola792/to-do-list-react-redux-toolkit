/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blinkingBg: {
          "0%, 100%": { backgroundColor: "#ef4444" },
          "50%": { backgroundColor: "#fee2e2" },
        },
      },
      animation: {
        blinkingBg: "blinkingBg 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
