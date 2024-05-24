/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "vedoc-yellow": "#FFE473",
        "vedoc-black": "#181818",
        "vedoc-ad-yellow": "#FFF1B9",
        "vedoc-light-yellow": "#FFFAE3",
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
