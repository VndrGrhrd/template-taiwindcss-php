/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js, php}"],
  theme: {
    screens: {
      DEFAULT: "100%",
      // @media (min-width: 540px)
      sm: "540px",
      // @media (max-width; 768px)
      md: "720px",
      // @media (max-width: 992px)
      lg: "960px",
      // @media (max-width: 1200px)
      xl: "1140px",
      // @media (max-width: 1400px)
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
