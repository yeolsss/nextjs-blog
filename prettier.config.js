const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
	...styleguide,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
	trailingComma: 'all',
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	printWidth: 80,
	arrowParens: 'always',
};
