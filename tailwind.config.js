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
      sm: ['14px', '17.07px'],
      base: ['16px', '19.5px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    colors: {
      'red':'#FF4E50',
      'black':'#444444',
      'grey':'#CCCCCC',
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

