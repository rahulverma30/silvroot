import os

template = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE} - Slivroot</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="d-flex flex-column min-vh-100">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-custom sticky-top py-3">
        <div class="container d-flex flex-column align-items-center position-relative">
            <!-- Top Row: Logo & Icons -->
            <div class="d-flex w-100 justify-content-center align-items-center position-relative">
                <!-- Mobile Toggle (left) -->
                <button class="navbar-toggler border-0 position-absolute start-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Centered Logo -->
                <a class="navbar-brand-centered text-decoration-none slivroot-logo m-0" href="index.html">
                    Slivroot
                    <svg class="slivroot-leaf-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 5.5C15 5.5 12.5 6.5 10.5 8.5C8.5 10.5 7.5 13 7.5 15.5C7.5 16.5 8 17.5 9 17.5C10 17.5 11 17 11 16C11 14.5 11.5 13 12.5 12C13.5 11 15 10.5 16.5 10.5C17.5 10.5 18 10 18 9C18 7.5 17.5 6.5 17.5 5.5Z" fill="currentColor"/>
                    </svg>
                </a>

                <!-- Right Icons -->
                <div class="nav-icons-container d-flex gap-3 align-items-center position-absolute end-0">
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
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">Shop</a></li>
                    <li class="nav-item"><a class="nav-link" href="shop.html">Categories</a></li>
                    <li class="nav-item"><a class="nav-link {ABOUT_ACTIVE}" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link {BLOG_ACTIVE}" href="blog.html">Blog</a></li>
                    <li class="nav-item"><a class="nav-link {CONTACT_ACTIVE}" href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-shrink-0 mb-5">
        <div class="container mt-5">
{CONTENT}
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer mt-auto bg-white border-top border-light">
        <div class="container text-center pt-3">
            <div class="row trust-badges justify-content-center mb-5 pb-4 border-bottom border-light">
                <div class="col-6 col-md-3 mb-3 mb-md-0">
                    <i class="fa-solid fa-paw"></i>
                    <p class="small fw-bold text-uppercase mb-0 mt-2">Cruelty-Free</p>
                </div>
                <div class="col-6 col-md-3 mb-3 mb-md-0">
                    <i class="fa-solid fa-ban"></i>
                    <p class="small fw-bold text-uppercase mb-0 mt-2">Paraben Free</p>
                </div>
                <div class="col-6 col-md-3">
                    <i class="fa-solid fa-leaf"></i>
                    <p class="small fw-bold text-uppercase mb-0 mt-2">100% Vegan</p>
                </div>
                <div class="col-6 col-md-3">
                    <i class="fa-solid fa-flask"></i>
                    <p class="small fw-bold text-uppercase mb-0 mt-2">Lab Tested</p>
                </div>
            </div>
            
            <div class="row mb-4 text-start">
                <div class="col-md-4 mb-4">
                    <h5 class="mb-3">Slivroot</h5>
                    <p class="text-muted small">Elevating skincare through the ancient wisdom of Ayurveda.</p>
                </div>
                <div class="col-md-4 mb-4">
                    <h6 class="text-uppercase mb-3">Quick Links</h6>
                    <div class="d-flex flex-column gap-2">
                        <a href="shop.html" class="text-muted text-decoration-none">Shop</a>
                        <a href="about.html" class="text-muted text-decoration-none">About Us</a>
                        <a href="blog.html" class="text-muted text-decoration-none">Journal</a>
                        <a href="contact.html" class="text-muted text-decoration-none">Contact</a>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <h6 class="text-uppercase mb-3">Support</h6>
                    <div class="d-flex flex-column gap-2">
                        <a href="shipping.html" class="text-muted text-decoration-none">Shipping Policy</a>
                        <a href="refund-policy.html" class="text-muted text-decoration-none">Refund Policy</a>
                        <a href="privacy-policy.html" class="text-muted text-decoration-none">Privacy Policy</a>
                        <a href="terms.html" class="text-muted text-decoration-none">Terms of Service</a>
                    </div>
                </div>
            </div>
            <p class="small text-muted">&copy; 2026 Slivroot. All rights reserved.</p>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
"""

def generate_page(filename, title, content, active_class_var=""):
    html = template.replace("{TITLE}", title)
    html = html.replace("{CONTENT}", content)
    html = html.replace("{ABOUT_ACTIVE}", "text-primary-custom" if active_class_var == "{ABOUT_ACTIVE}" else "")
    html = html.replace("{BLOG_ACTIVE}", "text-primary-custom" if active_class_var == "{BLOG_ACTIVE}" else "")
    html = html.replace("{CONTACT_ACTIVE}", "text-primary-custom" if active_class_var == "{CONTACT_ACTIVE}" else "")
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(html)

about_content = """
            <h1 class="display-4 fw-bold mb-4">Our Story</h1>
            <div class="row gx-5 mt-5">
                <div class="col-md-6 mb-4">
                    <img src="assets/journey_herbs.png" class="img-fluid rounded" alt="Herbs">
                </div>
                <div class="col-md-6">
                    <p class="lead">At Slivroot, we believe that true beauty comes from alignment with nature.</p>
                    <p class="text-muted">Rooted in the 5,000-year-old science of Ayurveda, our formulations are created using only the most potent, ethically sourced botanicals, roots, and essential oils. Our mission is to transform everyday skincare into a mindful, sacred ritual.</p>
                    <p class="text-muted">We meticulously handcraft our products to ensure that the vital life force (Prana) of our ingredients is preserved, delivering real results for your skin and deep nourishment for your soul.</p>
                </div>
            </div>
"""

blog_content = """
            <h1 class="display-4 fw-bold mb-5 text-center">The Slivroot Journal</h1>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card card-custom h-100 border-0">
                        <img src="assets/product1.png" class="card-img-top" alt="Blog 1">
                        <div class="card-body">
                            <h5 class="card-title">Ayurveda 101: Discover Your Dosha</h5>
                            <p class="card-text text-muted">Learn about Vata, Pitta, and Kapha and how to care for your unique skin type.</p>
                            <a href="#" class="link-animated-underline explore-link text-primary-custom fw-bold">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-custom h-100 border-0">
                        <img src="assets/product2.png" class="card-img-top" alt="Blog 2">
                        <div class="card-body">
                            <h5 class="card-title">The Magic of Turmeric</h5>
                            <p class="card-text text-muted">Why this golden spice is a staple in Ayurvedic skincare rituals.</p>
                            <a href="#" class="link-animated-underline explore-link text-primary-custom fw-bold">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-custom h-100 border-0">
                        <img src="assets/product3.png" class="card-img-top" alt="Blog 3">
                        <div class="card-body">
                            <h5 class="card-title">A Nighttime Ritual for Glowing Skin</h5>
                            <p class="card-text text-muted">Step-by-step guide to winding down and nourishing your skin overnight.</p>
                            <a href="#" class="link-animated-underline explore-link text-primary-custom fw-bold">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
"""

contact_content = """
            <h1 class="display-4 fw-bold mb-4 text-center">Contact Us</h1>
            <div class="row justify-content-center mt-5">
                <div class="col-md-5 mb-5 mb-md-0">
                    <h3 class="mb-4">Get in Touch</h3>
                    <p class="text-muted"><i class="fa-solid fa-location-dot me-2"></i> 123 Botanical Way, Wellness City, WC 10023</p>
                    <p class="text-muted"><i class="fa-solid fa-envelope me-2"></i> support@slivroot.com</p>
                    <p class="text-muted"><i class="fa-solid fa-phone me-2"></i> +1 (555) 123-4567</p>
                </div>
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control rounded-0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control rounded-0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message</label>
                            <textarea class="form-control rounded-0" rows="5"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary-custom px-4 w-100">Send Message</button>
                    </form>
                </div>
            </div>
"""

privacy_policy_content = """
            <h1 class="fw-bold mb-4">Privacy Policy</h1>
            <p class="text-muted mb-4">Last Updated: July 14, 2026</p>
            <div class="content-wrapper text-muted lh-lg">
                <p>At Slivroot, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our herbal wellness products.</p>
                <p>By using our website, you agree to the practices described in this Privacy Policy.</p>

                <h4 class="mt-4 text-dark fw-bold">Information We Collect</h4>
                <p>We may collect the following information:</p>
                <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Mobile number</li>
                    <li>Billing and shipping address</li>
                    <li>Payment details (processed securely through trusted payment gateways)</li>
                    <li>Order history</li>
                    <li>Device information</li>
                    <li>Browser type</li>
                    <li>IP address</li>
                    <li>Cookies and browsing behavior</li>
                </ul>

                <h4 class="mt-4 text-dark fw-bold">How We Use Your Information</h4>
                <p>Your information helps us:</p>
                <ul>
                    <li>Process and deliver your orders</li>
                    <li>Provide customer support</li>
                    <li>Send order confirmations and shipping updates</li>
                    <li>Improve our products and services</li>
                    <li>Personalize your shopping experience</li>
                    <li>Detect fraudulent transactions</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h4 class="mt-4 text-dark fw-bold">Payment Security</h4>
                <p>We do not store your debit card, credit card, UPI PIN, or banking credentials on our servers. Payments are securely processed through trusted third-party payment providers that use industry-standard encryption and security practices.</p>

                <h4 class="mt-4 text-dark fw-bold">Cookies</h4>
                <p>We use cookies to:</p>
                <ul>
                    <li>Remember your preferences</li>
                    <li>Improve website performance</li>
                    <li>Analyze website traffic</li>
                    <li>Provide a better browsing experience</li>
                </ul>
                <p>You can disable cookies through your browser settings, although some website features may not function properly.</p>

                <h4 class="mt-4 text-dark fw-bold">Sharing of Information</h4>
                <p>We do not sell or rent your personal information.</p>
                <p>We may share information only with trusted service providers such as:</p>
                <ul>
                    <li>Shipping partners</li>
                    <li>Payment gateways</li>
                    <li>Technology providers</li>
                    <li>Legal authorities when required by law</li>
                </ul>
                <p>These partners are required to protect your information.</p>

                <h4 class="mt-4 text-dark fw-bold">Data Security</h4>
                <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, misuse, or disclosure.</p>
                <p>While we strive to protect your information, no online transmission or storage method is completely secure.</p>

                <h4 class="mt-4 text-dark fw-bold">Third-Party Links</h4>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>

                <h4 class="mt-4 text-dark fw-bold">Your Rights</h4>
                <p>You may request to:</p>
                <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Update your account details</li>
                    <li>Delete your account, subject to legal requirements</li>
                </ul>
                <p>Please contact us for any such requests.</p>

                <h4 class="mt-4 text-dark fw-bold">Children's Privacy</h4>
                <p>Our website is not intended for children under the age of 18. We do not knowingly collect personal information from minors.</p>

                <h4 class="mt-4 text-dark fw-bold">Changes to This Policy</h4>
                <p>We may update this Privacy Policy from time to time. Updated versions will be posted on this page with the revised effective date.</p>

                <h4 class="mt-4 text-dark fw-bold">Contact Us</h4>
                <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
                <p><strong>Slivroot</strong><br>
                Email: support@slivroot.com<br>
                Phone: +91-XXXXXXXXXX</p>
            </div>
"""

terms_content = """
            <h1 class="fw-bold mb-4">Terms & Conditions</h1>
            <p class="text-muted mb-4">Last Updated: July 14, 2026</p>
            <div class="content-wrapper text-muted lh-lg">
                <p>Welcome to Slivroot. By accessing or using our website, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please discontinue the use of our website.</p>

                <h4 class="mt-4 text-dark fw-bold">Use of the Website</h4>
                <p>You agree to use this website only for lawful purposes and in a manner that does not violate the rights of others or restrict their use of the website.</p>

                <h4 class="mt-4 text-dark fw-bold">Product Information</h4>
                <p>We make every effort to provide accurate descriptions, images, and pricing.</p>
                <p>However:</p>
                <ul>
                    <li>Product packaging may vary.</li>
                    <li>Images are for illustration purposes only.</li>
                    <li>Product availability is subject to change without notice.</li>
                </ul>

                <h4 class="mt-4 text-dark fw-bold">Health Disclaimer</h4>
                <p>Slivroot offers herbal and wellness products intended to support general well-being.</p>
                <p>Our products are not intended to diagnose, treat, cure, or prevent any disease. Information on this website is for educational and informational purposes only and should not replace professional medical advice.</p>
                <p>Always consult a qualified healthcare professional before using any herbal supplement, especially if you are pregnant, nursing, taking medication, or have a medical condition.</p>

                <h4 class="mt-4 text-dark fw-bold">Pricing</h4>
                <p>All prices are displayed in Indian Rupees (INR) and are subject to change without prior notice.</p>
                <p>Applicable taxes and shipping charges will be displayed during checkout.</p>

                <h4 class="mt-4 text-dark fw-bold">Orders</h4>
                <p>We reserve the right to:</p>
                <ul>
                    <li>Accept or reject any order</li>
                    <li>Cancel orders due to pricing errors</li>
                    <li>Cancel suspected fraudulent transactions</li>
                    <li>Limit quantities purchased</li>
                </ul>
                <p>If an order is cancelled after payment, the applicable refund will be processed.</p>

                <h4 class="mt-4 text-dark fw-bold">Payments</h4>
                <p>Payments are securely processed through trusted payment gateways.</p>
                <p>Slivroot does not store your complete payment information.</p>

                <h4 class="mt-4 text-dark fw-bold">Shipping</h4>
                <p>Shipping timelines are estimates and may vary depending on courier availability and external circumstances.</p>

                <h4 class="mt-4 text-dark fw-bold">Returns & Refunds</h4>
                <p>Returns and refunds are governed by our Refund Policy.</p>
                <p>Please review that policy before placing an order.</p>

                <h4 class="mt-4 text-dark fw-bold">Intellectual Property</h4>
                <p>All content on this website, including:</p>
                <ul>
                    <li>Logo</li>
                    <li>Product images</li>
                    <li>Text</li>
                    <li>Graphics</li>
                    <li>Website design</li>
                    <li>Branding</li>
                </ul>
                <p>is the property of Slivroot and may not be copied, reproduced, or distributed without prior written permission.</p>

                <h4 class="mt-4 text-dark fw-bold">Limitation of Liability</h4>
                <p>Slivroot shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or products, except where required by applicable law.</p>

                <h4 class="mt-4 text-dark fw-bold">Governing Law</h4>
                <p>These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts in India.</p>

                <h4 class="mt-4 text-dark fw-bold">Changes to These Terms</h4>
                <p>We reserve the right to update these Terms & Conditions at any time. Continued use of the website after updates constitutes acceptance of the revised terms.</p>

                <h4 class="mt-4 text-dark fw-bold">Contact Us</h4>
                <p>If you have any questions regarding these Terms & Conditions, please contact us:</p>
                <p><strong>Slivroot</strong><br>
                Email: support@slivroot.com<br>
                Phone: +91-XXXXXXXXXX</p>
            </div>
"""

refund_content = """
            <h1 class="fw-bold mb-4">Refund & Return Policy</h1>
            <p class="text-muted mb-4">Last Updated: July 14, 2026</p>
            <div class="content-wrapper text-muted lh-lg">
                <p>At Slivroot, customer satisfaction is important to us. We strive to deliver high-quality herbal wellness products.</p>
                <p>Please read our return and refund policy carefully.</p>

                <h4 class="mt-4 text-dark fw-bold">Return Eligibility</h4>
                <p>Returns are accepted only if:</p>
                <ul>
                    <li>You received the wrong product.</li>
                    <li>The product was damaged during transit.</li>
                    <li>The item is defective upon delivery.</li>
                </ul>
                <p>Requests must be made within 48 hours of receiving the order.</p>

                <h4 class="mt-4 text-dark fw-bold">Non-Returnable Products</h4>
                <p>Due to the nature of herbal and wellness products, we generally do not accept returns for:</p>
                <ul>
                    <li>Opened products</li>
                    <li>Used products</li>
                    <li>Products with broken seals</li>
                    <li>Products returned due to change of mind</li>
                    <li>Products damaged due to customer misuse</li>
                </ul>
                <p>This policy helps maintain product quality and customer safety.</p>

                <h4 class="mt-4 text-dark fw-bold">Damaged or Incorrect Products</h4>
                <p>If you receive a damaged or incorrect product:</p>
                <ul>
                    <li>Contact us within 48 hours.</li>
                    <li>Share clear photographs of the product and packaging.</li>
                    <li>Include your order number.</li>
                </ul>
                <p>Our team will review your request and provide further assistance.</p>

                <h4 class="mt-4 text-dark fw-bold">Refund Process</h4>
                <p>Once your request is approved:</p>
                <ul>
                    <li>Refunds will be processed to the original payment method.</li>
                    <li>Processing may take several business days depending on your payment provider.</li>
                </ul>

                <h4 class="mt-4 text-dark fw-bold">Refund Timeline</h4>
                <p>Approved refunds are generally completed within 5–10 business days.</p>
                <p>The exact timeline depends on your bank or payment provider.</p>

                <h4 class="mt-4 text-dark fw-bold">Order Cancellation</h4>
                <p>Orders may be cancelled before shipment.</p>
                <p>Once an order has been shipped, cancellation requests may not be accepted.</p>

                <h4 class="mt-4 text-dark fw-bold">Exchange Policy</h4>
                <p>Eligible products may be replaced if they are defective, damaged, or incorrectly delivered, subject to product availability.</p>

                <h4 class="mt-4 text-dark fw-bold">Contact Us</h4>
                <p>For return or refund assistance:</p>
                <p>Email: support@slivroot.com<br>
                Phone: +91-XXXXXXXXXX</p>
            </div>
"""

shipping_content = """
            <h1 class="fw-bold mb-4">Shipping Policy</h1>
            <p class="text-muted mb-4">Last Updated: July 14, 2026</p>
            <div class="content-wrapper text-muted lh-lg">
                <p>Thank you for shopping with Slivroot. We are committed to delivering your herbal wellness products safely and efficiently.</p>
                
                <h4 class="mt-4 text-dark fw-bold">Order Processing</h4>
                <p>Orders are generally processed within 1–2 business days after successful payment confirmation.</p>
                <p>Orders placed on weekends or public holidays will be processed on the next working day.</p>

                <h4 class="mt-4 text-dark fw-bold">Shipping Coverage</h4>
                <p>We currently deliver across most locations within India.</p>
                <p>Availability may vary depending on the serviceability of your delivery PIN code.</p>

                <h4 class="mt-4 text-dark fw-bold">Estimated Delivery Time</h4>
                <p>Estimated delivery timelines are:</p>
                <ul>
                    <li>Metro Cities: 2–5 business days</li>
                    <li>Tier 2 & Tier 3 Cities: 3–7 business days</li>
                    <li>Remote Locations: 5–10 business days</li>
                </ul>
                <p>Actual delivery times may vary due to weather conditions, courier delays, or other unforeseen circumstances.</p>

                <h4 class="mt-4 text-dark fw-bold">Shipping Charges</h4>
                <p>Shipping charges, if applicable, will be displayed during checkout before payment.</p>
                <p>We may also offer free shipping on eligible orders as part of promotional campaigns.</p>

                <h4 class="mt-4 text-dark fw-bold">Order Tracking</h4>
                <p>Once your order is shipped, a tracking number and shipping confirmation will be shared via email or SMS, allowing you to monitor your shipment.</p>

                <h4 class="mt-4 text-dark fw-bold">Delivery Delays</h4>
                <p>Occasionally, deliveries may be delayed due to:</p>
                <ul>
                    <li>Weather conditions</li>
                    <li>Public holidays</li>
                    <li>Natural disasters</li>
                    <li>Courier network issues</li>
                    <li>High order volumes</li>
                </ul>
                <p>We appreciate your patience during such situations.</p>

                <h4 class="mt-4 text-dark fw-bold">Incorrect Shipping Address</h4>
                <p>Customers are responsible for providing an accurate shipping address.</p>
                <p>Slivroot is not responsible for delays or additional charges resulting from incorrect or incomplete address details.</p>

                <h4 class="mt-4 text-dark fw-bold">Damaged Packages</h4>
                <p>If your package appears damaged upon delivery:</p>
                <ul>
                    <li>Take photographs before opening.</li>
                    <li>Contact our support team within 48 hours of delivery.</li>
                </ul>
                <p>We will review the issue and provide an appropriate resolution.</p>

                <h4 class="mt-4 text-dark fw-bold">Lost Shipments</h4>
                <p>If your shipment has not arrived within the expected delivery period, please contact us. We will coordinate with the courier partner to investigate and resolve the issue.</p>

                <h4 class="mt-4 text-dark fw-bold">Contact Support</h4>
                <p>Email: support@slivroot.com<br>
                Phone: +91-XXXXXXXXXX</p>
            </div>
"""

generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\about.html", "About Us", about_content, "{ABOUT_ACTIVE}")
generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\blog.html", "Journal", blog_content, "{BLOG_ACTIVE}")
generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\contact.html", "Contact", contact_content, "{CONTACT_ACTIVE}")

generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\privacy-policy.html", "Privacy Policy", privacy_policy_content)
generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\terms.html", "Terms & Conditions", terms_content)
generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\refund-policy.html", "Return & Refund Policy", refund_content)
generate_page(r"C:\Users\rahul\OneDrive\Desktop\slivroot\shipping.html", "Shipping Policy", shipping_content)

print("HTML files generated successfully.")
