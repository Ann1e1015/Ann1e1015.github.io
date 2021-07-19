const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const { processLess } = require('./less');

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

const modList = [
  'footer/index',
  'image/index',
  'item/index',
  'list/index',
  'list-three/index',
  'title/index',
]

function createESMConfig(name, noStyleInject) {
  const postcssConfig = noStyleInject ? postcss({
    plugins: [],
    process: processLess,
    extract: true,
    extract: absolutePath(`dist/react/${name}.es.css`),
  }) : postcss({
    plugins: [],
    process: processLess,
  })
  return {
    input: absolutePath(`modules/react/${name}.jsx`),
    output: {
      file: absolutePath(`dist/react/${name}.es${noStyleInject ? '-nocss' : ''}.js`),
      format: 'es',
    }, 
    plugins: [
      postcssConfig,
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
    ],
    external: [
      'react-dom',
      'react',
    ],
  };
}

function createAMDConfig(name, noStyleInject) {
  const postcssConfig = noStyleInject ? postcss({
    plugins: [],
    process: processLess,
    extract: true,
    extract: absolutePath(`dist/react/${name}.amd.css`),
  }) : postcss({
    plugins: [],
    process: processLess,
  })

  return {
    input: absolutePath(`modules/react/${name}.jsx`),
    output: {
      name: `react/${name}`,
      file: absolutePath(`dist/react/${name}.amd${noStyleInject ? '-nocss' : ''}.js`),
      format: 'amd',
    }, 
    plugins: [
      postcssConfig,
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
    ],
    external: [
      'react-dom',
      'react',
    ],
  }
}

function createCJSConfig(name) {
  return {
    input: absolutePath(`modules/react/${name}.jsx`),
    output: {
      file: absolutePath(`dist/react/${name}.cjs.js`),
      format: 'cjs',
      exports: 'default'
    }, 
    plugins: [
      postcss({
        plugins: [],
        process: processLess,
        extract: true,
        extract: absolutePath(`dist/react/${name}.css`),
      }),
      nodeResolve(),
      commonjs(),
      babel(babelOptions),
    ],
    external: [
      'react-dom',
      'react',
    ],
  }
}

const configList = [];
modList.forEach((name) => {
  configList.push(createESMConfig(name));
  configList.push(createESMConfig(name, true));
  configList.push(createAMDConfig(name));
  configList.push(createAMDConfig(name, true));
  configList.push(createCJSConfig(name))
})

module.exports = configList;