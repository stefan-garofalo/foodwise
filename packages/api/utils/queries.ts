import { LibSqlDB, SQLiteTableWithColumns } from "@repo/db";

export const upsertById = async (
  db: LibSqlDB,
  table: SQLiteTableWithColumns<any>,
  input: SQLiteTableWithColumns<any>["_"]["columns"]
) => {
  const query = await db
    .insert(table)
    .values(input)
    .onConflictDoUpdate({
      target: table.id,
      set: input,
    })
    .returning();

  return Array.isArray(input) ? query : query[0];
};
