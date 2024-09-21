/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['10px', '12.19px'],
      ms: ['14px', '26px'],
      medium: ['18px', '24.5px'],
      mediumsmall: ['18px', '14px'],
      sm: ['14px', '17.07px'],
      base: ['16px', '19.5px'],
      lg: ['20px', '24.38px'],
      mg: ['22px', '26.82px'],
      xl: ['24px', '24.5px'],
      xxl: ['30px', '36.57px'],
      xxxl: ['52px', '63.39px'],
    },
    colors: {
      'white':'#FFFFFF',
      'daisy':'#F7F3F2',
      'red':'#FF4E50',
      'carmine':'#FF1E50',
      'black':'#444444',
      'grey':'#CCCCCC',
      'mediumgrey':'#666666',
      'darkgrey':'#999999'
    },
    extend: {},
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    }
  },
  plugins: [],
}

