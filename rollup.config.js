import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from "rollup-plugin-uglify";

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/supa.common.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
},{
  input: 'src/index.js',
  output: {
    file: 'dist/supa.js',
    format: 'umd',
    name: 'supa'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
},{
  input: 'src/index.js',
  output: {
    file: 'dist/supa.min.js',
    format: 'umd',
    name: 'supa'
  },
  plugins: [
    resolve(),
    uglify(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
},{
  input: 'src/index.js',
  output: {
    file: 'dist/supa.esm.js',
    format: 'esm'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}];