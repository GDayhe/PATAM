// Estructura global para mapear capas
var layerMap = {};
var groupMap = {};  // Mapeo de grupos por nombre
var registeredLayers = [];

// Función para buscar una capa por su nombre (incluye búsqueda dentro de grupos)
function findLayerByName(name) {
    if (!name) return null;
    
    // Intenta búsqueda exacta primero en layerMap
    if (layerMap[name]) {
        return layerMap[name];
    }
    
    // Normaliza el nombre buscado
    var normalizedSearchName = name.trim().toLowerCase().replace(/\s+/g, ' ');
    
    // Intenta búsqueda exacta en layerMap con variaciones
    for (var key in layerMap) {
        var normalizedKey = key.trim().toLowerCase().replace(/\s+/g, ' ');
        if (normalizedKey === normalizedSearchName) {
            return layerMap[key];
        }
    }
    
    // Búsqueda recursiva dentro de grupos
    function searchInLayers(layers) {
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            var title = layer.get('title') || '';
            var cleanTitle = title.replace(/<[^>]*>/g, '').trim();
            var popupTitle = layer.get('popuplayertitle') || '';
            
            // Búsqueda exacta
            if (cleanTitle === name || popupTitle === name) {
                layerMap[cleanTitle] = layer;
                return layer;
            }
            
            // Búsqueda normalizada
            var normalizedTitle = cleanTitle.toLowerCase().replace(/\s+/g, ' ');
            if (normalizedTitle === normalizedSearchName) {
                layerMap[cleanTitle] = layer;
                return layer;
            }
            
            // Si es un grupo, buscar dentro
            if (layer.getLayers && layer.getLayers()) {
                var found = searchInLayers(layer.getLayers().getArray());
                if (found) return found;
            }
        }
        return null;
    }
    
    var allLayers = map.getLayers().getArray();
    return searchInLayers(allLayers);
}

// Registrar todos los grupos recursivamente
function registerGroups(layer) {
    if (layer.constructor.name === 'ol.layer.Group' || layer.constructor.name === 'LayerGroup') {
        var groupTitle = layer.get('title') || '';
        if (groupTitle) {
            groupMap[groupTitle] = layer;
            console.log('  Grupo registrado:', groupTitle);
        }
        
        // Registrar grupos anidados
        var childLayers = layer.getLayers();
        if (childLayers) {
            childLayers.forEach(function(childLayer) {
                registerGroups(childLayer);
            });
        }
    }
}

// Función auxiliar para obtener todos los nombres de capas en un grupo
function getAllLayerNamesInGroup(groupData) {
    var layers = [];
    if (groupData.layers) {
        layers = layers.concat(groupData.layers);
    }
    if (groupData.subgroups) {
        groupData.subgroups.forEach(function(subgroup) {
            layers = layers.concat(getAllLayerNamesInGroup(subgroup));
        });
    }
    return layers;
}

// Función para encontrar un grupo de OpenLayers que contiene los layers de un subgrupo JSON
function findLayerGroupForSubgroup(subgroup) {
    var layerNames = getAllLayerNamesInGroup(subgroup);
    if (layerNames.length === 0) return null;
    
    console.log('  Buscando grupo para:', subgroup.name, 'con capas:', layerNames);
    
    // Intenta 1: búsqueda directa por nombre
    if (groupMap[subgroup.name]) {
        console.log('  ✓ Encontrado por nombre directo');
        return groupMap[subgroup.name];
    }
    
    // Intenta 2: busca en todos los grupos registrados
    for (var groupName in groupMap) {
        var group = groupMap[groupName];
        var groupLayerNames = [];
        
        // Obtén los nombres de todas las capas del grupo
        if (group.getLayers) {
            group.getLayers().forEach(function(layer) {
                var title = layer.get('title') || '';
                var cleanTitle = title.replace(/<[^>]*>/g, '').trim();
                groupLayerNames.push(cleanTitle);
            });
        }
        
        console.log('  Comparando con grupo:', groupName, 'capas:', groupLayerNames);
        
        // Verifica si contiene TODOS los layers del subgrupo
        var allLayersFound = layerNames.every(function(layerName) {
            return groupLayerNames.some(function(groupLayerName) {
                var match = groupLayerName === layerName || 
                           groupLayerName.toLowerCase() === layerName.toLowerCase();
                if (match) {
                    console.log('    ✓ Capa encontrada:', layerName);
                }
                return match;
            });
        });
        
        // Si contiene exactamente las mismas capas o más
        if (allLayersFound && layerNames.length <= groupLayerNames.length) {
            console.log('  ✓ Grupo encontrado:', groupName);
            return group;
        }
    }
    
    console.log('  ✗ No se encontró grupo para:', subgroup.name);
    return null;
}

function getAllLayersInGroup(groupData) {
    var layerNames = getAllLayerNamesInGroup(groupData);
    var layers = [];
    var missingLayers = [];
    
    layerNames.forEach(function(layerName) {
        var layer = findLayerByName(layerName);
        if (layer) {
            console.log('    ✓ Encontrada:', layerName);
            layers.push(layer);
        } else {
            console.log('    ✗ No encontrada:', layerName);
            missingLayers.push(layerName);
        }
    });
    
    if (missingLayers.length > 0) {
        console.warn('En grupo "' + (groupData.name || 'unnamed') + '": No se encontraron ' + missingLayers.length + ' capas');
        missingLayers.forEach(function(name) {
            console.warn('  - ' + name);
        });
    }
    
    return layers;
}

// Crear un item de leyenda
function createLegendItem(layerName) {
    var layer = findLayerByName(layerName);
    if (!layer) {
        return null;
    }
    
    var title = layer.get('title') || '';
    var legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    
    var symbol = document.createElement('div');
    symbol.className = 'legend-item-symbol';
    
    if (title.includes('<img')) {
        // Extrae solo la etiqueta img, sin el texto adicional
        var imgMatch = title.match(/<img[^>]*>/);
        if (imgMatch) {
            symbol.innerHTML = imgMatch[0];
        } else {
            symbol.style.backgroundColor = 'rgba(192, 192, 192, 0.5)';
        }
    } else {
        symbol.style.backgroundColor = 'rgba(192, 192, 192, 0.5)';
    }
    
    var label = document.createElement('span');
    label.className = 'legend-item-label';
    label.textContent = layerName;
    
    legendItem.appendChild(symbol);
    legendItem.appendChild(label);
    
    legendItem.addEventListener('click', function(e) {
        e.stopPropagation();
        layer.setVisible(!layer.getVisible());
        legendItem.classList.toggle('disabled', !layer.getVisible());
    });
    
    if (!layer.getVisible()) {
        legendItem.classList.add('disabled');
    }
    
    return legendItem;
}

// Crear estructura de grupos
function createGroupStructure(groupData, container, level = 1) {
    if (groupData.layers && groupData.layers.length > 0) {
        var itemsContainer = document.createElement('div');
        itemsContainer.className = 'legend-items-group level-' + level;
        groupData.layers.forEach(function(layerName) {
            var item = createLegendItem(layerName);
            if (item) {
                itemsContainer.appendChild(item);
            }
        });
        container.appendChild(itemsContainer);
    }
    
    if (groupData.subgroups && groupData.subgroups.length > 0) {
        groupData.subgroups.forEach(function(subgroup) {
            var subgroupContainer = document.createElement('div');
            subgroupContainer.className = 'legend-group level-' + level;
            
            var subgroupHeader = document.createElement('div');
            subgroupHeader.className = 'legend-group-header level-' + level;
            
            var headerContent = document.createElement('div');
            headerContent.className = 'legend-header-content';
            
            var visibilityToggle = document.createElement('span');
            visibilityToggle.className = 'legend-group-visibility';
            visibilityToggle.innerHTML = '●';
            visibilityToggle.title = 'Click para apagar/encender este grupo';
            
            var expandToggle = document.createElement('span');
            expandToggle.className = 'legend-group-toggle';
            expandToggle.innerHTML = '▼';
            
            var groupName = document.createElement('span');
            groupName.className = 'legend-group-name';
            groupName.textContent = subgroup.name;
            
            headerContent.appendChild(visibilityToggle);
            headerContent.appendChild(expandToggle);
            headerContent.appendChild(groupName);
            subgroupHeader.appendChild(headerContent);
            
            var subgroupContent = document.createElement('div');
            subgroupContent.className = 'legend-group-items level-' + level;
            
            // Obtener capas INICIALMENTE para el estado inicial
            var groupLayers = getAllLayersInGroup(subgroup);
            
            visibilityToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                console.log('Click en visibilidad del grupo:', subgroup.name);
                
                // Intenta 1: Buscar el LayerGroup de OpenLayers que contiene este subgrupo
                var groupToToggle = findLayerGroupForSubgroup(subgroup);
                
                if (groupToToggle) {
                    console.log('Grupo encontrado, toggleando grupo:', subgroup.name);
                    var newState = !groupToToggle.getVisible();
                    groupToToggle.setVisible(newState);
                    updateVisibilityIcon(visibilityToggle, newState);
                    subgroupHeader.classList.toggle('group-disabled', !newState);
                } else {
                    // Intenta 2: Si no es un grupo directo, togglea las capas individuales
                    console.log('Grupo no encontrado como LayerGroup, toggleando capas individuales');
                    var layersInGroup = getAllLayersInGroup(subgroup);
                    
                    if (layersInGroup.length === 0) {
                        console.warn('No se encontraron capas en:', subgroup.name);
                        return;
                    }
                    
                    // Obtén el estado actual (si alguna está visible)
                    var anyVisible = layersInGroup.some(function(layer) {
                        return layer.getVisible();
                    });
                    
                    // Toggle: apaga si hay algo visible, enciende si está todo apagado
                    var newState = !anyVisible;
                    
                    layersInGroup.forEach(function(layer) {
                        layer.setVisible(newState);
                    });
                    
                    updateVisibilityIcon(visibilityToggle, newState);
                    subgroupHeader.classList.toggle('group-disabled', !newState);
                    
                    console.log('Capas toggleadas a:', newState);
                }
            });
            
            groupName.addEventListener('click', function() {
                subgroupContent.classList.toggle('collapsed');
                subgroupHeader.classList.toggle('collapsed');
            });
            
            expandToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                subgroupContent.classList.toggle('collapsed');
                subgroupHeader.classList.toggle('collapsed');
            });
            
            subgroupContainer.appendChild(subgroupHeader);
            subgroupContainer.appendChild(subgroupContent);
            createGroupStructure(subgroup, subgroupContent, level + 1);
            
            var initialAllVisible = groupLayers.every(function(layer) {
                return layer.getVisible();
            });
            updateVisibilityIcon(visibilityToggle, initialAllVisible);
            if (!initialAllVisible) {
                subgroupHeader.classList.add('group-disabled');
            }
            
            container.appendChild(subgroupContainer);
        });
    }
}

function updateVisibilityIcon(icon, isVisible) {
    icon.innerHTML = isVisible ? '●' : '○';
    icon.style.color = isVisible ? '#333' : '#999';
}

function updateGroupVisibility(container, isVisible) {
    var items = container.querySelectorAll('.legend-item');
    items.forEach(function(item) {
        if (!isVisible) {
            item.classList.add('disabled');
        } else {
            item.classList.remove('disabled');
        }
    });
}

// Capas base (radio buttons)
function createBaseLayersSection(mainGroup, container) {
    var groupContainer = document.createElement('div');
    groupContainer.className = 'legend-group legend-base-layers level-0';
    
    var groupHeader = document.createElement('div');
    groupHeader.className = 'legend-group-header level-0';
    
    var headerContent = document.createElement('div');
    headerContent.className = 'legend-header-content';
    
    var expandToggle = document.createElement('span');
    expandToggle.className = 'legend-group-toggle';
    expandToggle.innerHTML = '▼';
    
    var groupName = document.createElement('span');
    groupName.className = 'legend-group-name';
    groupName.textContent = mainGroup.name;
    
    headerContent.appendChild(expandToggle);
    headerContent.appendChild(groupName);
    groupHeader.appendChild(headerContent);
    
    var groupContent = document.createElement('div');
    groupContent.className = 'legend-group-items legend-base-layers-content level-0';
    
    groupName.addEventListener('click', function() {
        groupContent.classList.toggle('collapsed');
        groupHeader.classList.toggle('collapsed');
    });
    
    expandToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        groupContent.classList.toggle('collapsed');
        groupHeader.classList.toggle('collapsed');
    });
    
    groupContainer.appendChild(groupHeader);
    groupContainer.appendChild(groupContent);
    
    if (mainGroup.subgroups) {
        mainGroup.subgroups.forEach(function(subgroup) {
            var radioContainer = document.createElement('div');
            radioContainer.className = 'legend-base-layer-item';
            
            var layerName = subgroup.layers[0];
            var layer = findLayerByName(layerName);
            
            if (layer) {
                var radioId = 'base-layer-' + subgroup.name.replace(/\s+/g, '-');
                var radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'base-layers';
                radio.id = radioId;
                radio.value = layerName;
                radio.checked = layer.getVisible();
                
                radio.addEventListener('change', function() {
                    if (mainGroup.subgroups) {
                        mainGroup.subgroups.forEach(function(sg) {
                            var l = findLayerByName(sg.layers[0]);
                            if (l) {
                                l.setVisible(false);
                            }
                        });
                    }
                    layer.setVisible(true);
                });
                
                var label = document.createElement('label');
                label.htmlFor = radioId;
                label.className = 'legend-base-layer-label';
                label.textContent = subgroup.name;
                
                radioContainer.appendChild(radio);
                radioContainer.appendChild(label);
                groupContent.appendChild(radioContainer);
            }
        });
    }
    
    container.appendChild(groupContainer);
}

// Grupo normal
function createNormalGroup(mainGroup, container) {
    var groupContainer = document.createElement('div');
    groupContainer.className = 'legend-group level-0';
    
    var groupHeader = document.createElement('div');
    groupHeader.className = 'legend-group-header level-0';
    
    var headerContent = document.createElement('div');
    headerContent.className = 'legend-header-content';
    
    var mainVisibilityToggle = document.createElement('span');
    mainVisibilityToggle.className = 'legend-group-visibility';
    mainVisibilityToggle.innerHTML = '●';
    mainVisibilityToggle.title = 'Click para apagar/encender este grupo';
    
    var mainExpandToggle = document.createElement('span');
    mainExpandToggle.className = 'legend-group-toggle';
    mainExpandToggle.innerHTML = '▼';
    
    var mainGroupName = document.createElement('span');
    mainGroupName.className = 'legend-group-name';
    mainGroupName.textContent = mainGroup.name;
    
    headerContent.appendChild(mainVisibilityToggle);
    headerContent.appendChild(mainExpandToggle);
    headerContent.appendChild(mainGroupName);
    groupHeader.appendChild(headerContent);
    
    var groupContent = document.createElement('div');
    groupContent.className = 'legend-group-items level-0';
    
    // Obtener capas INICIALMENTE para el estado inicial
    var mainGroupLayers = getAllLayersInGroup(mainGroup);
    
    mainVisibilityToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Click en visibilidad del grupo principal:', mainGroup.name);
        
        // Intenta 1: Buscar el LayerGroup de OpenLayers que contiene este grupo
        var groupToToggle = findLayerGroupForSubgroup(mainGroup);
        
        if (groupToToggle) {
            console.log('Grupo encontrado, toggleando grupo:', mainGroup.name);
            var newState = !groupToToggle.getVisible();
            groupToToggle.setVisible(newState);
            updateVisibilityIcon(mainVisibilityToggle, newState);
            groupHeader.classList.toggle('group-disabled', !newState);
        } else {
            // Intenta 2: Si no es un grupo directo, togglea las capas individuales
            console.log('Grupo no encontrado como LayerGroup, toggleando capas individuales');
            var layersInGroup = getAllLayersInGroup(mainGroup);
            
            if (layersInGroup.length === 0) {
                console.warn('No se encontraron capas en:', mainGroup.name);
                return;
            }
            
            // Obtén el estado actual (si alguna está visible)
            var anyVisible = layersInGroup.some(function(layer) {
                return layer.getVisible();
            });
            
            // Toggle: apaga si hay algo visible, enciende si está todo apagado
            var newState = !anyVisible;
            
            layersInGroup.forEach(function(layer) {
                layer.setVisible(newState);
            });
            
            updateVisibilityIcon(mainVisibilityToggle, newState);
            groupHeader.classList.toggle('group-disabled', !newState);
            
            console.log('Capas toggleadas a:', newState);
        }
    });
    
    mainGroupName.addEventListener('click', function() {
        groupContent.classList.toggle('collapsed');
        groupHeader.classList.toggle('collapsed');
    });
    
    mainExpandToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        groupContent.classList.toggle('collapsed');
        groupHeader.classList.toggle('collapsed');
    });
    
    groupContainer.appendChild(groupHeader);
    groupContainer.appendChild(groupContent);
    
    createGroupStructure(mainGroup, groupContent, 1);
    
    var initialMainVisible = mainGroupLayers.every(function(layer) {
        return layer.getVisible();
    });
    updateVisibilityIcon(mainVisibilityToggle, initialMainVisible);
    if (!initialMainVisible) {
        groupHeader.classList.add('group-disabled');
    }
    
    container.appendChild(groupContainer);
}

// Inicializar leyenda
function initializeLegend() {
    var legendItemsContainer = document.getElementById('legend-items');
    var legendCloseBtn = document.getElementById('legend-close');
    
    var layers = map.getLayers().getArray();
    console.log('=== INICIALIZANDO LEYENDA ===');
    console.log('Total de capas en el mapa:', layers.length);
    
    // Registra todas las capas disponibles
    registeredLayers = [];
    layers.forEach(function(layer, index) {
        var title = layer.get('title') || '';
        var cleanTitle = title.replace(/<[^>]*>/g, '').trim();
        layerMap[cleanTitle] = layer;
        registeredLayers.push(cleanTitle);
        console.log('[' + index + '] Capa registrada: "' + cleanTitle + '"');
        
        // Registrar grupos recursivamente
        registerGroups(layer);
    });
    
    console.log('\n=== CAPAS REGISTRADAS PARA BÚSQUEDA ===');
    registeredLayers.sort().forEach(function(name) {
        console.log('  - ' + name);
    });
    
    fetch('./resources/legend-structure.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('\n=== PROCESANDO ESTRUCTURA JSON ===');
            
            // Recolecta todas las capas solicitadas en JSON
            var requestedLayers = [];
            function collectLayerNames(node) {
                if (node.layers) {
                    node.layers.forEach(function(layer) {
                        requestedLayers.push(layer);
                    });
                }
                if (node.subgroups) {
                    node.subgroups.forEach(function(subgroup) {
                        collectLayerNames(subgroup);
                    });
                }
            }
            
            data.groups.forEach(function(group) {
                collectLayerNames(group);
            });
            
            // Analiza qué capas se encuentran y cuáles no
            console.log('Capas solicitadas en JSON: ' + requestedLayers.length);
            var foundCount = 0;
            var notFoundLayers = [];
            
            requestedLayers.forEach(function(layerName) {
                var found = findLayerByName(layerName);
                if (found) {
                    foundCount++;
                } else {
                    notFoundLayers.push(layerName);
                }
            });
            
            console.log('Capas encontradas: ' + foundCount + ' de ' + requestedLayers.length);
            
            if (notFoundLayers.length > 0) {
                console.warn('\n=== CAPAS NO ENCONTRADAS ===');
                notFoundLayers.forEach(function(name) {
                    console.warn('  ❌ "' + name + '"');
                    // Intenta encontrar capas similares
                    var similar = registeredLayers.filter(function(registered) {
                        var similarity = registered.toLowerCase().indexOf(name.toLowerCase()) > -1 ||
                                       name.toLowerCase().indexOf(registered.toLowerCase()) > -1;
                        return similarity;
                    });
                    if (similar.length > 0) {
                        console.log('    Posibles coincidencias:');
                        similar.forEach(function(s) {
                            console.log('      → "' + s + '"');
                        });
                    }
                });
            }
            
            legendItemsContainer.innerHTML = '';
            data.groups.forEach(function(mainGroup) {
                if (mainGroup.isBaseLayers) {
                    createBaseLayersSection(mainGroup, legendItemsContainer);
                } else {
                    createNormalGroup(mainGroup, legendItemsContainer);
                }
            });
            
            console.log('\n=== LEYENDA INICIALIZADA ===\n');
        })
        .catch(function(error) {
            console.error('Error cargando estructura de leyenda:', error);
        });
    
    legendCloseBtn.addEventListener('click', function() {
        var legendContainer = document.getElementById('legend-container');
        legendContainer.style.display = 'none';
    });
    
    setTimeout(function() {
        zoomToAmComarca();
    }, 500);
}

// Zoom a AM Comarca
function zoomToAmComarca() {
    var comarcaLayer = findLayerByName('AM_Comarca');
    if (!comarcaLayer) {
        console.warn('AM_Comarca layer not found');
        return;
    }
    
    var source = comarcaLayer.getSource();
    if (!source) {
        console.warn('AM_Comarca source not found');
        return;
    }
    
    var extent = source.getExtent();
    if (extent && extent[0] !== Infinity) {
        console.log('Zooming to AM_Comarca extent:', extent);
        map.getView().fit(extent, {duration: 1000, padding: [50, 50, 50, 50]});
    } else {
        console.warn('Could not determine extent for AM_Comarca');
    }
}

// Ejecutar
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeLegend, 1000);
});
