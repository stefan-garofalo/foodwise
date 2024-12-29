ALTER TABLE `categories` RENAME COLUMN "name" TO "uid";--> statement-breakpoint
DROP INDEX `categories_name_unique`;--> statement-breakpoint
CREATE UNIQUE INDEX `categories_uid_unique` ON `categories` (`uid`);