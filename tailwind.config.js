/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "var(--primary-lighter)",
          light: "var(--primary-light)",
          DEFAULT: "var(--primary-default)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
        },
        dark: "var(--text-dark)",
        bgbase: "var(--bgbase)",
        clay: "var(--clay)",
      },
      boxShadow: {
        'clay-base': 'var(--shadow-clay-base)',
        'clay-hover': 'var(--shadow-clay-hover)',
        'clay-active': 'var(--shadow-clay-active)',
        'clay-btn': 'var(--shadow-clay-btn)',
        'clay-primary': 'var(--shadow-clay-primary)',
      },
      borderRadius: {
        'clay': '1.5rem',
        'clay-sm': '1rem',
      }
    },
  },
  plugins: [],
}
