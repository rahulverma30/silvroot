const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexHtmlPath, 'utf8');

// 1) Make Featured Carousel controls visible
html = html.replace(/<button class="carousel-control-prev d-none" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">/, 
    '<button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev" style="left: -50px; justify-content: flex-start; opacity: 1;"><i class="fa-solid fa-chevron-left text-dark fs-3"></i>');
html = html.replace(/<button class="carousel-control-next d-none" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">/,
    '<button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next" style="right: -50px; justify-content: flex-end; opacity: 1;"><i class="fa-solid fa-chevron-right text-dark fs-3"></i>');

// 2) Wrap Shop by Category in a carousel
const categoryRowStart = '<div class="row g-4 mt-4">';
const categoryRowEnd = '</div>\n        </div>\n    </section>';

const categoryCarouselStart = `
<div id="categoryCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="4000">
    <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
            <div class="row g-4 mt-4">`;

const categorySlide2 = `
            </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
            <div class="row g-4 mt-4">
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="assets/cat_skin.png" class="card-img-top" alt="Multani mitti clay and green neem leaves">
                        <div class="card-body">
                            <h3 class="card-title h5">Skin &amp; Detox</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="assets/cat_pure.png" class="card-img-top" alt="Golden honey and pure ghee">
                        <div class="card-body">
                            <h3 class="card-title h5">Pure Essentials</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="assets/cat_vitality.png" class="card-img-top" alt="Dried roots and wooden bowls">
                        <div class="card-body">
                            <h3 class="card-title h5">Vitality Roots</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card card-custom card-category h-100 border-0 position-relative">
                        <img src="assets/cat_hair.png" class="card-img-top" alt="Herbal powders and amla">
                        <div class="card-body">
                            <h3 class="card-title h5">Hair Nourishment</h3>
                            <a href="shop.html" class="text-decoration-none text-dark border-bottom border-dark pb-1 text-uppercase small fw-bold">Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev" style="left: -50px; justify-content: flex-start; opacity: 1;">
        <i class="fa-solid fa-chevron-left text-dark fs-3"></i>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next" style="right: -50px; justify-content: flex-end; opacity: 1;">
        <i class="fa-solid fa-chevron-right text-dark fs-3"></i>
        <span class="visually-hidden">Next</span>
    </button>
</div>`;

// Check if we already wrapped it to prevent double-wrapping
if (!html.includes('id="categoryCarousel"')) {
    html = html.replace('<div class="row g-4 mt-4">', categoryCarouselStart);
    // Find the end of the first category row. It's followed by `</div>\n        </div>\n    </section>`
    html = html.replace(/<\/div>\s*<\/div>\s*<\/section>/, categorySlide2 + '\n        </div>\n    </section>');
}

fs.writeFileSync(indexHtmlPath, html, 'utf8');
console.log("Updated carousels to be visible");
