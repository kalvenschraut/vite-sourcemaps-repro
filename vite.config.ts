import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
	server: {
		host: true,
		port: 8080,
		hmr: {
			path: '/vite/ws',
			clientPort: '443'
		}
	},
	plugins: [
		Vue({
			reactivityTransform: true,
			template: { transformAssetUrls }
		}),
		quasar()
	]
});
