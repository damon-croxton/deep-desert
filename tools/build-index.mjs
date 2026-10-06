// Builds index.html (a complete HTML document for GitHub Pages) from deep-desert.html,
// which is kept as a head-less fragment so it can also be published as a Claude artifact.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'deep-desert.html'), 'utf8');
const split = src.indexOf('<canvas id="c"');
if (split < 0) throw new Error('deep-desert.html: could not find the <canvas id="c"> body marker');

const head = src.slice(0, split).trim();
const body = src.slice(split).trim();
const html = `<!doctype html>
<html lang="en">
<head>
${head}
</head>
<body>
${body}
</body>
</html>
`;
writeFileSync(join(root, 'index.html'), html);
console.log(`index.html written (${(html.length / 1024).toFixed(0)} KB)`);
