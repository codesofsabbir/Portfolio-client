/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./protected/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        activeLight: '#c73d3d',
        activeDark: '#FFC107',
      },
      backgroundImage: {
        'light-mode-gradient': 'linear-gradient(159deg, rgba( 188, 210, 208, .98) 0%, rgba( 188, 210, 208, .98) 100%)',
        'dark-mode-gradient': 'linear-gradient(159deg, rgba(35, 35, 45, 0.98) 0%, rgba(37, 37, 50, 0.98) 100%)',
      },
    },
  },
  plugins: [],
}
