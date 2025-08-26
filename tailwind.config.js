/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 53s linear infinite', // fast rotation
      },
    },
  },
  plugins: [],
};
