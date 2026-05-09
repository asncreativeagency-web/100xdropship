$content = Get-Content "c:\Users\nakka_7r7fdi7\OneDrive\Desktop\webfolio-nuxtjs\public\assets\css\style.css"
$lineNum = 0
foreach ($line in $content) {
    $lineNum++
    if ($line -match "\.icon-img-100") {
        Write-Output "$($lineNum): $line"
    }
}
