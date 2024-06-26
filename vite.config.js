import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    resolve: {
        alias: {
            'node-fetch': 'isomorphic-fetch',
        },
    },
    base: '/pyrate-treasures/',
})
