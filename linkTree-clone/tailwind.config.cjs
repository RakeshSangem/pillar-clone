module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
       },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
