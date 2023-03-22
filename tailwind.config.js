/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,ts,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
    // https://www.npmjs.com/package/@tailwindcss/line-clamp
  ],
}
