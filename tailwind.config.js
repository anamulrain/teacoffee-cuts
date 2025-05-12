/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF8F6',
          100: '#F5F0E9',
          200: '#E8DDCF',
          300: '#D5BFA6',
          400: '#C1A080',
          500: '#A57F59',
          600: '#8B6544',
          700: '#6D4E34',
          800: '#553C29',
          900: '#3D2C1E',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FFF9ED',
          200: '#FFF3D6',
          300: '#FFE8B8',
          400: '#FFD485',
          500: '#FFBF52',
        },
        accent: {
          50: '#F8F4FF',
          100: '#E9DFFF',
          200: '#D4BFFE',
          300: '#B794FD',
          400: '#9C69FB',
          500: '#8045F5',
          600: '#6729DF',
          700: '#521BB8',
          800: '#3C148A',
          900: '#2C1066',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};