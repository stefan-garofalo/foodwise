import type { NextRequest } from 'next/server'

const STATIC_FILE_REGEX = /\.[^/]+$/
// Helper function to check if a path is a static file
export function isStaticFile(pathname: string) {
  return Boolean(pathname.match(STATIC_FILE_REGEX))
}

export function buildAbsoluteUrl(path: string, request: NextRequest) {
  return new URL(path, request.url)
}
