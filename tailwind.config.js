module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    colors: {},
    borderRadius: {
      none: "0",
      DEFAULT: ".75rem",
      "3xl": "1.5rem",
      xl: "0.75rem",
      full: "9999px",
    },
    extend: {
      colors: {
        block: "#1d1d1d",
        primary: {
          plain: "#4b0d9b",
          DEFAULT: "#9747ff",
        },
        error: {
          DEFAULT: "#F55757",
          light: "#FDDDDD",
        },
        success: {
          DEFAULT: "#9DD647",
          light: "#EBF7DA",
        },
        font: "#404040",
        secondary: "#808080",
        hint: "#B0B0B0",
        white: "#FFFFFF",
        border: "#E2E2E2",
        gold: {
          DEFAULT: "#EFBA00",
          light: "#FEFAED",
        },
        platine: {
          DEFAULT: "#9FB4C7",
          light: "#F3F9FF",
        },
        silver: {
          DEFAULT: "#BEC4C9",
          light: "#F9FBFD",
        },
      },
      backgroundOpacity: {
        DEFAULT: "0.5",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      spacing: {
        4.5: "1.125rem",
      },
      fontFamily: {
        sans: ["RobotoFlex"],
        sans2: ["Montserrat"],
      },
      fontSize: {
        title: ["1.5rem", { lineHeight: "1.625rem", fontWeight: "500" }],
        subtitle1: ["1.25rem", { lineHeight: "1.625rem", fontWeight: "600" }],
        subtitle2: ["1.125rem", { lineHeight: "1.375rem", fontWeight: "500" }],
        body1: ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        body2: ["1rem", { lineHeight: "1.5", fontWeight: "500" }],
        sm1: ["0.875rem", { lineHeight: "1.125rem", fontWeight: "400" }],
        sm2: ["0.875rem", { lineHeight: "1.125rem", fontWeight: "500" }],
        xs: ["0.75rem", { lineHeight: "0.875rem", fontWeight: "400" }],
      },
    },
  },
};
