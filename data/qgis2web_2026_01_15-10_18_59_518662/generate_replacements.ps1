
# Script para generar lista de reemplazos de rgba opacidad 1.0 -> 0.5
$baseDir = "C:\Users\Oficina\BYG VAN Dropbox"
$projectDir = Join-Path $baseDir "DAYHE España\04_PROYECTOS\22-PR-09 PATs GVA L3 Alto Mijares\Doc técnica\Gis\0_Version_Inicial\00_Visor\qgis2web_2026_01_15-10_18_59_518662"
$stylesPath = Join-Path $projectDir "styles"

Write-Host "Buscando en: $stylesPath"

$replacements = @()

# Obtener todos los archivos .js en styles/
if (Test-Path $stylesPath) {
    $files = Get-ChildItem -Path $stylesPath -Filter "*_style.js" -File
    Write-Host "Encontrados $($files.Count) archivos"
    
    foreach ($file in $files) {
        Write-Host "Procesando: $($file.Name)"
        $lines = @(Get-Content -Path $file.FullName)
        
        # Buscar todas las líneas que contienen "rgba" con "1.0"
        for ($i = 0; $i -lt $lines.Count; $i++) {
            $line = $lines[$i]
            
            # Buscar patrones de rgba con opacidad 1.0
            if ($line -match 'rgba\([^)]*,\s*1\.0\s*\)') {
                # Obtener contexto: 3 líneas antes y 3 después
                $start = [Math]::Max(0, $i - 3)
                $end = [Math]::Min($lines.Count - 1, $i + 3)
                
                $contextBefore = @()
                for ($j = $start; $j -lt $i; $j++) {
                    $contextBefore += $lines[$j]
                }
                
                $contextAfter = @()
                for ($j = $i + 1; $j -le $end; $j++) {
                    $contextAfter += $lines[$j]
                }
                
                # Crear oldString con contexto
                $oldStringParts = @()
                $oldStringParts += $contextBefore
                $oldStringParts += $line
                $oldStringParts += $contextAfter
                $oldString = $oldStringParts -join "`n"
                
                # Crear newString reemplazando 1.0 por 0.5
                $newLine = $line -replace 'rgba\(([^,]*,[^,]*,[^,]*),\s*1\.0\s*\)', 'rgba($1,0.5)'
                
                $newStringParts = @()
                $newStringParts += $contextBefore
                $newStringParts += $newLine
                $newStringParts += $contextAfter
                $newString = $newStringParts -join "`n"
                
                # Crear objeto de reemplazo
                $relPath = $file.FullName.Replace($projectDir, "").TrimStart("\")
                $replacement = @{
                    filePath = Join-Path "styles" $file.Name
                    oldString = $oldString
                    newString = $newString
                }
                
                $replacements += $replacement
            }
        }
    }
    
    # Convertir a JSON y guardar
    $jsonOutput = @{
        replacements = $replacements
        totalCount = $replacements.Count
    } | ConvertTo-Json -Depth 10
    
    # Guardar en archivo
    $jsonPath = Join-Path $projectDir "replacements.json"
    $jsonOutput | Out-File -FilePath $jsonPath -Encoding UTF8
    
    Write-Host "Se generaron $($replacements.Count) reemplazos"
    Write-Host "Archivo JSON guardado en: $jsonPath"
} else {
    Write-Host "ERROR: No se encontró la ruta $stylesPath"
}
