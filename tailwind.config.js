/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/src/Assets/banner.jpg')",
        // Add more background images here if needed
      },
    },
  },
  plugins: [require("daisyui")],
}

