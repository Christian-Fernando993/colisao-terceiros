/** @type {import ('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      fontFamily: {
        bromny: ['var(--font-bromny)']
      },
      colors:{
        'loovi-blue': '#5A78FF',
        'type-blue': '#514277',
        'dark-blue': '#3D3245',
        'branco': '#F4F4F1',
        'violet': '#9072FD',
        'dusty-violet': '#6759A8',
        'light-violet' : '#54DFF8',
        'turquooise': '#45FDD6'
      },
      maxWidth: {
        grid: '77.5rem',
      },
    },
    screens: {
      '@tablet': '640px',
      '@laptop': '1024px',
      '@desktop': '1280px',
    },
  },
  plugins: [],
}