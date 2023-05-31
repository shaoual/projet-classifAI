/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
     theme : { colors: 
      { 'fond-site': '#09111c',
        'light-purple': '#4e3e70',
        'dark-purple': '#2d1640',
        'text-white': '#fbfbfb',
        'text-black': '#050505',
        'dark-gray': '#252525',
        'light-gray': '#e6e6e6',
        gray: '#616161' },
     fontSize: 
      { '8xs': '0.875rem',
        '7xs': '1rem',
        '6xs': '1.25rem',
        '5xs': '1.5rem',
        '4xs': '1.5625rem',
        '3xs': '2rem',
        '2xs': '2.1875rem',
        xs: '2.8125rem',
        sm: '3.125rem',
        base: '5.625rem' },
     fontFamily: { helvetica: 'Helvetica', inter: 'Inter' },
     boxShadow: { 'shadow-card': '0px 0px 23px 0px rgba(251,251,251,0.2)' },
     borderRadius: 
      { none: '0',
        xs: '0.0625rem',
        sm: '0.25rem',
        default: '0.3125rem',
        lg: '0.5rem',
        xl: '0.625rem',
        '2xl': '0.75rem',
        '3xl': '1.25rem',
        '4xl': '2.1875rem',
        '5xl': '2.5rem',
        full: '9999px' } },
         
    extend: {}
  },
  plugins: []
}
