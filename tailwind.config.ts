import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        cursive: ["var(--font-Satisfy)"],
      },
      fontSize: {
        "3.5xl": "2rem", /* 32px */
        "5.5xl": "3.5rem",
      },
      colors: {
        white: "#FFFFFF",
        dark: "#07001C",
        black: "#000000",

        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        Sky: {
          50: '#ebffff',
          100: '#cdfdff',
          200: '#a1f8ff',
          300: '#44edff',
          400: '#1addf6',
          500: '#00c0dc',
          600: '#0199b9',
          700: '#097a95',
          800: '#116279',
          900: '#135166',
          950: '#07001c',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          600: '#ca8a04',
          500: '#eab308',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        'fire-bush': {
          50: '#fdf7ed',
          100: '#f8e9cd',
          200: '#f1d096',
          300: '#eab25f',
          400: '#e5993b',
          500: '#dd7923',
          600: '#c3591c',
          700: '#a23e1b',
          800: '#84321c',
          900: '#6d2a1a',
          950: '#3e130a',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        Slate: {
          50: '#F5F6F6',
          100: '#E5E7E8',
          200: '#dededf',
          300: '#bababb',
          400: '#989899',
          500: '#7a7a7a',
          600: '#54595F',
          700: '#4b4e53',
          800: '#3a3c3f',
          900: '#242628',
          950: '#07001c',
        },
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "animar-cursor": {
          "0%": {
            color: "#0199b9",
          },
          "100%": {
            color: "#000",
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: '0',
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounceup": {
          "0%": {
            opacity: '0',
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: '0.5',
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: '0.7',
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: '1',
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "animar-cursor": "animar-cursor .8s infinite",
        "fade-in-up": 'fade-in-up 1s ease-in-out 0.25s 1',
        "fade-in-bounceup": 'fade-in-bounceup 1s ease-in-out 0.25s 1',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
