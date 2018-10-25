import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

function variableParser({
  set = 'SET_VARS',
  extend = 'VARS_EXTEND',
} = {}) {
  const vars = []
  const regex = new RegExp(`${set}\\(\\{((.|\\s)+?)\\n\\}\\);?`)
  const regex2 = new RegExp(`${extend}\\(\\{((.|\\s)+?)\\}\\);?`)
  return {
    name: 'static-variable-parser',
    transform: code => code.replace(regex, (_, data) => {
      vars.push(data)
      return ''
    }),
    renderChunk: code => code.replace(regex2, (_, data) => `{${data},${vars.join(',\n')}\n}`),
  }
}

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
    variableParser({
      set: 'BULMA_VARS',
      extend: 'BULMA_VARS_EXTEND',
    }),
  ],
  external: ['react'],
}
