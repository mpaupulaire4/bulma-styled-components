import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'BulmaStyled',
    globals: {
      react: 'React',
      'styled-components': 'styled',
    },
    sourceMap: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      plugins: [
        'external-helpers',
      ],
    }),
    sourcemaps(),
  ],
  external: ['react', 'styled-components'],
}
