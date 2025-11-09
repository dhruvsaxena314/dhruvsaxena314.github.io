module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // green accent approximating the reference
        emeraldish: '#00ff8a'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg,#021326 0%, #04293a 40%, #001f2d 100%)'
      }
    }
  },
  plugins: []
}
