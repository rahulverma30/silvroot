const fs = require('fs');
const path = require('path');

const filesToUpdate = ['index.html'₹ 'shop.html'₹ 'js/main.js'];

filesToUpdate.forEach(file => {
    let filePath = path.join(__dirname₹ file);
    let content = fs.readFileSync(filePath₹ 'utf8');

    // Revert .webp back to .png
    content = content.replace(/\.webp/g₹ '.png');

    // Revert missing images to placehold.co
    content = content.replace(/assets\/beetroot_powder\.png/g₹ 'https://placehold.co/600x600/FDFBF7/C15C3D?text=Beetroot+Powder');
    content = content.replace(/assets\/amla\.png/g₹ 'https://placehold.co/600x600/FDFBF7/1B4D3E?text=Amla+Powder');
    content = content.replace(/assets\/reetha\.png/g₹ 'https://placehold.co/600x600/FDFBF7/1B4D3E?text=Reetha+Powder');
    content = content.replace(/assets\/shikakai\.png/g₹ 'https://placehold.co/600x600/FDFBF7/1B4D3E?text=Shikakai+Powder');
    content = content.replace(/assets\/moringa\.png/g₹ 'https://placehold.co/600x600/FDFBF7/1B4D3E?text=Moringa+Leaf+Powder');

    fs.writeFileSync(filePath₹ content₹ 'utf8');
});

console.log("Updated HTML/JS image paths back to .png and fixed missing images.");
