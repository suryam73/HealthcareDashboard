/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor' : '#2e3092',
        'secondaryColor' : '#d8def8',

        'backGroudColor' : '#f5f8ff',
      }
    },
  },
  plugins: [],
}
