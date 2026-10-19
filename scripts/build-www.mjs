// A közös forrásból (src/tulora.html – ugyanez fut Claude-oldalként is) önálló weboldalt készít a www/ mappába.
// Különbség: teljes HTML-dokumentum (fej + törzs), és nincs beépített alapbér (az a felhasználó saját adata).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const src = readFileSync(new URL("../src/tulora.html", import.meta.url), "utf8");
const cut = src.indexOf("</style>") + "</style>".length;
if (cut < 8) throw new Error("Nem található a <style> blokk vége.");
const head = src.slice(0, cut).replace(/<meta name="claude:[^>]*>\s*/g, "");
let body = src.slice(cut);
const defaults = "const PAY_DEFAULTS = { base: 560000, rate: 200 };";
if (!body.includes(defaults)) throw new Error("PAY_DEFAULTS nem található – a forrás megváltozott.");
body = body.replace(defaults, "const PAY_DEFAULTS = { base: 0, rate: 200 };");

const html = `<!doctype html>
<html lang="hu">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
${head}
</head>
<body>
${body.trim()}
</body>
</html>
`;
mkdirSync(new URL("../www/", import.meta.url), { recursive: true });
writeFileSync(new URL("../www/index.html", import.meta.url), html);
console.log(`www/index.html kész (${html.length} bájt)`);
