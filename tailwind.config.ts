import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: 'hsl(6, 100%, 80%)',
          dark: 'hsl(335, 100%, 65%)',
        },
        neutral: {
          paleBlue: 'hsl(243, 100%, 93%)',
          grayishBlue: 'hsl(229, 7%, 55%)',
          darkBlue: 'hsl(228, 56%, 26%)',
          veryDarkBlue: 'hsl(229, 57%, 11%)',
        },
      },

      fontFamily:{
        raleway : ['Raleway', 'sans-serif'],
      },
      backgroundImage:{
        mobile: "url('../../public/sources/images/bg-mobile.png')",
        desktop: "url('../../public/sources/images/bg-desktop.png')",
        slid : 'linear-gradient(90deg,hsl(6, 100%, 80%) 0%,hsl(335, 100%, 65%) 70%);'
      },
      padding:{
        sm:'1.5rem',
        md:'3.5rem',
        lg:'6rem',
        xl:'8rem',
      },

    },
  },
  plugins: [],
} satisfies Config;
