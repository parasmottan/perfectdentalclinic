import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public', 'images');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(dir, file);
      const parsed = path.parse(file);
      const outputPath = path.join(dir, `${parsed.name}.webp`);

      console.log(`Processing ${file}...`);
      await sharp(inputPath)
        .webp({ quality: 75 })
        .resize({ width: 1920, withoutEnlargement: true })
        .toFile(outputPath);

      if (fs.existsSync(outputPath)) {
        console.log(` -> WebP created for ${file}`);
      }
    }
  }
}

processImages().catch(console.error);
