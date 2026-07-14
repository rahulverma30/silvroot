const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'index.html',
    'shop.html',
    'product.html',
    'cart.html',
    'account.html',
    'generate_pages.js' // We also update the template here
];

const faviconMeta = `<link rel="icon" href="favicon.svg" type="image/svg+xml">\n    <meta name="description" content="Shop natural, organic, and Ayurvedic beauty and skincare products at Slivroot.">`;

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');

    // 1. Inject Favicon and Meta Description if not present
    if (!content.includes('favicon.svg')) {
        content = content.replace('</title>', `</title>\n    ${faviconMeta}`);
    }

    // 2. Fix Dead Links
    content = content.replace(/href="#"/g, 'href="javascript:void(0)"');

    // 3. Mobile Header UI Fix
    // Replace the row with a more robust flexbox for both mobile and desktop
    // The user had: <div class="row w-100 align-items-center m-0"> ... </div>
    // We will replace the entire row div with a proper flexbox approach
    const oldRowRegex = /<div class="row w-100 align-items-center m-0">[\s\S]*?<!-- Bottom Row: Links -->/;
    
    const newHeaderHtml = `<div class="d-flex justify-content-between align-items-center w-100 m-0 px-2 px-lg-0">
                <!-- Left: Hamburger (Mobile) & Desktop spacing placeholder -->
                <div class="d-flex align-items-center" style="width: 33.33%;">
                    <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                
                <!-- Center: Logo -->
                <div class="d-flex justify-content-center text-center" style="width: 33.33%;">
                    <a class="navbar-brand-centered text-decoration-none slivroot-logo m-0 d-inline-flex justify-content-center align-items-center" href="index.html">
                        Slivroot
                        <svg class="slivroot-leaf-icon ms-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;">
                            <path d="M17.5 5.5C15 5.5 12.5 6.5 10.5 8.5C8.5 10.5 7.5 13 7.5 15.5C7.5 16.5 8 17.5 9 17.5C10 17.5 11 17 11 16C11 14.5 11.5 13 12.5 12C13.5 11 15 10.5 16.5 10.5C17.5 10.5 18 10 18 9C18 7.5 17.5 6.5 17.5 5.5Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>

                <!-- Right: Icons -->
                <div class="d-flex justify-content-end align-items-center gap-3" style="width: 33.33%;">
                    <a href="account.html" class="text-dark"><i class="fa-regular fa-user fs-5"></i></a>
                    <a href="cart.html" class="text-dark position-relative">
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                        <span id="cart-counter" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem;">0</span>
                    </a>
                </div>
            </div>

            <!-- Bottom Row: Links -->`;

    if (content.match(oldRowRegex)) {
        content = content.replace(oldRowRegex, newHeaderHtml);
    }

    // Rewrite file
    fs.writeFileSync(file, content, 'utf-8');
});
console.log('Update script completed.');
