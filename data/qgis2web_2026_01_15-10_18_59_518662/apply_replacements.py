#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para aplicar los reemplazos de opacidad RGBA en archivos de estilo
"""
import json
import os

# Path to the JSON file with replacements
json_file = r'c:\Users\Oficina\BYG VAN Dropbox\DAYHE España\04_PROYECTOS\22-PR-09 PATs GVA L3 Alto Mijares\Doc técnica\Gis\0_Version_Inicial\00_Visor\qgis2web_2026_01_15-10_18_59_518662\replacements.json'
base_dir = r'c:\Users\Oficina\BYG VAN Dropbox\DAYHE España\04_PROYECTOS\22-PR-09 PATs GVA L3 Alto Mijares\Doc técnica\Gis\0_Version_Inicial\00_Visor\qgis2web_2026_01_15-10_18_59_518662'

# Load replacements
with open(json_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

replacements = data['replacements']
print(f"Total replacements to apply: {len(replacements)}")

# Apply replacements
success_count = 0
error_count = 0
failed_files = {}

for idx, replacement in enumerate(replacements, 1):
    file_path = os.path.join(base_dir, replacement['filePath'])
    old_string = replacement['oldString']
    new_string = replacement['newString']
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if old_string exists
        if old_string in content:
            # Replace
            new_content = content.replace(old_string, new_string)
            
            # Write the file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            success_count += 1
            print(f"[{idx}/{len(replacements)}] ✓ {os.path.basename(file_path)}")
        else:
            error_count += 1
            if file_path not in failed_files:
                failed_files[file_path] = "String not found"
            print(f"[{idx}/{len(replacements)}] ✗ {os.path.basename(file_path)} - String not found")
    
    except Exception as e:
        error_count += 1
        if file_path not in failed_files:
            failed_files[file_path] = str(e)
        print(f"[{idx}/{len(replacements)}] ✗ {os.path.basename(file_path)} - Error: {e}")

print(f"\n{'='*60}")
print(f"Summary:")
print(f"  Success: {success_count}/{len(replacements)}")
print(f"  Errors:  {error_count}/{len(replacements)}")
print(f"{'='*60}")

if failed_files:
    print("\nFailed files:")
    for file_path, error in failed_files.items():
        print(f"  - {file_path}: {error}")
