/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                'picton-blue': '#03A9F4',
                picton: {
                    '50': '#eff9ff',
                    '100': '#def2ff',
                    '200': '#b7e7ff',
                    '300': '#77d5ff',
                    '400': '#2ec1ff',
                    '500': '#03a9f4',
                    '600': '#0087d1',
                    '700': '#006ba9',
                    '800': '#015b8b',
                    '900': '#074b73',
                    '950': '#05304c',
                },
                'info': '#A5D6A7',
                'success': '#76FF03',
                'warning': '#FF6E40',
                'error': '#FF1744',
                'light': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#000000',
                },
                'dark': {
                    '950': '#f6f6f6',
                    '900': '#e7e7e7',
                    '800': '#d1d1d1',
                    '700': '#b0b0b0',
                    '600': '#888888',
                    '500': '#6d6d6d',
                    '400': '#5d5d5d',
                    '300': '#4f4f4f',
                    '200': '#454545',
                    '100': '#3d3d3d',
                    '50': '#000000',
                },
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'spin-fast': 'spin 0.5s linear infinite',
            }
        },
    },
    plugins: [],
}