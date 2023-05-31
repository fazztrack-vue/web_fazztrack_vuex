/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    extend: {
      colors: {
        "second-gray": "#797e86",
        "blue-dongker": "#2452a8",
        "primary-orange": "#ef6807",
      },
    },
  },

  plugins: [require("daisyui")],
};
