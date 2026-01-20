#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import json
import re
from pathlib import Path

# Rutas
base_dir = r"C:\Users\Oficina\BYG VAN Dropbox"
project_dir = base_dir + r"\DAYHE España\04_PROYECTOS\22-PR-09 PATs GVA L3 Alto Mijares\Doc técnica\Gis\0_Version_Inicial\00_Visor\qgis2web_2026_01_15-10_18_59_518662"
styles_path = os.path.join(project_dir, "styles")

replacements = []

print(f"Buscando en: {styles_path}")

# Obtener todos los archivos .js en styles/
if os.path.isdir(styles_path):
    files = [f for f in os.listdir(styles_path) if f.endswith('_style.js')]
    print(f"Encontrados {len(files)} archivos")
    
    for filename in sorted(files):
        filepath = os.path.join(styles_path, filename)
        print(f"Procesando: {filename}")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        # Buscar patrones de rgba con opacidad 1.0
        for i, line in enumerate(lines):
            if re.search(r'rgba\([^)]*,\s*1\.0\s*\)', line):
                # Obtener contexto: 3 líneas antes y 3 después
                start = max(0, i - 3)
                end = min(len(lines) - 1, i + 3)
                
                context_before = lines[start:i]
                context_after = lines[i+1:end+1]
                
                # Crear oldString con contexto
                old_string = ''.join(context_before) + line + ''.join(context_after)
                
                # Crear newString reemplazando 1.0 por 0.5
                new_line = re.sub(r'rgba\(([^,]*,[^,]*,[^,]*),\s*1\.0\s*\)', 
                                  r'rgba(\1,0.5)', line)
                
                new_string = ''.join(context_before) + new_line + ''.join(context_after)
                
                # Crear objeto de reemplazo
                replacement = {
                    "filePath": os.path.join("styles", filename),
                    "oldString": old_string.rstrip('\n'),
                    "newString": new_string.rstrip('\n')
                }
                
                replacements.append(replacement)
    
    # Convertir a JSON y guardar
    json_output = {
        "replacements": replacements,
        "totalCount": len(replacements)
    }
    
    json_path = os.path.join(project_dir, "replacements.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(json_output, f, indent=2, ensure_ascii=False)
    
    print(f"\nSe generaron {len(replacements)} reemplazos")
    print(f"Archivo JSON guardado en: {json_path}")
else:
    print(f"ERROR: No se encontró la ruta {styles_path}")
