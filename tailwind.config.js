const { themeReplacements } = require('./tailwind-theme-replacements')

module.exports = {
  content: [
    './pages/**/*.{js,scss,css,ts,tsx,jsx}',
    './components/**/*.{js,scss,css,ts,tsx,jsx}',
    './features/**/*.{js,scss,css,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...themeReplacements()
      },
    }
  }
}
