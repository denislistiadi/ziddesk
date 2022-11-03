/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans']
      },
      colors: {
        primary: '#47ADE7',
        error: '#F63A3A',
        ticket: '#F5BA46'
      },
      boxShadow: {
        'compain-item': '0px 2px 15px rgba(0, 0, 0, 0.08)',
        'list-item' : '0px 4px 15px rgba(0, 0, 0, 0.08)',
        'top-only': '0 -5px 5px -1px rgba(0, 0, 0, 0.08)',
        'ticket-list': '0px 4px 15px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
