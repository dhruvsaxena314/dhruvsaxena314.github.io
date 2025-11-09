module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { accent: "#00ff8a" },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg,#021326 0%,#04293a 40%,#001f2d 100%)"
      }
    }
  },
  plugins: []
};
