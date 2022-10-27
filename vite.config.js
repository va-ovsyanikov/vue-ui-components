import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		//для npm пакета  ----
		// lib: {
		// 	entry: path.resolve(__dirname, 'src/index.js'),
		// 	name: 'dme-web-ui',
		// 	fileName: (format) => `dme-web-ui.${format}.js`,
		// },
		// rollupOptions: {
		// 	external: ['vue'],
		// 	output: {
		// 		globals: {
		// 			vue: 'vue'
		// 		}
		// 	}
		// }
		//---------------------------
	},
	publicDir:'./src/fonts', //добавляет файлы в папку dist  при сборке
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	// для docker vite
	// server: {
	// 	host: '0.0.0.0',
	// 	watch: {
	// 		usePolling: true
	// 	}
	// }
})
