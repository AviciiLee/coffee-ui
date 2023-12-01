import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'
import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'packages/components/index.ts',
    output: {
      dir: 'dist/components',
      format: 'esm'
    },
    external: ['vue'],
    plugins: [
      del({ targets: 'dist/components' }),
      vue({
        include: ['**/*.vue']
      }),
      typescript({
        tsconfig: 'tsconfig.app.json'
      }),
      terser(),
      copy({
        targets: [{ src: 'packages/components/package.json', dest: 'dist/components' }]
      })
    ]
  }
]
