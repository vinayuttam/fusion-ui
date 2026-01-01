const fs = require('fs');
const path = require('path');

// Source and destination directories
const srcExamplesDir = path.join(__dirname, '../src/examples');
const rootExamplesDir = path.join(__dirname, '../examples');
const destDir = path.join(__dirname, '../www/examples');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created examples directory in www/');
}

// Function to copy file and update paths
function copyAndUpdateFile(srcPath, destPath) {
  const content = fs.readFileSync(srcPath, 'utf8');

  // Update paths to work correctly when served from www/
  let updatedContent = content;

  // Add CSS link if not present
  if (!updatedContent.includes('fusion-ui.css')) {
    updatedContent = updatedContent.replace(
      /<title>FUI Alert Component Examples<\/title>/,
      '<title>FUI Alert Component Examples</title>\n    <link rel="stylesheet" href="../build/fusion-ui.css" />',
    );
    updatedContent = updatedContent.replace(
      /<title>FUI Flex Component Examples<\/title>/,
      '<title>FUI Flex Component Examples</title>\n    <link rel="stylesheet" href="../build/fusion-ui.css" />',
    );
    updatedContent = updatedContent.replace(
      /<title>FUI Space Component Examples<\/title>/,
      '<title>FUI Space Component Examples</title>\n    <link rel="stylesheet" href="../build/fusion-ui.css" />',
    );
  }

  // Update script and link paths to point to build directory
  updatedContent = updatedContent
    .replace(/src="\/build\/fusion-ui.css"/g, 'src="../build/fusion-ui.css"')
    .replace(/src="\/build\/fusion-ui.esm.js"/g, 'src="../build/fusion-ui.esm.js"')
    .replace(/src="\.\.\/dist\/fusion-ui\.js"/g, 'src="../build/fusion-ui.js"')
    .replace(/src="\/build\/fusion-ui\.js"/g, 'src="../build/fusion-ui.js"')
    .replace(/href="\/build\//g, 'href="../build/')
    .replace(/src="\/build\//g, 'src="../build/')
    .replace(/src="\.\.\/build\//g, 'src="../build/')
    .replace(/href="\.\.\/build\//g, 'href="../build/')
    .replace(/src="\.\/build\//g, 'src="../build/')
    .replace(/href="\.\/build\//g, 'href="../build/');

  // Update to use modern ES Module pattern
  updatedContent = updatedContent
    .replace(
      /<script src="\.\.\/build\/fusion-ui\.js"><\/script>/g,
      '<script type="module" src="../build/fusion-ui.esm.js"></script>\n    <script nomodule src="../build/fusion-ui.js"></script>',
    )
    .replace(
      /<script src="\/build\/fusion-ui\.js"><\/script>/g,
      '<script type="module" src="/build/fusion-ui.esm.js"></script>\n    <script nomodule src="/build/fusion-ui.js"></script>',
    )
    .replace(
      /<script src="\.\.\/build\/fusion-ui\.js" \/><\/script>/g,
      '<script type="module" src="../build/fusion-ui.esm.js"></script>\n    <script nomodule src="../build/fusion-ui.js"></script>',
    )
    .replace(
      /<script src="\/build\/fusion-ui\.js" \/><\/script>/g,
      '<script type="module" src="/build/fusion-ui.esm.js"></script>\n    <script nomodule src="/build/fusion-ui.js"></script>',
    );

  fs.writeFileSync(destPath, updatedContent);
  console.log(`Copied and updated: ${path.basename(destPath)}`);
}

// Always copy the index.html from www/examples to ensure it's updated
const wwwIndexPath = path.join(__dirname, '../www/examples/index.html');
if (fs.existsSync(wwwIndexPath)) {
  const destIndexPath = path.join(destDir, 'index.html');
  fs.copyFileSync(wwwIndexPath, destIndexPath);
  console.log(`Copied and updated: index.html`);
}

// Copy examples from src/examples
if (fs.existsSync(srcExamplesDir)) {
  const files = fs.readdirSync(srcExamplesDir);
  files.forEach(file => {
    const srcPath = path.join(srcExamplesDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(srcPath).isFile()) {
      copyAndUpdateFile(srcPath, destPath);
    }
  });
}

// Copy examples from root examples directory if it exists
if (fs.existsSync(rootExamplesDir)) {
  const files = fs.readdirSync(rootExamplesDir);
  files.forEach(file => {
    const srcPath = path.join(rootExamplesDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(srcPath).isFile() && !fs.existsSync(destPath)) {
      copyAndUpdateFile(srcPath, destPath);
    }
  });
}

console.log('✅ Examples copied to www/examples/ successfully!');
