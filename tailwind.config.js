/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["Sofia Sans", "sans-serif"],
        Kode: ["Kode Mono", "monospace"],
        Mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace']
      },
      gridTemplateColumns: {
        'custom': '3fr 2fr',
      }
    },
  },
  plugins: [],
};
