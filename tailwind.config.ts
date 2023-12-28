import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Georgia", "Times New Roman", "serif"],
      },
      // Extend the screens with a new custom breakpoint for 1620px
      screens: {
        "3xl": "1620px",
        "4xl": "1920px",
      },
      container: {
        center: true,
        padding: {
          "DEFAULT": "0.5rem",
          "sm": "0.5rem",
          "lg": "0.5rem",
          "xl": "0.5rem",
          "2xl": "0.5rem",
          "3xl": "0.5rem",
          "4xl": "0.5rem",
        },
      },
      maxWidth: {
        "3xl": "1620px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light",
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "du-", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
export default config
