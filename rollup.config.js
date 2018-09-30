import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'BulmaStyled',
    globals: {
      react: 'React',
    },
  },
  plugins: [
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
      ],
    }),
    commonjs({
      namedExports: {
        'stylis-rule-sheet': ['stylisRuleSheet'],
      },
    }),
  ],
  external: ['react'],
}
