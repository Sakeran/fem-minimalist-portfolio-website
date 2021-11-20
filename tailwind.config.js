module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1110px',
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      // Slightly Desaturated Cyan
      primary: "hsl(167deg, 36%, 54%)",
      // Dark Blue
      "primary-dark": "hsl(205deg, 47%, 21%)",
      // Grayish Dark Blue
      prose: "hsl(245deg, 10%, 22%)",
      // Very Light Grey (BG)
      surface: "hsl(0deg, 0%, 98%)",
      // Light Grey (Text Field)
      field: "hsl(240deg, 2%, 92%)",
      // Bright Red (Errors)
      error: "hsl(0deg, 90%, 57%)",
    },
    fontFamily: {
      serif: ["Ibarra Real Nova", "serif"],
      sans: ["Public Sans", "sans"],
    },
    letterSpacing: {
      tightest: "-0.45px",
      tighter: "-0.36px",
      tight: "-0.29px",
      wide: "2px"
    },
    extend: {
      fontSize: {
        input: "0.8125rem",
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
