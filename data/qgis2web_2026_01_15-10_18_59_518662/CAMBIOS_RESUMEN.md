# Resumen de Modificaciones de Opacidad RGBA

## Fecha de Ejecución
2026-01-15

## Objetivo
Reducir la opacidad de todos los colores RGBA en los archivos de estilo de QGIS2Web de **1.0 (100% opaco)** a **0.5 (50% transparente)**.

## Proceso

### Fase 1: Exploración
- Se identificaron **68 archivos de estilo** en la carpeta `styles/` con patrón `*_style.js`
- Se realizó búsqueda de patrones RGBA con opacidad 1.0 utilizando expresiones regulares

### Fase 2: Generación de Lista de Reemplazos
- Se creó script Python `generate_replacements.py` para procesar todos los archivos
- Se identificaron **213 instancias** de `rgba(...,1.0)` distribuidas en 52 archivos
- Se generó archivo JSON `replacements.json` con contexto de 3 líneas antes y después para garantizar precisión

### Fase 3: Aplicación de Cambios
- Se ejecutó script `apply_replacements.py` para aplicar los 213 reemplazos
- **Resultado: 100% de éxito** - Todos los reemplazos se aplicaron correctamente

## Estadísticas

| Métrica | Cantidad |
|---------|----------|
| Total de reemplazos | 213 |
| Archivos modificados | 52 |
| Tasa de éxito | 100% (213/213) |
| Errores | 0 |

## Archivos Modificados Destacados

### Redes Primarias (20+ municipios)
- `05_RedPrimaria*.js` - Sistemas de abastecimiento de agua de diferentes municipios
  - Arauel, Argelita, Aydar, Castillo de Villamalefa, Cirat, Cortes del Arenoso, Espadilla, Fanzara, Fuente la Reina, Fuentes de Aydar, Ludiente, Montanejos, Montón, Pueblo del Arenoso, Toga, Torralba del Pinar, Torrechiva, Vallat, Villahermosa del Río, Villamalur, Villanueva de Viver, Zucaína

### Infraestructura y Carreteras
- `CARRETERASCATEGORIZADAS_62_style.js` (6 cambios)
- `Carreterasprincipales_59_style.js`
- `Carreteras_ejesynombres_64_style.js`
- `REDPRIMARIACOMARCAL_65_style.js` (8 cambios)

### Áreas Protegidas y Naturales
- `ZEPA_ZonasdeEspecialProteccinparalasAves_48_style.js` (3 cambios)
- `ZEC_ZonasdeEspecialConservacin_49_style.js`
- `ParquesNaturalesProtegidos_45_style.js`
- `Microrreservas_51_style.js` (4 cambios)
- `LugardeIntersComunitario_50_style.js` (3 cambios)

### Riesgos y Recursos Hídricos
- `04_RiesgodeInundacin_16_style.js`
- `RiosyBarrancos_54_style.js`
- `RiosPrincipales_55_style.js`
- `AreasconRiesgoInundabilidad_53_style.js`

### Otros Servicios
- `CentroEducativo_68_style.js` (2 cambios)
- `CentroSanitario_67_style.js` (2 cambios)

## Ejemplo de Cambio Realizado

**Antes:**
```javascript
stroke: new ol.style.Stroke({color: 'rgba(127,189,39,1.0)', lineDash: [2.28,1.14], lineCap: 'butt', lineJoin: 'miter', width: 1.14})
```

**Después:**
```javascript
stroke: new ol.style.Stroke({color: 'rgba(127,189,39,0.5)', lineDash: [2.28,1.14], lineCap: 'butt', lineJoin: 'miter', width: 1.14})
```

## Archivos Generados

1. **generate_replacements.py** - Script para generar la lista de reemplazos
2. **replacements.json** - Archivo JSON con 213 operaciones de reemplazo (contexto incluido)
3. **apply_replacements.py** - Script para aplicar los reemplazos
4. **CAMBIOS_RESUMEN.md** - Este archivo (documentación)

## Verificación

Todos los reemplazos fueron verificados durante la ejecución:
- ✓ Se verificó que cada `oldString` existiera en el archivo antes de reemplazar
- ✓ Se aplicó el reemplazo exactamente una vez por ocurrencia
- ✓ Se mantuvieron todos los demás caracteres y formato del archivo intactos

## Impacto Visual

La reducción de opacidad del 100% al 50% resultará en:
- Elementos con mayor transparencia
- Mejor visibilidad de capas superpuestas
- Interfaz más clara cuando múltiples capas se solapan
- Preservación de toda la información de color (solo cambio de alfa)

## Notas Técnicas

- **Encoding**: UTF-8 con soporte completo para caracteres españoles (ñ, á, é, etc.)
- **Contexto**: Cada reemplazo incluía ±3 líneas de contexto para evitar coincidencias falsas
- **Patrón**: `rgba\(([^,]*,[^,]*,[^,]*),\s*1\.0\s*\)` → `rgba($1,0.5)`
- **Validación**: 100% de precisión en la identificación y aplicación de cambios

---
**Generado por**: Script de automatización
**Plataforma**: Windows PowerShell + Python 3
**Versión QGIS2Web**: 2026-01-15
