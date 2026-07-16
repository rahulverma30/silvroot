document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Global Modals Injection ---
    const injectModals = () => {
        const modalContainer = document.createElement('div');
        modalContainer.innerHTML = `
            <!-- Add to Cart Modal -->
            <div class="modal fade" id="addToCartModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content rounded-0 border-0">
                        <div class="modal-header border-0 bg-light">
                            <h5 class="modal-title fw-bold text-success"><i class="fa-solid fa-check-circle me-2"></i>Success</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body py-4 text-center">
                            <p class="fs-5 mb-0">Item added to your cart successfully!</p>
                        </div>
                        <div class="modal-footer border-0 justify-content-center">
                            <button type="button" class="btn btn-outline-custom px-4" data-bs-dismiss="modal">Continue Shopping</button>
                            <a href="cart.html" class="btn btn-primary-custom px-4">View Cart</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Logout Modal -->
            <div class="modal fade" id="logoutModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content rounded-0 border-0">
                        <div class="modal-header border-0 bg-light">
                            <h5 class="modal-title fw-bold">Logout Confirmation</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body py-4 text-center">
                            <p class="fs-5 mb-0">Are you sure you want to log out?</p>
                        </div>
                        <div class="modal-footer border-0 justify-content-center">
                            <button type="button" class="btn btn-outline-custom px-4" data-bs-dismiss="modal">Cancel</button>
                            <a href="login.html" class="btn btn-primary-custom px-4">Confirm Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Details Modal -->
            <div class="modal fade" id="orderDetailsModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content rounded-0 border-0">
                        <div class="modal-header border-0 bg-light">
                            <h5 class="modal-title fw-bold">Order Receipt</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Order ID:</span>
                                <strong>#HB-MOCK</strong>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span class="text-muted">Date:</span>
                                <span>Just Now</span>
                            </div>
                            <hr class="border-light">
                            <div class="d-flex justify-content-between mb-2">
                                <span>1x Herbal Face Serum</span>
                                <span>₹48.00</span>
                            </div>
                            <div class="d-flex justify-content-between mb-2">
                                <span>Shipping</span>
                                <span>₹100.00</span>
                            </div>
                            <hr class="border-dark my-2">
                            <div class="d-flex justify-content-between fw-bold">
                                <span>Total</span>
                                <span class="text-primary-custom">₹148.00</span>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-primary-custom w-100" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalContainer);
    };

    injectModals();

    // --- 2. Add to Cart Interception ---
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartCounter = document.getElementById('cart-counter');
    let count = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            count++;
            if(cartCounter) {
                cartCounter.textContent = count;
                cartCounter.classList.add('animate-pop');
                setTimeout(() => cartCounter.classList.remove('animate-pop'), 300);
            }
            const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
            modal.show();
        });
    });

    // --- 3. Logout Interception ---
    const logoutLinks = document.querySelectorAll('a.nav-link.text-danger');
    logoutLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase() === 'logout') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const modal = new bootstrap.Modal(document.getElementById('logoutModal'));
                modal.show();
            });
        }
    });

    // --- 4. Order Details Interception ---
    const viewOrderLinks = document.querySelectorAll('.view-order-details');
    viewOrderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
            modal.show();
        });
    });

    // --- 5. Dynamic Cart Logic ---
    const updateCartTotals = () => {
        let subtotal = 0;
        document.querySelectorAll('tbody tr').forEach(row => {
            const priceText = row.querySelector('.line-price')?.textContent || '';
            const match = priceText.match(/₹([\d.]+)/);
            if (match) {
                subtotal += parseFloat(match[1]);
            }
        });

        const subtotalEl = document.getElementById('cart-subtotal');
        const shippingEl = document.getElementById('cart-shipping');
        const totalEl = document.getElementById('cart-total');

        if (subtotalEl && shippingEl && totalEl) {
            subtotalEl.textContent = '₹' + subtotal.toFixed(2);
            let shipping = 0;
            
            // Shipping logic: if subtotal < 100 and > 0, shipping is 100, else free
            if (subtotal > 0 && subtotal < 100) {
                shipping = 100;
                shippingEl.textContent = '₹100.00';
            } else if (subtotal === 0) {
                shippingEl.textContent = '₹0.00';
            } else {
                shippingEl.textContent = 'Free';
            }

            const finalTotal = subtotal + shipping;
            totalEl.textContent = '₹' + finalTotal.toFixed(2);
        }
    };

    const updateQtyButtons = (input) => {
        const minusBtn = input.previousElementSibling;
        const val = parseInt(input.value) || 0;
        if (val <= 1) {
            minusBtn.setAttribute('disabled', 'disabled');
        } else {
            minusBtn.removeAttribute('disabled');
        }
    };

    // Initialize buttons
    document.querySelectorAll('.qty-input').forEach(input => {
        updateQtyButtons(input);
        
        input.addEventListener('change', function() {
            let val = parseInt(this.value) || 1;
            if (val < 1) val = 1;
            this.value = val;
            updateQtyButtons(this);
            // Optionally update line price here if manual entry is supported
        });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let val = parseInt(input.value) || 0;
            input.value = val + 1;
            updateQtyButtons(input);
            
            // Update line price based on original unit price
            const tr = this.closest('tr');
            const unitPriceMatch = tr.querySelector('td:nth-child(3)').textContent.match(/₹([\d.]+)/);
            if (unitPriceMatch) {
                const unitPrice = parseFloat(unitPriceMatch[1]);
                const linePriceEl = tr.querySelector('.line-price');
                // The structure has the trash icon inside, so we need to preserve it
                const iconHTML = '<button class="btn btn-link text-danger p-0 ms-3 remove-item"><i class="fa-solid fa-trash"></i></button>';
                linePriceEl.innerHTML = '₹' + (unitPrice * (val + 1)).toFixed(2) + iconHTML;
                attachRemoveListener(linePriceEl.querySelector('.remove-item'));
            }
            updateCartTotals();
        });
    });

    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let val = parseInt(input.value) || 0;
            if (val > 1) {
                input.value = val - 1;
                updateQtyButtons(input);
                
                // Update line price
                const tr = this.closest('tr');
                const unitPriceMatch = tr.querySelector('td:nth-child(3)').textContent.match(/₹([\d.]+)/);
                if (unitPriceMatch) {
                    const unitPrice = parseFloat(unitPriceMatch[1]);
                    const linePriceEl = tr.querySelector('.line-price');
                    const iconHTML = '<button class="btn btn-link text-danger p-0 ms-3 remove-item"><i class="fa-solid fa-trash"></i></button>';
                    linePriceEl.innerHTML = '₹' + (unitPrice * (val - 1)).toFixed(2) + iconHTML;
                    attachRemoveListener(linePriceEl.querySelector('.remove-item'));
                }
                updateCartTotals();
            }
        });
    });

    const attachRemoveListener = (btn) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const tr = this.closest('tr');
            tr.remove();
            updateCartTotals();
        });
    };

    document.querySelectorAll('.remove-item').forEach(btn => {
        attachRemoveListener(btn);
    });

    // Run once on load to establish baseline
    if (document.getElementById('cart-subtotal')) {
        updateCartTotals();
    }

    // --- 6. Custom Sort Dropdown Logic ---
    const sortOptions = document.querySelectorAll('.sort-option');
    const sortDropdownText = document.getElementById('sortDropdownText');
    
    if (sortOptions.length > 0 && sortDropdownText) {
        sortOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                // Update button text
                sortDropdownText.textContent = this.getAttribute('data-value');
                
                // Update active state
                sortOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});
