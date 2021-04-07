module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, 
    theme: {
      fontFamily: {
        'sans': ['Inter', 'Montserrat'],
        'serif': ['Georgia'],
        'mono': ['Dank\\ Mono'],
        'body': ['Inter'],
      },
      extend: {
        spacing: {
          '112': '28rem',
          '128': '32rem'
        },
        animation: {
          'spin-slow': 'spin 10s linear infinite',
        }
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [
    ],
  }