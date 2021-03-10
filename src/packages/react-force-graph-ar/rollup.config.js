import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import dts from 'rollup-plugin-dts';
import { name, homepage, version, dependencies, peerDependencies } from './package.json';

const umdConf = {
  format: 'umd',
  name: 'ForceGraphAR',
  globals: { react: 'React' },
  banner: `// Version ${version} ${name} - ${homepage}`
};

export default [
  {
    external: ['react'],
    input: 'index.js',
    output: [
      {
        ...umdConf,
        file: `dist/${name}.js`,
        sourcemap: true
      },
      { // minify
        ...umdConf,
        file: `dist/${name}.min.js`,
        plugins: [terser({
          output: { comments: '/Version/' }
        })]
      }
    ],
    plugins: [
      replace({ 'process.env.NODE_ENV': JSON.stringify('development') }), // To fool React in the browser
      resolve(),
      commonJs(),
      babel({ exclude: 'node_modules/**' })
    ]
  },
  { // commonJs and ES modules
    input: 'index.js',
    output: [
      {
        format: 'cjs',
        file: `dist/${name}.common.js`,
        exports: 'auto'
      },
      {
        format: 'es',
        file: `dist/${name}.module.js`
      }
    ],
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    plugins: [
      babel()
    ]
  },
  { // expose TS declarations
    input: 'index.d.ts',
    output: [{
      file: `dist/${name}.d.ts`,
      format: 'es'
    }],
    plugins: [dts()]
  }
];