$files = @('index.html', 'shop.html', 'product.html', 'cart.html', 'account.html')
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $pattern = '(?s)<!-- Navbar -->.*?<\/nav>'
    $replacement = '    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-custom sticky-top py-3">
        <div class="container d-flex flex-column position-relative">
            <!-- Top Row: Logo & Icons -->
            <div class="row w-100 align-items-center m-0">
                <div class="col-4 p-0">
                    <!-- Mobile Toggle (left) -->
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="col-4 p-0 text-center">
                    <!-- Centered Logo -->
                    <a class="navbar-brand-centered text-decoration-none slivroot-logo m-0 d-inline-flex justify-content-center" href="index.html">
                        Slivroot
                        <svg class="slivroot-leaf-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 5.5C15 5.5 12.5 6.5 10.5 8.5C8.5 10.5 7.5 13 7.5 15.5C7.5 16.5 8 17.5 9 17.5C10 17.5 11 17 11 16C11 14.5 11.5 13 12.5 12C13.5 11 15 10.5 16.5 10.5C17.5 10.5 18 10 18 9C18 7.5 17.5 6.5 17.5 5.5Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
                <div class="col-4 p-0 d-flex justify-content-end align-items-center gap-3">
                    <!-- Right Icons -->
                    <a href="account.html" class="text-dark"><i class="fa-regular fa-user fs-5"></i></a>
                    <a href="cart.html" class="text-dark position-relative">
                        <i class="fa-solid fa-cart-shopping fs-5"></i>
                        <span id="cart-counter" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem;">0</span>
                    </a>
                </div>
            </div>

            <!-- Bottom Row: Links -->
            <div class="collapse navbar-collapse mt-3 w-100" id="navbarNav">
                <ul class="navbar-nav mx-auto gap-4 justify-content-center">
                    <li class="nav-item"><a class="nav-link {HOME_ACTIVE}" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link {SHOP_ACTIVE}" href="shop.html">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">Categories</a></li>
                    <li class="nav-item"><a class="nav-link {ABOUT_ACTIVE}" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link {BLOG_ACTIVE}" href="blog.html">Blog</a></li>
                    <li class="nav-item"><a class="nav-link {CONTACT_ACTIVE}" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>'
    
    if ($file -eq 'index.html') {
        $r = $replacement -replace '{HOME_ACTIVE}', 'text-primary-custom'
        $r = $r -replace '{SHOP_ACTIVE}|{ABOUT_ACTIVE}|{BLOG_ACTIVE}|{CONTACT_ACTIVE}', ''
    } elseif ($file -eq 'shop.html' -or $file -eq 'product.html') {
        $r = $replacement -replace '{SHOP_ACTIVE}', 'text-primary-custom'
        $r = $r -replace '{HOME_ACTIVE}|{ABOUT_ACTIVE}|{BLOG_ACTIVE}|{CONTACT_ACTIVE}', ''
    } else {
        $r = $replacement -replace '{HOME_ACTIVE}|{SHOP_ACTIVE}|{ABOUT_ACTIVE}|{BLOG_ACTIVE}|{CONTACT_ACTIVE}', ''
    }
    
    $newContent = [regex]::Replace($content, $pattern, $r)
    Set-Content $file -Value $newContent -Encoding UTF8
}
