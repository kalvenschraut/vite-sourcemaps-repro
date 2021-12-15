import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
	plugins: [
		Vue({
			reactivityTransform: true,
			template: { transformAssetUrls }
		}),
		quasar()
	]
});
