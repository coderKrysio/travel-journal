/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      width: {
        '128': '32rem',
      }
    }
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

