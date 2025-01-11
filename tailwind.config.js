/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: "942px", // Add a custom breakpoint
      },
      fontFamily: {
        euclid: ["EuclidCircular", "sans-serif"], 
      },
      boxShadow: {
        'all-sides': '0px 0px 10px 5px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

