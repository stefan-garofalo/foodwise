import { LANGS } from '@/modules/i18n/config'
import { accessNestedObject } from '@/utils/objects'
import type { Prettify } from '@/utils/types'

import type { GetTypeFromPath, MergedDictionary, Split } from '../lib/types'

export function getGlobalDictionary(lang: keyof typeof LANGS) {
  return LANGS[lang]
}

/**
 * Retrieves a nested dictionary object for a specific page/component path.
 * @param lang The target language.
 * @param path The '/' separated path to the dictionary object (e.g., 'login/seo').
 * @returns The dictionary object corresponding to the path. The *type* represents
 *          the merged structure across all languages defined in LANGS, with leaf
 *          nodes being unions reflecting possibilities (e.g., string | undefined).
 */
export function getPageDictionary<P extends string>(
  lang: keyof typeof LANGS,
  path: P
) {
  const dict = getGlobalDictionary(lang)
  const paths = path.split('/')
  // accessNestedObject gets the actual value from the specific language dictionary
  const result = accessNestedObject(dict, paths)

  // The type assertion uses the MergedDictionary and GetTypeFromPath helper.
  // This tells TypeScript the expected shape based on *all* languages.
  return result as Prettify<GetTypeFromPath<MergedDictionary, Split<P>>>
}
