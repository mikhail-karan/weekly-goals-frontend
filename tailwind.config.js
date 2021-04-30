module.exports = {
  purge: [
    // './src/**/*.html',
    // './src/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Francois', 'ui-monospace', 'SFMono-Regular'],
        'headings': ['Francois'],
        'body': ['Open Sans']
      },
      colors: {
        backgroundColor: '#1A2634',
        // backgroundColor: '#2E3A48',
        cardColor: '#2E3A48',
        // cardColor: '#1A2634',
        primary: '#2E3A48',
        secondaryColor: '#7B78FF',
        hattBlue: '#4aa1d9'
      },
      spacing: {
        '213': '53.25rem',
        '11': '2.75rem',
        '14': '3.5rem',
        '18': '4.5rem',
        '28': '7rem',
        '200': '50rem',
        '160': '40rem',
        '250': '62.5rem',
        '70': '17.5rem',
        '80': '20rem',
        '180': '45rem',
        '120': '30rem',
        '180': '45rem',
        '140': '35rem',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      inset: {
        '0': 0,
        auto: 'auto',
        '1/4': '25%',
        '-40': '-10rem',
      },
       // References used:
      //  https://gist.github.com/cvan/47455a4f8aaa22e73e54253954635dc5
      screens: {
        xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        md: { min: '898px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1159px' }, // Desktop wide.
        xxl: { min: '1359px' }, // Desktop widescreen
      },
      boxShadow: {
        shadowGray: '3px 3px 8px rgba(102, 102, 102)',
        primary3: '5px 10px 8px rgba(51, 104, 140)',
        primary3Light: '3px 3px 8px rgba(51, 104, 140)',
        primary3Inner: '0 10px 10px rgba(51, 104, 140) inset',
        shadowBrownInner: 'inset 0px 0px 10px 4px rgba(76, 57, 44)',
        shadowBrownOutter: '0 0 15px rgba(76, 57, 44)',
        shadowBrown: 'inset 0 0 0 5px rgba(76, 57, 44, 0.2)',
        shadowBrownInner: 'inset 0px 0px 10px 4px rgba(76, 57, 44)',
        shadowBrownOutter: '0 0 15px rgba(76, 57, 44)',
      },
      zIndex: {
        '-1': "-1",
        '100': '100',
        '110': '110',
        '1000': '1000',
        '1500' : '1500',
        '2000'  : '2000',
      },
      borderWidth: {
        '140': '140px',
        '80': '80px',
        '260': '260px',
        '100': '100px',
      },
      borderRadius: {
        'xlg': '15px',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      minHeight: {
        '12': '3rem',
      },
      transformOrigin: {
        "0": "0%"
      }



    },
  },
  variants: {
    display: ["group-hover", "responsive"]
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '1300px',
          },
        }
      })
    }
  ],
  corePlugins: {
    container: false
  },
};
