# Inventory Management

The inventory management system tracks food items (ingredients) and their organization through categories. It enables tracking quantities, expiration dates, and alerts for low stock or expiring items.

## Data Models

### Categories

Categories help organize ingredients into logical groups.

```typescript
categories = sqliteTable("categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  uid: text("name").notNull().unique(),
  createdAt: timestamp,
  updatedAt: timestamp,
});
```

Properties:

- `uid`: Unique identifier for the category

### Ingredients

Ingredients represent food items in the inventory.

```typescript
ingredients = sqliteTable("ingredients", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),
  name: text("name").notNull(),
  categoryId: text("category_id").references(() => categories.id, {
    onDelete: "set null",
  }),
  quantity: real("quantity").notNull(),
  unit: text("unit").default("g").notNull(),
  expirationDate: timestamp,
  openedDate: timestamp,
  lowQuantityThreshold: real("low_quantity_threshold"),
  createdAt: timestamp,
  updatedAt: timestamp,
});
```

Properties:

- `name`: Name of the ingredient
- `categoryId`: Optional reference to a category
- `quantity`: Current amount of the ingredient
- `unit`: Unit of measurement (defaults to grams)
- `expirationDate`: When the ingredient expires
- `openedDate`: When the package was opened
- `lowQuantityThreshold`: Minimum desired quantity

## Relationships

- Each ingredient can belong to one category (many-to-one)
- Categories can have multiple ingredients
- When a category is deleted, its ingredients remain but become uncategorized

## Business Logic

### State Management

- An ingredient is considered a leftover when it has an `openedDate`
- An ingredient is expiring soon when its `expirationDate` is within 5 days
- An ingredient needs restocking when quantity falls below `lowQuantityThreshold`

### Inventory Updates

- Ingredients are removed from inventory when fully consumed
- Dropping below `lowQuantityThreshold` triggers shopping list addition
- Opening a new package is tracked via `openedDate`
