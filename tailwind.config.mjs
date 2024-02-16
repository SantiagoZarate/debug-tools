/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(240px, 1fr))"
      }
    },
  },
  plugins: [],
}
