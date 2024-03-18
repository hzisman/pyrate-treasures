/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            spacing: {
                cellsize: 'var(--cell-size)',
            },
            lineHeight: {
                cellsize: 'var(--cell-size)',
            },
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
                'black-green': '#0c3839',
            },
            keyframes: {
                shake: {
                    '100%, from': { transform: 'translateX(0)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
                    '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
                },
                'scale-fade': {
                    '0%': { opacity: 1, transform: 'scale(0)' },
                    // '1%': { opacity: 1, },
                    '50%': { opacity: 0.8 },
                    '100%': { opacity: 0 },
                },
                'blow-out': {
                    '0%': { transform: 'rotate(0deg) scale(1)' },
                    '20%': { transform: 'rotate(10deg) scale(1.5)' },
                    '100%': { transform: 'rotate(400deg) scale(0)' },
                },
                fade: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
            },
            animation: {
                shake: 'shake 1s both forwards',
                'scale-fade': 'scale-fade 1s forwards',
                'blow-out': 'blow-out 1s forwards',
                'fade-out': 'fade 1s forwards',
            }
        }
    },
    plugins: []
};
