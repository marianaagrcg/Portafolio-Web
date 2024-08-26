// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        sans: ['Public Sans', 'sans-serif'],
      },
      colors:{
        'cpurple': '#D9BBF9',
      }
    },

  },
  plugins: [],
};