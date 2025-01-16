/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        customTeal: '#35B6B4', 
        'navy': {
          900: '#1a237e'
        },
        'teal': {
          400: '#3EB8AC'
        },
        customNavy:'#22425a'
      },
    },
  },
  plugins: [],
}
