/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
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
                'error': '#FF1744'
            },
        },
    },
    plugins: [],
}