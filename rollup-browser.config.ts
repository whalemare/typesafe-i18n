import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

const config = [
	{
		input: './src/index.ts',
		output: [
			{
				file: 'dist/index.js',
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [resolve(), typescript()],
	},
	{
		input: './src/browser.ts',
		output: [
			{
				file: 'dist/langauge.js',
				format: 'iife',
				sourcemap: true,
			},
		],
		plugins: [resolve(), typescript()],
	},
	{
		input: './src/browser.ts',
		output: [
			{
				file: 'dist/langauge.min.js',
				format: 'iife',
			},
		],
		plugins: [resolve(), typescript(), terser()],
	},
]

export default config
