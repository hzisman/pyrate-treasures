/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                water: {
                    50: '#f9feff',
                    100: '#c1eaee',
                    500: '#70c6be',
                    600: '#46a7a8',
                    800: '#2a797c',
                },
                brown: {
                    400: '#e9c48b',
                },
                'dark-green': '#32661b',
            }
        }
    },
    plugins: []
};
