// Sistema de hover para capas interactivas del mapa
var highlightedFeature = null;
var highlightStyle = null;

// Función para crear un estilo de resalte granate
function createHighlightStyle(feature, baseStyle) {
    // Color granate traslucido con más énfasis en borde
    var highlightStyle = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(92, 60, 60, 0.9)',  // Granate más opaco
                width: 4,  // Borde más grueso
                lineCap: 'round',
                lineJoin: 'round'
            }),
            fill: new ol.style.Fill({
                color: 'rgba(92, 60, 60, 0.15)'  // Relleno muy traslucido
            }),
            zIndex: 1000
        })
    ];
    return highlightStyle;
}

// Manejar hover sobre features
map.on('pointermove', function(evt) {
    if (evt.dragging) {
        return;
    }
    
    var pixel = evt.pixel;
    var hit = false;
    
    // Buscar feature bajo el puntero
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        // Si es una capa interactiva
        if (layer && layer.get('interactive')) {
            hit = true;
            
            // Si es un feature diferente al actual
            if (feature !== highlightedFeature) {
                // Limpiar resalte anterior
                if (highlightedFeature) {
                    highlightedFeature.setStyle(null);
                }
                
                // Aplicar nuevo resalte
                highlightedFeature = feature;
                var currentStyle = feature.getStyle();
                var newStyle = createHighlightStyle(feature, currentStyle);
                feature.setStyle(newStyle);
            }
            
            return true;
        }
    });
    
    // Si no hay feature bajo el puntero, limpiar resalte
    if (!hit && highlightedFeature) {
        highlightedFeature.setStyle(null);
        highlightedFeature = null;
    }
    
    // Cambiar cursor
    map.getViewport().style.cursor = hit ? 'pointer' : '';
});

// Limpiar resalte cuando se hace click
map.on('click', function(evt) {
    if (highlightedFeature) {
        highlightedFeature.setStyle(null);
        highlightedFeature = null;
    }
});

// Limpiar cuando se hace scroll/zoom
map.on('movestart', function() {
    if (highlightedFeature) {
        highlightedFeature.setStyle(null);
        highlightedFeature = null;
    }
});

console.log('Sistema de hover granate inicializado');
