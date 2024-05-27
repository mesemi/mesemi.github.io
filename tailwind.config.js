/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./**/*.{html,js}", "node_modules/preline/dist/*.js"],
	theme: {
		extend: {
			colors: {
				'textbg': '#3D3D3D',
				'mybg': '#0D0D0D',
			},
			dropShadow: {
				glow: [
				  "0 0px 20px rgba(255,255, 255, 0.4)",
				  "0 0px 65px rgba(255, 255,255, 0.3)"
				],
				glowpink: [
					"0 0px 20px rgba(254, 205, 211, .4)",
					"0 0px 65px rgba(254, 205, 211, .3)"
				]
			  }
		},
		
	},
	plugins: [require("preline/plugin")],
};
