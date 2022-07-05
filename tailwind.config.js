/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "dark-cyan": "#011F26",
        "medium-pink": "#F2668B",
        "blue-lagoon": "#025E73",
        "secondary-dark-cyan": "#026873",
        "hobgoblin": "#03A688",
      }
    },
  },
  plugins: [],
}
