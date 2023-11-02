/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00CCFF",
        
"secondary": "#00A6FF",
        
"accent": "#005687",
        
"neutral": "#2b3440",
        
"base-100": "#ffffff",
        
"info": "#3abff8",
        
"success": "#36d399",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
      "black", "wireframe",
    ],
  },
}

