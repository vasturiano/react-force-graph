import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { name, homepage, version } from './package.json';

export default {
  external: ['react'],
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      name: 'ForceGraph',
      file: `dist/${name}.js`,
      globals: { react: 'React' },
      sourcemap: true,
      banner: `// Version ${version} ${name} - ${homepage}`
    }
  ],
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonJs()
  ]
};