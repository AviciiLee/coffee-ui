import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm'
  },
  plugins: [typescript(), sass()]
})
