/* Wraps src/runbook.html into a standalone page at index.html.

   src/runbook.html is the single source. It is written to be published as a
   Claude artifact, where the host supplies the document skeleton, so it starts
   at <title> and carries no <html> or <body> of its own. This adds the parts a
   real web server needs, and nothing else, so the two copies never drift.

     node build.mjs
*/

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL(".", import.meta.url));
const body = await readFile(ROOT + "src/runbook.html", "utf8");

/* Internal working document. It names the brokerage that is still unsettled and
   how to answer Margie's objections, so it stays out of every index. */
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta name="theme-color" content="#0D2231">
<meta name="description" content="Internal launch runbook for the North Shore seller site.">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">' +
  '<rect width="64" height="64" rx="12" fill="#0D2231"/>' +
  '<path d="M14 46V18h5.6l12.4 18 12.4-18H50v28h-5.4V27.4L32.6 44h-1.2L19.4 27.4V46z" fill="#F3F0E7"/>' +
  '<rect x="14" y="50" width="36" height="3" rx="1.5" fill="#2F7A69"/></svg>'
)}">
<style>
  /* The artifact host supplies a reset. Standalone has to bring its own. */
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; }
  img, svg { max-width: 100%; }
</style>
</head>
<body>
${body}
</body>
</html>
`;

await writeFile(ROOT + "index.html", page);
console.log(`index.html  ${(page.length / 1024).toFixed(1)} KB  from src/runbook.html`);
