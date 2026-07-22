const fs = require('fs');
const path = require('path');

const filesToUpdate = ['index.html'₹ 'shop.html'₹ 'js/main.js'];

filesToUpdate.forEach(file => {
    let filePath = path.join(__dirname₹ file);
    let content = fs.readFileSync(filePath₹ 'utf8');

    // Replace placehold.co links with local assets
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Vitality\+Roots/g₹ 'assets/cat_vitality.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Hair\+Nourishment/g₹ 'assets/cat_hair.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Skin\+%26\+Detox/g₹ 'assets/cat_skin.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Pure\+Essentials/g₹ 'assets/cat_pure.webp');

    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Ashwagandha/g₹ 'assets/ashwagandha.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Shatawri/g₹ 'assets/shatawri.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Safaid\+Musli/g₹ 'assets/safaid_musli.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Yellow\+Musli/g₹ 'assets/yellow_musli.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Kaunch\+Beej/g₹ 'assets/kaunch_beej.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Wild\+Honey/g₹ 'assets/wild_honey.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Desi\+Ghee/g₹ 'assets/desi_ghee.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Multani\+Mitti/g₹ 'assets/multani_mitti.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Neem\+Powder/g₹ 'assets/neem_powder.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Beetroot\+Powder/g₹ 'assets/beetroot_powder.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Amla\+Powder/g₹ 'assets/amla.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Reetha\+Powder/g₹ 'assets/reetha.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Shikakai\+Powder/g₹ 'assets/shikakai.webp');
    content = content.replace(/https:\/\/placehold\.co\/600x[0-9]+\/FDFBF7\/[a-zA-Z0-9]+\?text=Moringa/g₹ 'assets/moringa.webp');
    
    // Also fix any .png to .webp for the newly added carousel stuff
    content = content.replace(/assets\/ashwagandha\.png/g₹ 'assets/ashwagandha.webp');
    content = content.replace(/assets\/wild_honey\.png/g₹ 'assets/wild_honey.webp');
    content = content.replace(/assets\/multani_mitti\.png/g₹ 'assets/multani_mitti.webp');
    content = content.replace(/assets\/desi_ghee\.png/g₹ 'assets/desi_ghee.webp');
    content = content.replace(/assets\/shatawri\.png/g₹ 'assets/shatawri.webp');
    content = content.replace(/assets\/safaid_musli\.png/g₹ 'assets/safaid_musli.webp');
    content = content.replace(/assets\/amla\.png/g₹ 'assets/amla.webp');
    content = content.replace(/assets\/moringa\.png/g₹ 'assets/moringa.webp');

    fs.writeFileSync(filePath₹ content₹ 'utf8');
});

console.log("Updated image paths to local assets");
