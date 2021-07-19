
const { babel } = require('@rollup/plugin-babel')
const postcss = require('rollup-plugin-postcss')
const globals = require('rollup-plugin-external-globals')
const resolve = require('rollup-plugin-node-resolve')
const livereload = require('rollup-plugin-livereload')

const absolutePath = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  'babelHelpers': 'bundled',
}

function processLess(context) {
  return new Promise(( resolve, reject ) => {
    less.render(context, {}).then(function(output) {
      if( output && output.css ) {
        resolve(output.css);
      } else {
        reject({})
      }
    },
    function(err) {
      reject(err)
    });

  })
}

const postcssConfig = postcss({
  plugins: [],
  process: processLess
})

export default {
  input: 'src/main.js',
  output: {
    file: './dist/bundle.js',
    format: 'iife'
  }, 
  plugins: [
    postcssConfig,
    // nodeResolve(),
    // commonjs(),
    resolve(),
    babel(babelOptions),
    globals({
      'react': 'React',
      'react-dom': 'ReactDOM'
    }),
    livereload()
  ],
  external: [
    'react-dom',
    'react',
  ]
}