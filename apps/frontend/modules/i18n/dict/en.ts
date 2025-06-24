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
				title: 'Food Categories',
				description:
					'Organize ingredients into logical groups with customizable labels'
			},
			title: 'Ingredient tags',
			description:
				'Categories help you organize your food items into logical groups for easier inventory management.',
			form: {
				name: 'Category Name',
				namePlaceholder: 'Enter category name...',
				color: 'Color',
				colorHelp: 'Choose a color to visually identify this category',
				icon: 'Icon',
				iconHelp: 'Select an icon to represent this category'
			},
			empty: 'No categories found',
			actions: {
				create: 'Create',
				edit: 'Edit',
				delete: 'Delete',
				deleteConfirm: 'Are you sure you want to delete this category?'
			},
			toast: {
				created: 'Category created successfully',
				updated: 'Category updated successfully',
				deleted: 'Category deleted successfully'
			}
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
