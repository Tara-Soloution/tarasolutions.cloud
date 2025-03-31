const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
    {
        url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        filename: 'education.jpg'
    },

];

const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const fileStream = fs.createWriteStream(path.join(__dirname, '../public/case-studies', filename));
                response.pipe(fileStream);
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve();
                });
            } else {
                reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            reject(new Error(`Failed to download ${filename}: ${err.message}`));
        });
    });
};

const downloadAllImages = async () => {
    try {
        // Create portfolio directory if it doesn't exist
        const portfolioDir = path.join(__dirname, '../public/portfolio');
        if (!fs.existsSync(portfolioDir)) {
            fs.mkdirSync(portfolioDir, { recursive: true });
        }

        // Download all images
        await Promise.all(images.map(img => downloadImage(img.url, img.filename)));
        console.log('All images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading images:', error);
    }
};

downloadAllImages(); 