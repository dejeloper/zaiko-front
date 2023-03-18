import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './src/css/tailwind.config.js'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}