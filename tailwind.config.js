/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        colors: {
            'white': '#ffffff',
            'black': '#000000',
            'transparent': 'transparent',
            'marine-blue': '#02295a',
            'purplish-blue': '#473dff',
            'pastel-blue': '#adbeff',
            'light-blue': '#bfe2fd',
            'strawberry-red': '#ed3548',
            'gray-1': '#9699ab',
            'gray-2': '#d6d9e6',
            'gray-3': '#f0f6ff',
            'gray-4': '#fafbff',
        },
        fontSize: {
            xs: 'clamp(0.75rem, 0.7059859154929577rem + 0.18779342723004694vw, 0.875rem)', // 12-14
            sm: 'clamp(0.875rem, 0.8309859154929577rem + 0.18779342723004694vw, 1rem)', // 14-16
            md: 'clamp(1rem, 0.9559859154929577rem + 0.18779342723004694vw, 1.125rem)', // 16-18
            lg: 'clamp(1.5rem, 1.3679577464788732rem + 0.5633802816901408vw, 1.875rem)', // 24-30
        },
        fontWeight: {
            normal: "400",
            medium: "500",
            bold: "700",
        },
        lineHeight: {
            '1': '1',
            '1.2': '1.2',
        },
        screens: {
            'm-xxxs': {max: '12.5em'}, // 200px
            'm-xxs': {max: '15.625em'}, // 250px
            'm-xs': {max: '18.75em'}, // 300px
            'm-s': {max: '21.875em'}, // 350px
            'm-md': {max: '23.4375em'}, // 375px
            'sm': '29.6875em', // 475px
            'md': '48em', // 768px
            'lg': '64em', // 1024px
        },
        extend: {},
    },
    plugins: [],
};
