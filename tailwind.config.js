// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          'light-cyan': 'hsl(193, 38%, 86%)',
          'neon-cyan': 'hsl(150, 100%, 66%)',
        },
        neutral: {
          'grayish-blue': 'hsl(217, 19%, 38%)',
          'dark-grayish-blue': 'hsl(217, 19%, 24%)',
          'dark-blue': 'hsl(218, 23%, 16%)',
        },
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1440px',
      },
      spacing: {
        dice: 'calc(50% - 32px)',
      },
      boxShadow: {
        btn: '0px 0px 32px 0px hsl(150, 100%, 66%)',
      },
      fontSize: {
        quote: '1.75rem',
      },
    },
  },
  plugins: [],
};
