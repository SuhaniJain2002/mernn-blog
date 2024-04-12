const flowbite = require("flowbite-react/tailwind");
/***import flowbite from "flowbite-rew/tailwind";*/
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {},
  },
  plugins: [ flowbite.plugin(),],
}