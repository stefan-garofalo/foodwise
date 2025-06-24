import { title } from 'process'

const dictionary = {
	login: {
		seo: {
			title: 'Login',
			description: 'Authenticate to optimize your pantry'
		},
		title: 'The Pantry Companion',
		subtitle:
			'Your kitchen, enhanced.\nKeep track of ingredients, get expiration alerts and discover new recipes based on what you have on hand.',
		actions: {
			google: 'Sign in with Google'
		}
	},
	settings: {
		categories: {
			seo: {
				title: 'Categories',
				description: 'Manage food labels'
			},
			title: 'Food categories'
		}
	},
	sidebar: {
		groups: {
			settings: {
				label: 'Settings',
				routes: {
					categories: 'Categories'
				}
			}
		}
	}
}

export default dictionary
