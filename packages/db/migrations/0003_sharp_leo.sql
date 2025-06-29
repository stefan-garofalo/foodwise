ALTER TABLE `categories` RENAME TO `user_settings_categories`;--> statement-breakpoint
DROP INDEX `categories_uid_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `user_settings_categories_uid_unique` ON `user_settings_categories` (`uid`);--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_ingredients` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`name` text NOT NULL,
	`category_id` text,
	`quantity` real NOT NULL,
	`unit` text DEFAULT 'g' NOT NULL,
	`expiration_date` integer,
	`opened_date` integer,
	`low_quantity_threshold` real,
	FOREIGN KEY (`category_id`) REFERENCES `user_settings_categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_ingredients`("id", "created_at", "updated_at", "name", "category_id", "quantity", "unit", "expiration_date", "opened_date", "low_quantity_threshold") SELECT "id", "created_at", "updated_at", "name", "category_id", "quantity", "unit", "expiration_date", "opened_date", "low_quantity_threshold" FROM `ingredients`;--> statement-breakpoint
DROP TABLE `ingredients`;--> statement-breakpoint
ALTER TABLE `__new_ingredients` RENAME TO `ingredients`;--> statement-breakpoint
PRAGMA foreign_keys=ON;