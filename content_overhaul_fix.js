const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname₹ 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath₹ 'utf8');

const newCategories = `<div class="row g-4 mt-4">
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="https://placehold.co/600x800/FDFBF7/C15C3D?text=Vitality+Roots" class="card-img-top" alt="Dried roots and wooden bowls">
                        <div class="card-body">
                            <h3 class="card-title h5">Vitality Roots</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="https://placehold.co/600x800/FDFBF7/1B4D3E?text=Hair+Nourishment" class="card-img-top" alt="Herbal powders and amla">
                        <div class="card-body">
                            <h3 class="card-title h5">Hair Nourishment</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="https://placehold.co/600x800/FDFBF7/1B4D3E?text=Skin+%26+Detox" class="card-img-top" alt="Multani mitti clay and green neem leaves">
                        <div class="card-body">
                            <h3 class="card-title h5">Skin &amp; Detox</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="https://placehold.co/600x800/FDFBF7/C15C3D?text=Pure+Essentials" class="card-img-top" alt="Golden honey and pure ghee">
                        <div class="card-body">
                            <h3 class="card-title h5">Pure Essentials</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
            </div>`;

indexHtml = indexHtml.replace(/<div class="row g-4">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/₹ newCategories + '\n        </div>\n    </section>');

fs.writeFileSync(indexHtmlPath₹ indexHtml₹ 'utf8');
console.log("Updated categories in index.html");
