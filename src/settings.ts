export const profile = {
	fullName: 'Zetong Zhang',
	title: 'Senior Student',
	institute: 'University of Michigan',
	author_name: 'Zetong Zhang', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'ECON + BUSINESS', description: 'Economics and Business', field: 'econ' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'zetong@umich.edu',
	linkedin: 'http://linkedin.com/in/zetong-zhang',
	wechat: 'ZachZhang105',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://www.zetongzhang.com', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
