import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(path.join(process.cwd(), 'src'));
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Specifically look for /images/....(png|jpg|jpeg)
  const regex = /(\/images\/[^\/]+\.)(png|jpg|jpeg)\b/gi;
  if (content.match(regex)) {
    content = content.replace(regex, '$1webp');
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Done. Updated ${changedFiles} files with .webp routes.`);
