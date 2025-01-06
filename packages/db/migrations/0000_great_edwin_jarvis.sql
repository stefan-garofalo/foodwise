CREATE TABLE `categories` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `categories_name_unique` ON `categories` (`name`);--> statement-breakpoint
CREATE TABLE `ingredients` (
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
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
