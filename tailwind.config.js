module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    fontFamily: {
      serif: ["Ibarra Real Nova", "serif"],
      sans: ["Public Sans", "sans"],
    },
    letterSpacing: {
      tightest: "-0.45px",
      tighter: "-0.36px",
      tight: "-0.29px",
    },
    extend: {
      fontSize: {
        sm: "0.9375rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        max: "3.125rem",
      },
      lineHeight: {
        tighter: "1.05",
        tight: "1.125",
        body: "1.875",
      },
    },
  },
};
