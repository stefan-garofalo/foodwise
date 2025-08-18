import type { BaseSQLiteTable } from '@foodwise/db/utils/index'

/**
 *  A _minimal_ view of a Parser that TRPC is happy with.
 *  · `parse` is required at runtime.
 *  · the two phantom fields give us good compile-time inference.
 */
export type ParserLike<TIn, TOut = TIn> = {
  parse: (data: unknown) => TOut
  _input?: TIn // phantom – never read at runtime
  _output?: TOut // phantom
}

export type TableColumns<T extends BaseSQLiteTable> = {
  [K in keyof T['$inferInsert'] as K extends 'id' | 'createdAt' | 'updatedAt'
    ? never
    : K]: T['$inferInsert'][K]
}

export type ColumnFlags<T extends BaseSQLiteTable> = {
  [K in keyof TableColumns<T>]?: boolean
}
