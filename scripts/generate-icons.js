const sharp = require('sharp');
const path = require('path');

const sizes = [192, 512];
const inputFile = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

async function generateIcons() {
    for (const size of sizes) {
        const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);

        try {
            await sharp(inputFile)
                .resize(size, size)
                .png()
                .toFile(outputFile);
            console.log(`Generated ${size}x${size} icon`);
        } catch (error) {
            console.error(`Error generating ${size}x${size} icon:`, error);
        }
    }
}

generateIcons(); 