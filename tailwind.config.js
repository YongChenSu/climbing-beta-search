/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'climbing-orange': '#FF6B35',
        'climbing-blue': '#004E89',
        'climbing-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}