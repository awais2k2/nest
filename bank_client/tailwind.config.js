/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        "pri-hover": "#ef4444",
        primary: "#f87171",
        black: "#000000",
        border: "#78716c",
        bgtrans: "#f4f4f5",
        teal: "#5eead4",
      },
      keyframes: {
        navtranslate: {
          "0%": { transform: "translateX(-1200px)" },
          "100%": { transform: "translateX(0px)" },
        },
        maintext: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "70%": { transform: "translateX(40px)" },
          "100%": { transform: "translateX(0px)" },
        },
        mainpara: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "70%": { transform: "translateX(-40px)" },
          "100%": { transform: "translateX(0px)" },
        },
        mainbutton: {
          "0%": { transform: "translateY(80px)", opacity: "0" },
          "70%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(0px)" },
        },
        mainimg: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "70%": { transform: "translateX(-40px)" },
          "100%": { transform: "translateX(0px)" },
        },
        iconleft: {
          "0%": { transform: "translateX(10px)" },
          "50%": { transform: "translateX(30px)" },
          "100%": { transform: "translateX(10px)" },
        },
        iconright: {
          "0%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(-30px)" },
          "100%": { transform: "translateX(-10px)" },
        },
      },
      animation: {
        navtrans: "navtranslate 0.6s ease-out ",
        maintext: "maintext 0.7s ease-out ",
        mainpara: "mainpara 0.7s ease-out ",
        mainbutton: "mainbutton 0.7s ease-out ",
        mainimg: "mainimg 0.4s ease-out ",
        iconleft: "iconleft 2s ease-out infinite",
        iconright: "iconright 2s ease-out infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
