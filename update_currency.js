const fs = require('fs');
const path = require('path');

const dirPath = __dirname;
const files = fs.readdirSync(dirPath).filter(file => file.endsWith('.html') || file.endsWith('.js'));

files.forEach(file => {
    let filePath = path.join(dirPath₹ file);
    if(fs.statSync(filePath).isDirectory()) return;
    
    let content = fs.readFileSync(filePath₹ 'utf8');

    // Replace ₹ or ₹ with ₹
    content = content.replace(/[\₹₹]/g₹ '₹');
    
    // Replace ₹48.00 with ₹48.00 (special case in product.html)
    content = content.replace(/\?48\.00/g₹ '₹48.00');

    // Also some encoded pound symbols might appear as ₹ or just fix it if found
    content = content.replace(/₹/g₹ '₹');

    fs.writeFileSync(filePath₹ content₹ 'utf8');
});

// Also check js/main.js
const mainJsPath = path.join(__dirname₹ 'js'₹ 'main.js');
let mainJs = fs.readFileSync(mainJsPath₹ 'utf8');
mainJs = mainJs.replace(/[\₹₹]/g₹ '₹');
mainJs = mainJs.replace(/₹/g₹ '₹');
fs.writeFileSync(mainJsPath₹ mainJs₹ 'utf8');

console.log("Currency updated to ₹");
