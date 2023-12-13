/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkCompletedGreen': '#A5F39E',
        'darkProgressYellow': '#F2D191',
        'darkTodoRed': '#F285C9',
        'darkFinishBlue': '#B6CFF2',
        'lightCompletedGreen': '#55E148',
        'lightProgressYellow': '#F2D191',
        'lightTodoRed': '#F285C9',
        'lightFinishBlue': '#87B3F0'
      }
    },
  },
  plugins: [],
}

