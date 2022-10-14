module.exports = {
	siteMetadata: {
		title: `Dominic's Place`,
		siteUrl: `https://www.yourdomain.tld`,
		author: 'Miguel Nebot',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-layout',
			options: {
				component: `${__dirname}/src/components/layout.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: true,
				sourceMap: true,
			},
		},
	],
};
