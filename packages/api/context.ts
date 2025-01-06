import { db } from "@repo/db/client";

export const createContext = () => ({
  db,
});

export type Context = Awaited<ReturnType<typeof createContext>>;
