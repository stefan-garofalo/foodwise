/** biome-ignore-all lint/suspicious/noConsole: vercel */
import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const out = resolve(__dirname, '../dist/index.js')
const content = `import app from './index.cjs';
export default app;
`

writeFileSync(out, content)
console.log('Wrote ESM stub to dist/index.js that forwards to index.cjs')
