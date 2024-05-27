import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/lib/esm/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                zirkel: 'zirkel',
            },
            colors:{
                yellowish: '#F99226',
                greenish: '#66A64D',
            },
            backgroundSize:{
                '140%':'140%',
                '150%':'150%',
            }
        },
    },

    plugins: [
        require('flowbite/plugin'),
        forms
    ],
};
