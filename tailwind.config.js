module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      width: {
        '1/8' : '12.5%',
        '150' : '150px',
        '300' : '300px',
        '450' : '450px',
        'min-content' : 'min-content'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'Righteous': ['Righteous', 'cursive'],
        'Muli':['Muli', 'sans-serif']
      },
      height: {
        '800' : '800px',
        '400' : '400px'
      },
      backgroundColor: {
        'orange': 'orange',
        'burnt-orange' : '#CC5500',
        'tangelo' : '#EC7625',
        'steel-blue': '#4682B4',
        '.1': 'rgba(0,0,0,.1)',
        '.2': 'rgba(0,0,0,.2)',
        '.3': 'rgba(0,0,0,.3)',
        '.4': 'rgba(0,0,0,.4)',
        '.5': 'rgba(0,0,0,.5)',
        '.6': 'rgba(0,0,0,.6)',
        '.7': 'rgba(0,0,0,.7)',
        '.8': 'rgba(0,0,0,.8)',
        '.9': 'rgba(0,0,0,.9)'
      },
      borderColor: {
        'tangelo': '#EC7625'
      }
    },
  },
   variants: {},
   plugins: [],
 }