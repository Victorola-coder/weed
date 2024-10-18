/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "weed-primary": {
          100: "#00500D",
          DEFAULT: "#578461",
        },
        "weed-blue": {
          DEFAULT: '#0038FF'
        },
        "weed-gray": {
          DEFAULT: "#F6FEFF"
        },
        "weed-black": {
          DEFAULT: '#0F0F0F'
        },
        "weed-profile-add": {
          DEFAULT: "#7C97C280"
        },
        "weed-red": {
          DEFAULT: "#C00000"
        },
        "weed-sendchat": {
          DEFAULT: "#73B0DD"
        },
        "weed-recievechat": {
          DEFAULT: "#ADADAD"
        },
        "weed-online": {
          DEFAULT: "#60D617"
        },
        "weed-name": {
          DEFAULT: "#104F1EB2"
        },
        "weed-border": {
          DEFAULT: "#00000033"
        },
      },
      fontFamily: {
        italianno: ['Italianno', 'sans-serif'],
        inder: ['Inder', 'sans-serif'],
      },
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
        'extra-bold': '900',
        black: '900'
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '2.5xl': '1.5625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      spacing: {
        'weed-20.6': '20.625rem',
        'weed-18': '18.75rem',
        'weed-12.5': '12.5rem',
        'weed-14.7': '14.7rem',
        'weed-9': '9.375rem',
        'weed-8': '8.5rem',
        'weed-3': '3.5625rem',
        'weed-3.0': '3rem',
        'weed-3.4': '3.4375rem',
        'weed-3.1': '3.125rem',
        'weed-4': '4.4375rem',
        'weed-1': '1.124rem',
        'weed-1.5': '1.5rem',
        'weed-1.6': '1.625rem',
        'weed-1.5': '1.5625rem',
        'weed-1.2': '1.225rem',
        'weed-1.3': '1.328125rem',
        'weed-6.8': '6.875rem',
        'weed-10.3': '10.3125rem',
        'weed-13.7': '13.75rem',
        'weed-17.1': '17.1875rem',
        'weed-15.5': '15.5625rem',
        'weed-9.7': '9.75rem',
        'weed-14.8': '14.875rem',
        'weed-4.8': '4.875rem',
        'weed-6.6': '6.6875rem',
        'weed-1.0': '1.0625rem',
        'weed-2.5': '2.5rem',
        'weed-2.6': '2.625rem',
        'weed-3.7': '3.75rem',
        'weed-15.8': '15.875rem',
        'weed-2.1': '2.125rem',
        'weed-5': '5.01rem',
        'weed-6': '6rem',
        'weed-0.3': '0.339375rem',
        'weed-5.8': '5.875rem',
        'weed-5.6': '5.625rem',
        'weed-5.3': '5.3125rem',
        'weed-18.2': '18.25rem',
        'weed-6.2': '6.25rem',
        'weed-10.8': '10.8125rem',
        'weed-15.6': '15.625rem',
        'weed-4.3': '4.374rem',
        'weed-2.8': '2.875rem',
        'weed-17.5': '17.5rem',
        'weed-11.3': '11.375rem',
        'weed-22.5': '22.5625rem',
        'weed-25': '25.0625rem',
        'weed-14.5': '14.5625rem',
        'weed-15.1': '15.1875rem'
      },
    },
  },
  plugins: [],
};
