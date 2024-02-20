/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#feba57',
        'blue':'#588aa3',
        'gray':'#00142b'
      },
    },
  },
  plugins: [],
}