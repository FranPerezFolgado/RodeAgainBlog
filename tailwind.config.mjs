/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily:{
			skyscappers: ["Skyscappers", "cursive"],
      		blackdemo: ["Boiling-BlackDemo", "cursive"],
      		commitmono: ["CommitMono-Regular-400", "monospace"],
		}, 
		extend: {},
	},
	darkMode: "media",
	plugins: [
		require('@tailwindcss/typography')
	],	
}
 