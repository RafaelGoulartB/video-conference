/*
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'bg-color-s': '#090e15',
      'bg-color-e': '#4e5760',
      'bg-chat-color-s': '#3e4c5b',
      'bg-chat-color-e': '#c3cdd6',
      primary: '#49627d',
      'primary-darker': '#3a5671',
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
      },
      height: {
        'room-height': '96%'
      }
    }
  },
  plugins: []
}
