import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontSize: {
      'xxs': ['0.625rem', { // 10px
        lineHeight: '0.75rem', // 12px
      }],
      'xs': ['0.75rem', { // 12px
        lineHeight: '1rem', // 16px
      }],
      'sm': ['0.875rem', { // 14px
        lineHeight: '1.25rem', // 20px
      }],
      'base': ['1rem', { // 16px
        lineHeight: '1.5rem', // 24px
      }],
      'lg': ['1.125rem', { // 18px
        lineHeight: '1.75rem', // 28px
      }],
      'xl': ['1.25rem', { // 20px
        lineHeight: '1.75rem', // 28px
      }],
      '2xl': ['1.5rem', { // 24px
        lineHeight: '2rem', // 32px
      }],
      '3xl': ['1.875rem', { // 30px
        lineHeight: '2.25rem', // 36px
      }],
      '4xl': ['2.25rem', { // 36px
        lineHeight: '2.5rem', // 40px
      }],
      '5xl': ['3rem', { // 48px
        lineHeight: '1', // 1
      }],
      '6xl': ['3.75rem', { // 60px
        lineHeight: '1', // 1
      }],
      '7xl': ['4.5rem', { // 72px
        lineHeight: '1', // 1
      }],
      '8xl': ['6rem', { // 96px
        lineHeight: '1', // 1
      }],
      '9xl': ['8rem', { // 128px
        lineHeight: '1', // 1
      }],
    },

    fontFamily: {
      concord: ["var(--font-concord)"],
      montserrat: ["var(--font-montserrat)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          blue: "#3446CD",
          lightBlue: "#3446CD",
          orange: "#D64101",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        'green': {
          100: "#D2E5E1",
          600: "#2F9C86",
          800: "#205B4F"
        },
        'red': {
          200: "#ECD4C9",
          300: "#E1B39F",
          500: "#FF362A"
        },
        'gray': {
          100: "#F8F8F8",
          200: "#ECEDED",
          500: "#757986",
          900: "#191D28"
        },
        'pink':{
          100: "#FFE4F3",
          600: "#F6208833"
        },
        'yellow':{
          100: "#F9EFC0",
          600: "#FFE154"
        },
        'indigo':{
          100: "#E0E1FF",
          600: "#8B8EFF66"
        },
        'purple':{
          100: "#E7D5FF",
          600: "#AA57D166"
        }
      },
       animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        marqueeText: 'marqueeText 25s linear infinite',
        marquee2Text: 'marquee2Text 25s linear infinite',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        marqueeText: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2Text: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      // animation: {
      //   marquee: "marquee var(--duration) linear infinite",
      //   "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      //   "accordion-down": "accordion-down 0.2s ease-out",
      //   "accordion-up": "accordion-up 0.2s ease-out",
      //   "background-shine": "background-shine 2s linear infinite",
      //   "caret-blink": "caret-blink 1.25s ease-out infinite",
      // },
    },
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
} satisfies Config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
