/*
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#49627d',
      secondary: '#627b98',
      gray: '#4a5767',
      'dark-gray': '#131b26',
      white: '#ffffff',
      red: '#f8000f',
      green: '#009d23'
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
