// Create this file to generate placeholder SVGs
// You can run this with Node.js to generate placeholder images

const fs = require('fs');

function createPlaceholderSVG(width, height) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#E5E7EB"/>
    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#9CA3AF" text-anchor="middle" dominant-baseline="middle">Placeholder Image</text>
  </svg>`;
}

// Create placeholder SVGs for different sizes
const sizes = [
  { width: 48, height: 48 },
  { width: 200, height: 200 },
  { width: 400, height: 200 }
];

// Create directory if it doesn't exist
if (!fs.existsSync('placeholders')) {
  fs.mkdirSync('placeholders');
}

// Generate SVGs
sizes.forEach(size => {
  const svg = createPlaceholderSVG(size.width, size.height);
  fs.writeFileSync(`placeholders/placeholder-${size.width}x${size.height}.svg`, svg);
});

console.log('Placeholder SVGs generated successfully!');