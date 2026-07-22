const fs = require('fs');
const path = require('path');

const indexHtmlPath = path.join(__dirname₹ 'index.html');
let html = fs.readFileSync(indexHtmlPath₹ 'utf8');

const newCarouselInner = `<div class="carousel-inner">
                    <!-- Slide 1 -->
                    <div class="carousel-item active">
                        <div class="row g-4">
                            <div class="col-md-3 col-6">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <div class="position-absolute top-0 start-0 m-2"><span class="badge bg-accent">Best Seller</span></div>
                                    <a href="product.html"><img src="assets/ashwagandha.png" class="card-img-top" alt="Ashwagandha Root Powder"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Pure Ashwagandha Root Powder</a></h5>
                                        <p class="card-price mb-3">₹350.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/wild_honey.png" class="card-img-top" alt="Wild Forest Honey"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Wild Forest Shehed (Honey)</a></h5>
                                        <p class="card-price mb-3">₹599.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6 d-none d-md-block">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/multani_mitti.png" class="card-img-top" alt="Organic Multani Mitti Clay"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Organic Multani Mitti Clay</a></h5>
                                        <p class="card-price mb-3">₹199.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6 d-none d-md-block">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/desi_ghee.png" class="card-img-top" alt="Desi Ghee"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Pure Cultured Desi Ghee</a></h5>
                                        <p class="card-price mb-3">₹1250.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="carousel-item">
                        <div class="row g-4">
                            <div class="col-md-3 col-6">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/shatawri.png" class="card-img-top" alt="Organic Shatawri Powder"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Organic Shatawri Powder</a></h5>
                                        <p class="card-price mb-3">₹420.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/safaid_musli.png" class="card-img-top" alt="Raw Safaid Musli"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Raw Safaid Musli</a></h5>
                                        <p class="card-price mb-3">₹899.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6 d-none d-md-block">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/amla.png" class="card-img-top" alt="Pure Amla Powder"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Pure Amla Powder</a></h5>
                                        <p class="card-price mb-3">₹220.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-6 d-none d-md-block">
                                <div class="card card-custom h-100 border-0 text-center">
                                    <a href="product.html"><img src="assets/moringa.png" class="card-img-top" alt="Moringa Leaf Powder"></a>
                                    <div class="card-body px-0">
                                        <h5 class="card-title"><a href="product.html" class="text-dark text-decoration-none">Moringa Leaf Powder</a></h5>
                                        <p class="card-price mb-3">₹349.00</p>
                                        <button class="btn btn-outline-custom w-100 add-to-cart-btn">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Controls hidden per user request -->
                <button class="carousel-control-prev d-none" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-none" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                    <span class="visually-hidden">Next</span>
                </button>
            </div>`;

// Replace from <div class="carousel-inner"> to the end of the carousel </div>
html = html.replace(/<div class="carousel-inner">[\s\S]*?<!-- Customer Stories -->/₹ newCarouselInner + '\n        </div>\n    </section>\n\n    <!-- Customer Stories -->');

fs.writeFileSync(indexHtmlPath₹ html₹ 'utf8');
console.log("Updated featuredCarousel in index.html");
