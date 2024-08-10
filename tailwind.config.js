/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        oops: "notfound 1.5s ease  infinite",
      },
      keyframes: {
        notfound: {
          "30%": { transform: "rotate(-10deg)" },
          // "50%": { transform: "scale(1.2)" },
          "80%": { transform: "rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
