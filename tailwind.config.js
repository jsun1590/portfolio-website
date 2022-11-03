module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
      },

      boxShadow: {
        circle: "0 0 0 1px",
      },

      animation: {
        waving: "waving 1s",
      },

      keyframes: {
        waving: {
          "0%": { transform: "rotate( 0.0deg)" },
          "20%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-8.0deg)" },
          "70%": { transform: "rotate(10.0deg)" },
          "100%": { transform: "rotate( 0.0deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant, matchUtilities, addUtilities, theme }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("child-2", "& > * > *");
      addVariant("child-2-hover", "& > *:hover");
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
      addUtilities({ ".transform-3d": { transformStyle: "preserve-3d" } });
    },
  ],
};
