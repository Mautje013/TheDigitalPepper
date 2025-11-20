#!/usr/bin/env node

/**
 * Helper script to copy pepper.png to the public directory
 * Usage: node scripts/copy-pepper.js <source-path>
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const targetPath = path.join(projectRoot, 'public', 'pepper.png');

const sourcePath = process.argv[2];

if (!sourcePath) {
  console.error('Usage: node scripts/copy-pepper.js <source-path>');
  console.error('Example: node scripts/copy-pepper.js ~/Downloads/pepper.png');
  process.exit(1);
}

const fullSourcePath = path.resolve(sourcePath);

if (!fs.existsSync(fullSourcePath)) {
  console.error(`Error: Source file not found: ${fullSourcePath}`);
  process.exit(1);
}

try {
  fs.copyFileSync(fullSourcePath, targetPath);
  console.log(`✓ Successfully copied pepper image to: ${targetPath}`);
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
}

