import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#C5521A',
                secondary: '#D4632F',
                'warm-white': '#F5F2EE',
                charcoal: '#1F1F1F',
                'warm-border': '#E5E0D8',
                muted: '#6B6B6B',
                'muted-light': '#A09890',
            },
            fontFamily: {
                heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
                body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                '8xl': '88rem',
            },
        },
    },
    plugins: [],
};

export default config;
