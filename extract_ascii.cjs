const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function decodePNG(filePath) {
  const buf = fs.readFileSync(filePath);
  if (buf.toString('hex', 0, 8) !== '89504e470d0a1a0a') {
    throw new Error('Not a valid PNG');
  }

  let offset = 8;
  let width = 0, height = 0, bitDepth = 0, colorType = 0;
  const idatChunks = [];

  while (offset < buf.length) {
    const len = buf.readUInt32BE(offset);
    const type = buf.toString('ascii', offset + 4, offset + 8);
    if (type === 'IHDR') {
      width = buf.readUInt32BE(offset + 8);
      height = buf.readUInt32BE(offset + 12);
      bitDepth = buf[offset + 16];
      colorType = buf[offset + 17];
    } else if (type === 'IDAT') {
      idatChunks.push(buf.subarray(offset + 8, offset + 8 + len));
    } else if (type === 'IEND') {
      break;
    }
    offset += 12 + len;
  }

  const compressedData = Buffer.concat(idatChunks);
  const uncompressed = zlib.inflateSync(compressedData);

  const bpp = colorType === 6 ? 4 : (colorType === 2 ? 3 : 1);
  const stride = width * bpp;
  const rawPixels = Buffer.alloc(width * height * 4);

  let srcPos = 0;
  const prevLine = Buffer.alloc(stride);
  const currLine = Buffer.alloc(stride);

  for (let y = 0; y < height; y++) {
    const filterType = uncompressed[srcPos++];
    uncompressed.copy(currLine, 0, srcPos, srcPos + stride);
    srcPos += stride;

    for (let x = 0; x < stride; x++) {
      const left = x >= bpp ? currLine[x - bpp] : 0;
      const up = prevLine[x];
      const upperLeft = x >= bpp ? prevLine[x - bpp] : 0;

      if (filterType === 1) { // Sub
        currLine[x] = (currLine[x] + left) & 0xff;
      } else if (filterType === 2) { // Up
        currLine[x] = (currLine[x] + up) & 0xff;
      } else if (filterType === 3) { // Average
        currLine[x] = (currLine[x] + Math.floor((left + up) / 2)) & 0xff;
      } else if (filterType === 4) { // Paeth
        const p = left + up - upperLeft;
        const pa = Math.abs(p - left);
        const pb = Math.abs(p - up);
        const pc = Math.abs(p - upperLeft);
        let pr;
        if (pa <= pb && pa <= pc) pr = left;
        else if (pb <= pc) pr = up;
        else pr = upperLeft;
        currLine[x] = (currLine[x] + pr) & 0xff;
      }
    }

    currLine.copy(prevLine);

    for (let x = 0; x < width; x++) {
      const destIdx = (y * width + x) * 4;
      if (colorType === 6) {
        rawPixels[destIdx] = currLine[x * 4];
        rawPixels[destIdx + 1] = currLine[x * 4 + 1];
        rawPixels[destIdx + 2] = currLine[x * 4 + 2];
        rawPixels[destIdx + 3] = currLine[x * 4 + 3];
      } else if (colorType === 2) {
        rawPixels[destIdx] = currLine[x * 3];
        rawPixels[destIdx + 1] = currLine[x * 3 + 1];
        rawPixels[destIdx + 2] = currLine[x * 3 + 2];
        rawPixels[destIdx + 3] = 255;
      }
    }
  }

  return { width, height, pixels: rawPixels };
}

function processImageToASCII(img, targetSize) {
  const chars = " .:-=+*#%@".split("");
  const scale = 0.8;
  const imgAspect = img.width / img.height;

  let drawHeight = targetSize * scale;
  let drawWidth = drawHeight * imgAspect;

  if (drawWidth > targetSize * scale) {
    drawWidth = targetSize * scale;
    drawHeight = drawWidth / imgAspect;
  }

  const offsetX = (targetSize - drawWidth) / 2;
  const offsetY = (targetSize - drawHeight) / 2;

  const isMobileSize = targetSize <= 280;
  const fontSize = isMobileSize ? 5 : 7;
  const colGap = fontSize * 0.7;
  const rowGap = fontSize * 1.1;

  const particles = [];

  for (let y = 0; y < targetSize; y += rowGap) {
    for (let x = 0; x < targetSize; x += colGap) {
      const imgX = (x - offsetX) * (img.width / drawWidth);
      const imgY = (y - offsetY) * (img.height / drawHeight);

      if (imgX >= 0 && imgX < img.width && imgY >= 0 && imgY < img.height) {
        const ix = Math.floor(imgX);
        const iy = Math.floor(imgY);
        const idx = (iy * img.width + ix) * 4;

        const a = img.pixels[idx + 3];
        if (a > 128) {
          const r = img.pixels[idx];
          const g = img.pixels[idx + 1];
          const b = img.pixels[idx + 2];
          const brightness = (r + g + b) / (3 * 255);
          const charIndex = Math.floor(brightness * (chars.length - 1));

          particles.push({
            x: Number(x.toFixed(1)),
            y: Number(y.toFixed(1)),
            char: chars[charIndex],
            alpha: Number((0.4 + brightness * 0.6).toFixed(2))
          });
        }
      }
    }
  }

  return particles;
}

try {
  const pngPath = path.join(__dirname, 'public/profile.png');
  const img = decodePNG(pngPath);
  console.log(`Successfully decoded PNG (${img.width}x${img.height})`);

  const sizes = [400, 280, 220];
  const results = {};

  for (const size of sizes) {
    results[size] = processImageToASCII(img, size);
    console.log(`Generated ${results[size].length} ASCII particles for size ${size}`);
  }

  const output = `export const asciiData = ${JSON.stringify(results)};\n`;
  const outputPath = path.join(__dirname, 'src/assets/asciiData.js');
  fs.writeFileSync(outputPath, output);
  console.log('ASCII data generated successfully.');
} catch (err) {
  console.error('Error generating ASCII data:', err);
}
