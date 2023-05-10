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
experimental: {
appDir: true,
serverComponentsExternalPackages: ['@tremor/react'],
},
}

module.exports = nextConfig
