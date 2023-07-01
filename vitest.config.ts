import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov', 'clover']
		},
		testTimeout: 10000
	},
	esbuild: {
		target: 'es2022'
	}
});
