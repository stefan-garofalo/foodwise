import { db } from "@repo/db/client";
import { router } from "./trpc";
import { categoriesRouter } from "./categories/router";

export const appRouter = router({
  categories: categoriesRouter,
});
export type AppRouter = typeof appRouter;

export const createContext = () => ({
  db,
});
export type Context = Awaited<ReturnType<typeof createContext>>;
