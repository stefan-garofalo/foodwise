const dictionary = {
  common: {
    actions: {
      create: 'Create',
      edit: 'Edit',
      delete: 'Delete',
      confirm: 'Confirm',
      cancel: 'Cancel',
      submit: 'Submit',
    },
  },
  login: {
    seo: {
      title: 'Login',
      description: 'Authenticate to optimize your pantry',
    },
    title: 'The Pantry Companion',
    subtitle:
      'Your kitchen, enhanced.\nKeep track of ingredients, get expiration alerts and discover new recipes based on what you have on hand.',
    actions: {
      google: 'Sign in with Google',
    },
  },
  settings: {
    categories: {
      constants: {
        colors: {
          LAVENDER: 'Lavander',
          SKY_BLUE: 'Sky Blue',
          CORAL_PINK: 'Coral Pink',
          GOLDEN: 'Golden',
          SAGE: 'Sage',
          PLUM: 'Plum',
          AMBER: 'Amber',
          INDIGO: 'Indigo',
        },
        icons: {
          FRUIT: 'Fruit',
          VEGETABLES: 'Vegetables',
          MEAT: 'Meat',
          FISH: 'Fish',
          CARBS: 'Carbs',
          DAIRY: 'Dairy',
          SWEETS: 'Sweets',
          SNACKS: 'Snacks',
          BEVERAGES: 'Beverages',
          ALCOHOL: 'Alcohol',
          PANTRY: 'Pantry',
          CONDIMENTS: 'Condiments',
        },
      },
      seo: {
        title: 'Food Categories',
        description:
          'Organize ingredients into logical groups with customizable labels',
      },
      title: 'Ingredient tags',
      description:
        'Categories help you organize your food items into logical groups for easier inventory management.',
      form: {
        create: {
          title: 'Categories',
          description:
            'Organize ingredients into logical groups with customizable labels',
          fields: {
            name: {
              label: 'Name',
            },
            color: {
              label: 'Color',
            },
            iconUid: {
              label: 'Icon',
              placeholder: 'Select an icon',
            },
          },
        },
      },
      empty: 'No categories found',
      actions: {
        create: 'Create',
        edit: 'Edit',
        delete: 'Delete',
        deleteConfirm: 'Are you sure you want to delete this category?',
      },
      toast: {
        created: 'Category created successfully',
        updated: 'Category updated successfully',
        deleted: 'Category deleted successfully',
      },
    },
  },
  sidebar: {
    groups: {
      settings: {
        label: 'Settings',
        routes: {
          categories: 'Categories',
        },
      },
    },
  },
}

export default dictionary
