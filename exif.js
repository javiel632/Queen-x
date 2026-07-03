const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function writeExif(media, pack) {
  let tmp = Math.random().toString(36);
  let tmpdir = path.join(__dirname, 'temp');
  
  if (!fs.existsSync(tmpdir)) {
    fs.mkdirSync(tmpdir);
  }
  
  let pathInput = path.join(tmpdir, `${tmp}.webp`);
  let pathOutput = path.join(tmpdir, `${tmp}_out.webp`);
  
  await fs.promises.writeFile(pathInput, media.data);
  
  if (pack.packname || pack.author) {
    const exifAttr = `"sticker-pack-id":"com.example.myapp","sticker-pack-name":"${pack.packname}","sticker-author-name":"${pack.author}"`;
    
    try {
      execSync(`exiftool -overwrite_original "-UserComment=${exifAttr}" ${pathInput}`, { stdio: 'pipe' });
    } catch (e) {
      console.log('exiftool not installed');
    }
  }
  
  const buffer = await fs.promises.readFile(pathOutput || pathInput);
  await fs.promises.unlink(pathInput);
  
  if (fs.existsSync(pathOutput)) {
    await fs.promises.unlink(pathOutput);
  }
  
  return buffer;
}

async function imageToWebp(media) {
  let tmp = Math.random().toString(36);
  let tmpdir = path.join(__dirname, 'temp');
  
  if (!fs.existsSync(tmpdir)) {
    fs.mkdirSync(tmpdir);
  }
  
  let pathInput = path.join(tmpdir, `${tmp}.jpg`);
  let pathOutput = path.join(tmpdir, `${tmp}.webp`);
  
  await fs.promises.writeFile(pathInput, media);
  
  try {
    execSync(`ffmpeg -i ${pathInput} -vcodec libwebp -filter:v scale=512:512:force_original_aspect_ratio=decrease ${pathOutput}`, { stdio: 'pipe' });
    const buffer = await fs.promises.readFile(pathOutput);
    await fs.promises.unlink(pathInput);
    await fs.promises.unlink(pathOutput);
    return buffer;
  } catch (e) {
    throw new Error('Failed to convert image to webp');
  }
}

async function videoToWebp(media) {
  let tmp = Math.random().toString(36);
  let tmpdir = path.join(__dirname, 'temp');
  
  if (!fs.existsSync(tmpdir)) {
    fs.mkdirSync(tmpdir);
  }
  
  let pathInput = path.join(tmpdir, `${tmp}.mp4`);
  let pathOutput = path.join(tmpdir, `${tmp}.webp`);
  
  await fs.promises.writeFile(pathInput, media);
  
  try {
    execSync(`ffmpeg -i ${pathInput} -vcodec libwebp -filter:v "scale=512:512:force_original_aspect_ratio=decrease,fps=10" -loop 0 ${pathOutput}`, { stdio: 'pipe' });
    const buffer = await fs.promises.readFile(pathOutput);
    await fs.promises.unlink(pathInput);
    await fs.promises.unlink(pathOutput);
    return buffer;
  } catch (e) {
    throw new Error('Failed to convert video to webp');
  }
}

async function writeExifVid(media, pack) {
  return await writeExif(media, pack);
}

async function writeExifImg(media, pack) {
  return await writeExif(media, pack);
}

module.exports = {
  writeExif,
  imageToWebp,
  videoToWebp,
  writeExifVid,
  writeExifImg
};
