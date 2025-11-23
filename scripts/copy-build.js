const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), '.next');
const destDir = path.join(process.cwd(), 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy .next directory to dist
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

if (fs.existsSync(sourceDir)) {
  // Clean dist directory first
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  fs.mkdirSync(destDir, { recursive: true });
  
  // Copy .next to dist
  copyRecursiveSync(sourceDir, destDir);
  console.log('✓ Build output copied to dist/');
} else {
  console.error('✗ .next directory not found. Build may have failed.');
  process.exit(1);
}

