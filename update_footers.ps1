$files = @('index.html', 'shop.html', 'product.html', 'cart.html', 'account.html')
foreach ($file in $files) {
    $content = Get-Content $file -Raw
    $pattern = '(?s)<div class="col-md-4 mb-4">\s*<h6 class="text-uppercase mb-3">Quick Links</h6>.*?</div>\s*</div>'
    
    $newContent = [regex]::Replace($content, $pattern, $footerReplacement)
    Set-Content $file -Value $newContent -Encoding UTF8
}
