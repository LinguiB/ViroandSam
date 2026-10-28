$f = "C:\Users\pasan\Documents\MSA Courses\ENG201\Interactive Webpages\index.html"
$v = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

# Show all recipe lines (pipe-separated) with their emoji field
Write-Host "=== ALL RECIPE EMOJIS (name|emoji|...) ==="
$parts = $v -split "\|"
$recipeLine = ""
$results = @()
$lines = $v -split "`n"
foreach ($l in $lines) {
    if ($l -match '^\S[^\|]+\|.{1,10}\|[0-9]') {
        $cols = $l -split "\|"
        if ($cols.Count -ge 3) {
            $results += "NAME: $($cols[0].Substring([Math]::Max(0,$cols[0].Length-50)))  EMOJI: $($cols[1])"
        }
    }
}
$results | Select-Object -First 80 | ForEach-Object { Write-Host $_ }
