1. Explore all the ways of writing css?
A. 	Inline CSS
	External CSS
	Installing the Framework
	SCSS
--------------------------------------------------------
2.How do we configure Tailwind?
A.	-By using CDN Link
		<script src="https://cdn.tailwindcss.com"></script>
	-By installing it with the help of parcel
	** npm install -D tailwindcss postcss
	** npx tailwindcss init  [an auto-generated tailwindConfig.CSS is created]
	** Create a .postcssrc file add below lines
			{
	"plugins": {
		"tailwindcss": {}
	}
	}

	In tailwind.config.js file.below lines are seen
		/** @type {import('tailwindcss').Config} */
	module.exports = {
	content: [
		"./src/**/*.{html,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	}

	** Lastly, index.css add  the   below  lines
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

----------------------------------------------------

3. In tailwind.config.css what does  all the key mean  content, theme,  extend  and  plugins?
A.  -content: tells us the tyye of file extension in project
   -theme:  define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more[responsiveness]
   -extend: to add additional larger breakpoint is using "extend" [to override screen size]
   -plugins: Plugins let you register new styles for Tailwind to inject into the user’s stylesheet using JavaScript instead of CSS
-----------------------------------------------------------

4. Why do we have .postcssrc file?
A. enable the tailwindcss plugin