import { upsertById } from "../../utils/queries";
import { authedProcedure } from "../../trpc";

import { categories } from "@repo/db/schema/categories";
import { createInsertSchema } from "@repo/db/schema";

export const create = authedProcedure
  .input(createInsertSchema(categories))
  .mutation(
    async ({ input, ctx }) => await upsertById(ctx.db, categories, input)
  );
