/** @type {import('next').NextConfig} */
/** @type {import('tailwindcss').Config} */

const nextConfig = {
    content: [
        // If using the src directory, add:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module

    ],
    theme: {
        extend: {},
    },
    plugins: [],
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'www.weatherbit.io',
                port:'',
                pathname: '/static/img/icons/**'
            },
            {
                protocol: 'http',
                hostname: 'www.weatherbit.io',
                port:'',
                pathname: '/static/img/icons/**'
            },
        ],
        domains: ["www.weatherbit.io/static/img/icons/**"],
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ['@tremor/react'],
    },
}

module.exports = nextConfig