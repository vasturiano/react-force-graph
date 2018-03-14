import babel from 'rollup-plugin-babel';
import { name, dependencies, peerDependencies } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: `dist/${name}.common.js`
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
};