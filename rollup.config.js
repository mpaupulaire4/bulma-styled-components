import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import sourcemaps from 'rollup-plugin-sourcemaps'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  sourceMap: true,
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
