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
      },
      container: {
        center: true,
        padding: {
          "DEFAULT": "0.5rem",
          "sm": "0.5rem",
          "lg": "0.5rem",
          "xl": "0rem",
          "2xl": "0rem",
          "3xl": "0rem",
        },
      },
      maxWidth: {
        "3xl": "1620px",
      },
    },
  },
  plugins: [],
}
export default config
