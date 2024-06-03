import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [react()],
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	preview: {
		port: 3000,
		strictPort: true,
	},
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		origin: 'http://0.0.0.0:3000',
	},
})
