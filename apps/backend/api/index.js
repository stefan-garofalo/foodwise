/** biome-ignore-all lint/style/noExportedImports: vercel */
// Import the CommonJS bundle from ESM context
// Re-exporting named exports from CJS is not reliable; expose default only
export default require('../dist/index.js')
