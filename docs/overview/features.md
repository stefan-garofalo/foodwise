# Core Features

## 1. Inventory Management Page (`/inventory`)

- **Food Item Tracking**

  - Add/edit/remove food items
  - Track expiration dates
  - Monitor quantities in grams
  - Mark items as finished/consumed
  - Categories for better organization
  - Leftovers management:
    - Toggle "soon to expire" state for leftover portions
    - Treated same as items within 5-day expiry window

- **Notifications**
  - Push notifications for items:
    - 5 days before expiry
    - 2 days before expiry
    - On expiry day
  - Low quantity alerts (item-specific thresholds)
  - Event-based notifications only (no daily summaries)

## 2. Recipe Management Page (`/recipes`)

- **Smart Recipe Suggestions**

  - Suggest recipes based on:
    - Items close to expiration
    - Available ingredients and their quantities
    - Course type (first/second course)
    - Number of servings
  - Filter recipes by available ingredients
  - Mark recipes as cooked (automatically update inventory)
  - Hybrid recipe system:
    - Local database of favorite recipes
    - AI-generated suggestions via "Get More Suggestions" button
    - Option to save AI recipes to local favorites

- **Recipe Management**
  - Save favorite recipes
  - Add new recipes
  - Basic recipe structure:
    - Name
    - Required ingredients with quantities
    - Course type
    - Servings
    - Estimated time

## 3. Shopping List Page (`/shopping`)

- **Dynamic Shopping List**
  - Automatically generated based on:
    - Low quantity items (using item-specific thresholds)
  - Manual addition of items
  - Mark items as purchased (automatically update inventory)
