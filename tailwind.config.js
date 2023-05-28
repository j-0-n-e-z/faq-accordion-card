/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				veryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
				softRed: 'hsl(14, 88%, 65%)',
				softViolet: 'hsl(273, 75%, 66%)',
				softBlue: 'hsl(240, 73%, 65%)',
				veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
				darkGrayishBlue: 'hsl(240, 6%, 50%)',
				lightGrayishBlue: 'hsl(240, 5%, 91%)',
			},
			backgroundImage: {
				mobile: 'url(/assets/images/bg-pattern-mobile.svg)',
			},
			backgroundPosition: {
				mobilePosition: '50% 70%',
			},
			fontFamily: {
				KumbhSans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
