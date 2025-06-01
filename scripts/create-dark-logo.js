const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../assets/images/yaaisuw-robot.png');
const outputPath = path.join(__dirname, '../assets/images/yaaisuw-robot-dark.png');

// Create output directory if it doesn't exist
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process the image
async function createDarkLogo() {
  try {
    await sharp(inputPath)
      .linear(1.2, -0.2)  // Adjust brightness and contrast
      .tint({ r: 180, g: 180, b: 255 })  // Add a slight blue tint
      .toFile(outputPath);
    
    console.log('Dark mode logo created successfully at:', outputPath);
  } catch (error) {
    console.error('Error creating dark mode logo:', error);
  }
}

createDarkLogo();
