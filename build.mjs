import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const template = await readFile(join(root, 'src', 'template.html'), 'utf8');
const translations = JSON.parse(await readFile(join(root, 'src', 'translations.json'), 'utf8'));
const locales = ['en', 'de', 'vi'];
const tokenPattern = /{{([^{}]+)}}/g;

function htmlEscape(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

const sourceKeys = [...new Set([...template.matchAll(tokenPattern)].map((match) => match[1]))]
  .filter((key) => !['lang', 'canonical', 'assetPrefix', 'selectedEn', 'selectedDe', 'selectedVi'].includes(key));

for (const locale of locales) {
  const copy = translations[locale];
  const missing = sourceKeys.filter((key) => !(key in copy));
  if (missing.length) throw new Error(`${locale} is missing: ${missing.join(', ')}`);
  const canonical = `https://petevo.github.io/${locale === 'en' ? '' : `${locale}/`}`;
  const values = {
    ...copy,
    lang: locale,
    canonical,
    assetPrefix: locale === 'en' ? '' : '../',
    selectedEn: locale === 'en' ? 'selected' : '',
    selectedDe: locale === 'de' ? 'selected' : '',
    selectedVi: locale === 'vi' ? 'selected' : ''
  };
  const html = template.replace(tokenPattern, (_, key) => {
    if (!(key in values)) throw new Error(`Unknown token: ${key}`);
    if (key === 'meta.schemaName' || key === 'meta.jobTitle') return JSON.stringify(values[key]).slice(1, -1);
    return htmlEscape(values[key]);
  });
  const destination = join(root, locale === 'en' ? '' : locale, 'index.html');
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html, 'utf8');
  console.log(`Built ${locale}: ${destination}`);
}
