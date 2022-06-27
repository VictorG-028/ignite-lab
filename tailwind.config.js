/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // todos arquivos dentro de ./src que terminam com
    // *.tsx vão receber estilização do tailwind
    './src/**/*.tsx'
  ],
  theme: {
    // O atributo extend permite substituir atributos no tailwind css
    // Os atributos extendidos formam um mapa do atributo antigo para o novo

    // Nesse caso abaixo, as cores existentes estão sendo substituidas por outras cores
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur_bg.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
