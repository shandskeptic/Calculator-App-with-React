/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					200: '#30333f',
					300: '#272831',
					400: '#21222b',
					600: '#1b1a1f',
				},
				secondary: {
					200: '#4157a4',
					400: '#874f85',
				},
			},
		},
	},
	plugins: [],
};
