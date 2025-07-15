import type { LANGS } from '../config'

// Splits a path string into an array of segments
type Split<S extends string, D extends string = '/'> = string extends S
  ? string[]
  : S extends ''
    ? []
    : S extends `${infer T}${D}${infer U}`
      ? [T, ...Split<U, D>]
      : [S]

// Recursively merges two object types
// - Combines keys from A and B.
// - If a key exists in both and both values are objects, merges recursively.
// - If a key exists in both but types differ (object vs non-object) or both are non-objects, unions types.
// - If a key exists only in A or only in B, marks type as `T | undefined`.
type MergeObjects<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B // Key exists in both A and B
      ? A[K] extends object
        ? B[K] extends object
          ? MergeObjects<A[K], B[K]> // Both objects: Recurse
          : A[K] | B[K] // A object, B not: Union
        : A[K] | B[K] // A not object: Union (B might be object or not)
      : A[K] | undefined // Key only in A
    : K extends keyof B // Key only in B (must be true if K not in A)
      ? B[K] | undefined
      : never // Should not happen
}

// Represents the merged structure of all dictionaries in LANGS.
// !! IMPORTANT: Manually define this based on the languages in your config !!
// If LANGS has more than 'en' and 'it', chain MergeObjects accordingly:
// MergeObjects<typeof LANGS['en'], MergeObjects<typeof LANGS['it'], typeof LANGS['fr']>>
type MergedDictionary = MergeObjects<(typeof LANGS)['en'], (typeof LANGS)['it']>

// Navigates the MergedDictionary type using a path array (Split<P>)
// Returns the type at the end of the path, handling undefined possibilities.
type GetTypeFromPath<T, P extends string[]> = P extends []
  ? T // Path exhausted, return type T
  : P extends [infer First, ...infer Rest]
    ? First extends keyof T // Check if First segment is a key in T
      ? T[First] extends infer Value // Get the type of the value
        ? Value extends undefined // Check if this level *can* be undefined
          ? Rest extends string[]
            ? // Recurse on NonNullable, add | undefined back to the final result
              GetTypeFromPath<NonNullable<Value>, Rest> | undefined
            : Value // End of path, return potentially undefined type
          : Rest extends string[] // Value is not undefined at this level
            ? GetTypeFromPath<Value, Rest> // Recurse normally
            : Value // End of path
        : undefined // Should not happen with 'infer'
      : undefined // Key 'First' not found in T
    : never // Path segment is not valid

export type { GetTypeFromPath, MergedDictionary, Split }
