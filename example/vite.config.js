import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueNiceTailwind from 'vue-nice-tailwind';

// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [		
		VueNiceTailwind(),
		vue()
	]
})
