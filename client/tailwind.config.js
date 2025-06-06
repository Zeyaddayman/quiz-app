/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "dark-blue-color": "var(--dark-blue-color)",
        "soft-while-color": "var(--soft-while-color)"
      }
    },
  },
  plugins: [],
}
