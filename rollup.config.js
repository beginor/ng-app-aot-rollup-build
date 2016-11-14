import nodeResolve from 'rollup-plugin-node-resolve';
import alias from 'rollup-plugin-alias';

export default {
    entry: 'app/main-aot.js',
    format: 'cjs',
    plugins: [
        alias({ rxjs: __dirname + '/node_modules/rxjs-es' }),
        nodeResolve({ jsnext: true, main: true })
    ]
};
