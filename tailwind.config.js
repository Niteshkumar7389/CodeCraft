/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        transitionProperty: {
          "bg-transform": "background-color, transform",
        },
        transitionDuration: {
          300: "300ms",
        },
        boxShadow: {
          custom: "1px 1px 20px #52525b, 1px 1px 40px #52525b",
        },
      },
    },
  },
  plugins: [],
};
