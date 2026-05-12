import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const txt = await readFile(path.join(root, 'docs/research/all-assets.txt'), 'utf8');
const urls = [...new Set(txt.split('\n').map(l => l.trim().replace(/&amp;/g, '&').replace(/[);].*$/, '')).filter(Boolean))];

const fontDir = path.join(root, 'public/fonts');
const imgDir = path.join(root, 'public/images');
const vidDir = path.join(root, 'public/videos');
await mkdir(fontDir, { recursive: true });
await mkdir(imgDir, { recursive: true });
await mkdir(vidDir, { recursive: true });

const tasks = [];
const map = {};
for (const url of urls) {
  if (!/\.(png|jpg|jpeg|webp|svg|gif|mp4|webm|woff2?|otf|ttf)/i.test(url)) continue;
  const u = new URL(url);
  const ext = path.extname(u.pathname).toLowerCase();
  const baseName = path.basename(u.pathname);
  let dir;
  if (['.woff', '.woff2', '.otf', '.ttf'].includes(ext)) dir = fontDir;
  else if (['.mp4', '.webm'].includes(ext)) dir = vidDir;
  else dir = imgDir;
  const dest = path.join(dir, baseName);
  const rel = path.relative(root, dest).replace(/\\/g, '/');
  map[url.replace(/&amp;/g, '&')] = '/' + path.relative(path.join(root, 'public'), dest).replace(/\\/g, '/');
  if (existsSync(dest)) continue;
  tasks.push(async () => {
    try {
      const r = await fetch(url);
      if (!r.ok) { console.log('FAIL', r.status, url); return; }
      const buf = Buffer.from(await r.arrayBuffer());
      await writeFile(dest, buf);
      console.log('OK', rel, buf.length);
    } catch (e) { console.log('ERR', url, e.message); }
  });
}

const concurrency = 6;
let i = 0;
async function worker() { while (i < tasks.length) { const idx = i++; await tasks[idx](); } }
await Promise.all(Array.from({ length: concurrency }, worker));

await writeFile(path.join(root, 'docs/research/asset-map.json'), JSON.stringify(map, null, 2));
console.log('Done.', Object.keys(map).length, 'assets mapped.');
