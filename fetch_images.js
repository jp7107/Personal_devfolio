const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function processSite(siteUrl, targetDir) {
  try {
    console.log(`Fetching HTML from ${siteUrl}...`);
    const html = await fetchHtml(siteUrl);
    
    // Extract og:image
    const match = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i) || 
                  html.match(/<meta\s+name=["']twitter:image["']\s+content=["'](.*?)["']/i);
                  
    if (match && match[1]) {
      let imgUrl = match[1];
      if (imgUrl.startsWith('/')) {
        const urlObj = new URL(siteUrl);
        imgUrl = `${urlObj.protocol}//${urlObj.host}${imgUrl}`;
      }
      console.log(`Found image URL: ${imgUrl}`);
      const destPath = path.join(targetDir, 'landing.png');
      await downloadImage(imgUrl, destPath);
      console.log(`Saved to ${destPath}`);
    } else {
      console.log(`No og:image found for ${siteUrl}`);
    }
  } catch (err) {
    console.error(`Error processing ${siteUrl}:`, err.message);
  }
}

async function main() {
  await processSite('https://ai-assistant-electionguide.onrender.com/', '/Users/jp710/Desktop/Personal_devfolio-main/public/assets/projects-screenshots/electraguide');
  await processSite('https://safar-go-bookings.vercel.app/', '/Users/jp710/Desktop/Personal_devfolio-main/public/assets/projects-screenshots/safar');
}

main();
