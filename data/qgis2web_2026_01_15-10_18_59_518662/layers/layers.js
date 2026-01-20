var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_Catastro_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ovc.catastro.meh.es/cartografia/wms/servidorwms.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Catastro',
                            popuplayertitle: 'Catastro',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_2, 0]);
var format_04_Derechosmineros_3 = new ol.format.GeoJSON();
var features_04_Derechosmineros_3 = format_04_Derechosmineros_3.readFeatures(json_04_Derechosmineros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Derechosmineros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Derechosmineros_3.addFeatures(features_04_Derechosmineros_3);
var lyr_04_Derechosmineros_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Derechosmineros_3, 
                style: style_04_Derechosmineros_3,
                popuplayertitle: '04_Derechos mineros',
                interactive: true,
                title: '<img src="styles/legend/04_Derechosmineros_3.png" /> 04_Derechos mineros'
            });
var format_PECV_Aptitud_aprovechamiento_eolico_4 = new ol.format.GeoJSON();
var features_PECV_Aptitud_aprovechamiento_eolico_4 = format_PECV_Aptitud_aprovechamiento_eolico_4.readFeatures(json_PECV_Aptitud_aprovechamiento_eolico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PECV_Aptitud_aprovechamiento_eolico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PECV_Aptitud_aprovechamiento_eolico_4.addFeatures(features_PECV_Aptitud_aprovechamiento_eolico_4);
var lyr_PECV_Aptitud_aprovechamiento_eolico_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PECV_Aptitud_aprovechamiento_eolico_4, 
                style: style_PECV_Aptitud_aprovechamiento_eolico_4,
                popuplayertitle: 'PECV_Aptitud_aprovechamiento_eolico',
                interactive: true,
                title: '<img src="styles/legend/PECV_Aptitud_aprovechamiento_eolico_4.png" /> PECV_Aptitud_aprovechamiento_eolico'
            });
var format_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5 = new ol.format.GeoJSON();
var features_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5 = format_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.readFeatures(json_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.addFeatures(features_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5);
var lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5, 
                style: style_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5,
                popuplayertitle: '04_ZEC - Zonas de Especial Conservación _ LIC - Lugar de Interés Comunitario',
                interactive: true,
    title: '04_ZEC - Zonas de Especial Conservación _ LIC - Lugar de Interés Comunitario<br />\
    <img src="styles/legend/04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5_0.png" /> Serra d\'Espadà<br />' });
var format_04_Microreservas_6 = new ol.format.GeoJSON();
var features_04_Microreservas_6 = format_04_Microreservas_6.readFeatures(json_04_Microreservas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Microreservas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Microreservas_6.addFeatures(features_04_Microreservas_6);
var lyr_04_Microreservas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Microreservas_6,
maxResolution:28004.466152261964,
 
                style: style_04_Microreservas_6,
                popuplayertitle: '04_Microreservas',
                interactive: true,
    title: '04_Microreservas<br />\
    <img src="styles/legend/04_Microreservas_6_0.png" /> Barranco de la Maimona<br />\
    <img src="styles/legend/04_Microreservas_6_1.png" /> El Tajar<br />\
    <img src="styles/legend/04_Microreservas_6_2.png" /> Olmeda de Fuente la Reina<br />' });
var format_04_Areascortafuegos_7 = new ol.format.GeoJSON();
var features_04_Areascortafuegos_7 = format_04_Areascortafuegos_7.readFeatures(json_04_Areascortafuegos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Areascortafuegos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Areascortafuegos_7.addFeatures(features_04_Areascortafuegos_7);
var lyr_04_Areascortafuegos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Areascortafuegos_7, 
                style: style_04_Areascortafuegos_7,
                popuplayertitle: '04_Areas cortafuegos',
                interactive: true,
                title: '<img src="styles/legend/04_Areascortafuegos_7.png" /> 04_Areas cortafuegos'
            });
var format_04_Lneascortafuegos_8 = new ol.format.GeoJSON();
var features_04_Lneascortafuegos_8 = format_04_Lneascortafuegos_8.readFeatures(json_04_Lneascortafuegos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Lneascortafuegos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Lneascortafuegos_8.addFeatures(features_04_Lneascortafuegos_8);
var lyr_04_Lneascortafuegos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Lneascortafuegos_8, 
                style: style_04_Lneascortafuegos_8,
                popuplayertitle: '04_Líneas cortafuegos',
                interactive: true,
    title: '04_Líneas cortafuegos<br />\
    <img src="styles/legend/04_Lneascortafuegos_8_0.png" /> 1<br />\
    <img src="styles/legend/04_Lneascortafuegos_8_1.png" /> 2<br />' });
var format_04_Areasincendiadas_9 = new ol.format.GeoJSON();
var features_04_Areasincendiadas_9 = format_04_Areasincendiadas_9.readFeatures(json_04_Areasincendiadas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Areasincendiadas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Areasincendiadas_9.addFeatures(features_04_Areasincendiadas_9);
var lyr_04_Areasincendiadas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Areasincendiadas_9, 
                style: style_04_Areasincendiadas_9,
                popuplayertitle: '04_Areas incendiadas',
                interactive: true,
                title: '<img src="styles/legend/04_Areasincendiadas_9.png" /> 04_Areas incendiadas'
            });
var format_04_FranjaServidumbre25mL_10 = new ol.format.GeoJSON();
var features_04_FranjaServidumbre25mL_10 = format_04_FranjaServidumbre25mL_10.readFeatures(json_04_FranjaServidumbre25mL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_FranjaServidumbre25mL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_FranjaServidumbre25mL_10.addFeatures(features_04_FranjaServidumbre25mL_10);
var lyr_04_FranjaServidumbre25mL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_FranjaServidumbre25mL_10, 
                style: style_04_FranjaServidumbre25mL_10,
                popuplayertitle: '04_Franja Servidumbre 25m L',
                interactive: true,
                title: '<img src="styles/legend/04_FranjaServidumbre25mL_10.png" /> 04_Franja Servidumbre 25m L'
            });
var format_04_LineasElectricas_11 = new ol.format.GeoJSON();
var features_04_LineasElectricas_11 = format_04_LineasElectricas_11.readFeatures(json_04_LineasElectricas_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_LineasElectricas_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_LineasElectricas_11.addFeatures(features_04_LineasElectricas_11);
var lyr_04_LineasElectricas_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_LineasElectricas_11, 
                style: style_04_LineasElectricas_11,
                popuplayertitle: '04_Lineas Electricas',
                interactive: true,
    title: '04_Lineas Electricas<br />\
    <img src="styles/legend/04_LineasElectricas_11_0.png" /> 60 - 110 kV<br />\
    <img src="styles/legend/04_LineasElectricas_11_1.png" /> 150 - 220 kV<br />' });
var format_04_Otroscauces_12 = new ol.format.GeoJSON();
var features_04_Otroscauces_12 = format_04_Otroscauces_12.readFeatures(json_04_Otroscauces_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Otroscauces_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Otroscauces_12.addFeatures(features_04_Otroscauces_12);
var lyr_04_Otroscauces_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Otroscauces_12, 
                style: style_04_Otroscauces_12,
                popuplayertitle: '04_Otros cauces',
                interactive: true,
    title: '04_Otros cauces<br />\
    <img src="styles/legend/04_Otroscauces_12_0.png" /> 1<br />\
    <img src="styles/legend/04_Otroscauces_12_1.png" /> 2<br />' });
var format_04_ZonaPolicaCauces100m_13 = new ol.format.GeoJSON();
var features_04_ZonaPolicaCauces100m_13 = format_04_ZonaPolicaCauces100m_13.readFeatures(json_04_ZonaPolicaCauces100m_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_ZonaPolicaCauces100m_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_ZonaPolicaCauces100m_13.addFeatures(features_04_ZonaPolicaCauces100m_13);
var lyr_04_ZonaPolicaCauces100m_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_ZonaPolicaCauces100m_13, 
                style: style_04_ZonaPolicaCauces100m_13,
                popuplayertitle: '04_Zona Policía Cauces 100m',
                interactive: true,
                title: '<img src="styles/legend/04_ZonaPolicaCauces100m_13.png" /> 04_Zona Policía Cauces 100m'
            });
var format_04_Servidumbrecauces5m_14 = new ol.format.GeoJSON();
var features_04_Servidumbrecauces5m_14 = format_04_Servidumbrecauces5m_14.readFeatures(json_04_Servidumbrecauces5m_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Servidumbrecauces5m_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Servidumbrecauces5m_14.addFeatures(features_04_Servidumbrecauces5m_14);
var lyr_04_Servidumbrecauces5m_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Servidumbrecauces5m_14, 
                style: style_04_Servidumbrecauces5m_14,
                popuplayertitle: '04_Servidumbre cauces 5m',
                interactive: true,
                title: '<img src="styles/legend/04_Servidumbrecauces5m_14.png" /> 04_Servidumbre cauces 5m'
            });
var format_04_DominioPblicoHidrulicoDPH_15 = new ol.format.GeoJSON();
var features_04_DominioPblicoHidrulicoDPH_15 = format_04_DominioPblicoHidrulicoDPH_15.readFeatures(json_04_DominioPblicoHidrulicoDPH_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_DominioPblicoHidrulicoDPH_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_DominioPblicoHidrulicoDPH_15.addFeatures(features_04_DominioPblicoHidrulicoDPH_15);
var lyr_04_DominioPblicoHidrulicoDPH_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_DominioPblicoHidrulicoDPH_15, 
                style: style_04_DominioPblicoHidrulicoDPH_15,
                popuplayertitle: '04_Dominio Público Hidráulico (DPH)',
                interactive: true,
                title: '<img src="styles/legend/04_DominioPblicoHidrulicoDPH_15.png" /> 04_Dominio Público Hidráulico (DPH)'
            });
var format_04_RiesgodeInundacin_16 = new ol.format.GeoJSON();
var features_04_RiesgodeInundacin_16 = format_04_RiesgodeInundacin_16.readFeatures(json_04_RiesgodeInundacin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_RiesgodeInundacin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_RiesgodeInundacin_16.addFeatures(features_04_RiesgodeInundacin_16);
var lyr_04_RiesgodeInundacin_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_RiesgodeInundacin_16, 
                style: style_04_RiesgodeInundacin_16,
                popuplayertitle: '04_Riesgo de Inundación',
                interactive: true,
    title: '04_Riesgo de Inundación<br />\
    <img src="styles/legend/04_RiesgodeInundacin_16_0.png" /> Alto<br />\
    <img src="styles/legend/04_RiesgodeInundacin_16_1.png" /> Bajo<br />\
    <img src="styles/legend/04_RiesgodeInundacin_16_2.png" /> Medio<br />\
    <img src="styles/legend/04_RiesgodeInundacin_16_3.png" /> Muy Alto<br />\
    <img src="styles/legend/04_RiesgodeInundacin_16_4.png" /> Muy Bajo<br />' });
var format_04_Senderos_17 = new ol.format.GeoJSON();
var features_04_Senderos_17 = format_04_Senderos_17.readFeatures(json_04_Senderos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_Senderos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_Senderos_17.addFeatures(features_04_Senderos_17);
var lyr_04_Senderos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_Senderos_17, 
                style: style_04_Senderos_17,
                popuplayertitle: '04_Senderos',
                interactive: true,
                title: '<img src="styles/legend/04_Senderos_17.png" /> 04_Senderos'
            });
var format_04_AfeccionPatrimonio_18 = new ol.format.GeoJSON();
var features_04_AfeccionPatrimonio_18 = format_04_AfeccionPatrimonio_18.readFeatures(json_04_AfeccionPatrimonio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_04_AfeccionPatrimonio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_04_AfeccionPatrimonio_18.addFeatures(features_04_AfeccionPatrimonio_18);
var lyr_04_AfeccionPatrimonio_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_04_AfeccionPatrimonio_18,
maxResolution:16.802679691357177,
 
                style: style_04_AfeccionPatrimonio_18,
                popuplayertitle: '04_Afeccion Patrimonio',
                interactive: true,
    title: '04_Afeccion Patrimonio<br />\
    <img src="styles/legend/04_AfeccionPatrimonio_18_0.png" /> BIC (Bien de Interés Cultural)<br />\
    <img src="styles/legend/04_AfeccionPatrimonio_18_1.png" /> BRL (Bien de Relevancia Local)<br />' });
var format_05_RedPrimariaZucaina_19 = new ol.format.GeoJSON();
var features_05_RedPrimariaZucaina_19 = format_05_RedPrimariaZucaina_19.readFeatures(json_05_RedPrimariaZucaina_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaZucaina_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaZucaina_19.addFeatures(features_05_RedPrimariaZucaina_19);
var lyr_05_RedPrimariaZucaina_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaZucaina_19, 
                style: style_05_RedPrimariaZucaina_19,
                popuplayertitle: '05_Red Primaria Zucaina',
                interactive: true,
    title: '05_Red Primaria Zucaina<br />\
    <img src="styles/legend/05_RedPrimariaZucaina_19_0.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaZucaina_19_1.png" /> PQE-CUL Euipamientos - Cultural<br />\
    <img src="styles/legend/05_RedPrimariaZucaina_19_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaZucaina_19_3.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaZucaina_19_4.png" /> PCV Comunicaciones - Red Viaria<br />' });
var format_05_RedPrimariaVillamalur_20 = new ol.format.GeoJSON();
var features_05_RedPrimariaVillamalur_20 = format_05_RedPrimariaVillamalur_20.readFeatures(json_05_RedPrimariaVillamalur_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaVillamalur_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaVillamalur_20.addFeatures(features_05_RedPrimariaVillamalur_20);
var lyr_05_RedPrimariaVillamalur_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaVillamalur_20, 
                style: style_05_RedPrimariaVillamalur_20,
                popuplayertitle: '05_Red Primaria Villamalur',
                interactive: true,
    title: '05_Red Primaria Villamalur<br />\
    <img src="styles/legend/05_RedPrimariaVillamalur_20_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaVillamalur_20_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaVillamalur_20_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaVillamalur_20_3.png" /> PQE-CUL Euipamientos - Cultural<br />' });
var format_05_RedPrimariaVillanuevadeViver_21 = new ol.format.GeoJSON();
var features_05_RedPrimariaVillanuevadeViver_21 = format_05_RedPrimariaVillanuevadeViver_21.readFeatures(json_05_RedPrimariaVillanuevadeViver_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaVillanuevadeViver_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaVillanuevadeViver_21.addFeatures(features_05_RedPrimariaVillanuevadeViver_21);
var lyr_05_RedPrimariaVillanuevadeViver_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaVillanuevadeViver_21, 
                style: style_05_RedPrimariaVillanuevadeViver_21,
                popuplayertitle: '05_Red Primaria Villanueva de Viver',
                interactive: true,
    title: '05_Red Primaria Villanueva de Viver<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_3.png" /> PQE-CUL Euipamientos - Cultural<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_4.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_5.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_6.png" /> PQI-RES<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_7.png" /> PQI-SUR Equipamiento - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_8.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_9.png" /> PQS-SAN Equipamiento Sanitario<br />\
    <img src="styles/legend/05_RedPrimariaVillanuevadeViver_21_10.png" /> PV Parque<br />' });
var format_05_RedPrimariaVallat_22 = new ol.format.GeoJSON();
var features_05_RedPrimariaVallat_22 = format_05_RedPrimariaVallat_22.readFeatures(json_05_RedPrimariaVallat_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaVallat_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaVallat_22.addFeatures(features_05_RedPrimariaVallat_22);
var lyr_05_RedPrimariaVallat_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaVallat_22, 
                style: style_05_RedPrimariaVallat_22,
                popuplayertitle: '05_Red Primaria Vallat',
                interactive: true,
    title: '05_Red Primaria Vallat<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_0.png" /> PCA Comunicaciones - Aparcamientos<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_1.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_2.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_3.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_4.png" /> PQS-SAN Equipamiento Sanitario<br />\
    <img src="styles/legend/05_RedPrimariaVallat_22_5.png" /> PV Parque<br />' });
var format_05_RedPrimariaVillahermosadelRo_23 = new ol.format.GeoJSON();
var features_05_RedPrimariaVillahermosadelRo_23 = format_05_RedPrimariaVillahermosadelRo_23.readFeatures(json_05_RedPrimariaVillahermosadelRo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaVillahermosadelRo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaVillahermosadelRo_23.addFeatures(features_05_RedPrimariaVillahermosadelRo_23);
var lyr_05_RedPrimariaVillahermosadelRo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaVillahermosadelRo_23, 
                style: style_05_RedPrimariaVillahermosadelRo_23,
                popuplayertitle: '05_Red Primaria Villahermosa del Río',
                interactive: true,
    title: '05_Red Primaria Villahermosa del Río<br />\
    <img src="styles/legend/05_RedPrimariaVillahermosadelRo_23_0.png" /> PCA Comunicaciones - Aparcamientos<br />\
    <img src="styles/legend/05_RedPrimariaVillahermosadelRo_23_1.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaVillahermosadelRo_23_2.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaVillahermosadelRo_23_3.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaVillahermosadelRo_23_4.png" /> PQM Equipamiento Dotacional Múltiple<br />' });
var format_05_RedPrimariaTorrechiva_24 = new ol.format.GeoJSON();
var features_05_RedPrimariaTorrechiva_24 = format_05_RedPrimariaTorrechiva_24.readFeatures(json_05_RedPrimariaTorrechiva_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaTorrechiva_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaTorrechiva_24.addFeatures(features_05_RedPrimariaTorrechiva_24);
var lyr_05_RedPrimariaTorrechiva_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaTorrechiva_24, 
                style: style_05_RedPrimariaTorrechiva_24,
                popuplayertitle: '05_Red Primaria Torrechiva',
                interactive: true,
    title: '05_Red Primaria Torrechiva<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_3.png" /> PQE-CUL Euipamientos - Cultural<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_4.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_5.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_6.png" /> PQI-SUR Equipamiento - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_7.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaTorrechiva_24_8.png" /> PV Parque<br />' });
var format_05_RedPrimariaTorralbadelPinar_25 = new ol.format.GeoJSON();
var features_05_RedPrimariaTorralbadelPinar_25 = format_05_RedPrimariaTorralbadelPinar_25.readFeatures(json_05_RedPrimariaTorralbadelPinar_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaTorralbadelPinar_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaTorralbadelPinar_25.addFeatures(features_05_RedPrimariaTorralbadelPinar_25);
var lyr_05_RedPrimariaTorralbadelPinar_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaTorralbadelPinar_25, 
                style: style_05_RedPrimariaTorralbadelPinar_25,
                popuplayertitle: '05_Red Primaria Torralba del Pinar',
                interactive: true,
    title: '05_Red Primaria Torralba del Pinar<br />\
    <img src="styles/legend/05_RedPrimariaTorralbadelPinar_25_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaTorralbadelPinar_25_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaTorralbadelPinar_25_2.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaTorralbadelPinar_25_3.png" /> PV Parque<br />' });
var format_05_RedPrimariaToga_26 = new ol.format.GeoJSON();
var features_05_RedPrimariaToga_26 = format_05_RedPrimariaToga_26.readFeatures(json_05_RedPrimariaToga_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaToga_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaToga_26.addFeatures(features_05_RedPrimariaToga_26);
var lyr_05_RedPrimariaToga_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaToga_26, 
                style: style_05_RedPrimariaToga_26,
                popuplayertitle: '05_Red Primaria Toga',
                interactive: true,
    title: '05_Red Primaria Toga<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_5.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaToga_26_6.png" /> PV Parque<br />' });
var format_05_RedPrimariaPuebladelArenoso_27 = new ol.format.GeoJSON();
var features_05_RedPrimariaPuebladelArenoso_27 = format_05_RedPrimariaPuebladelArenoso_27.readFeatures(json_05_RedPrimariaPuebladelArenoso_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaPuebladelArenoso_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaPuebladelArenoso_27.addFeatures(features_05_RedPrimariaPuebladelArenoso_27);
var lyr_05_RedPrimariaPuebladelArenoso_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaPuebladelArenoso_27, 
                style: style_05_RedPrimariaPuebladelArenoso_27,
                popuplayertitle: '05_Red Primaria Puebla del Arenoso',
                interactive: true,
    title: '05_Red Primaria Puebla del Arenoso<br />\
    <img src="styles/legend/05_RedPrimariaPuebladelArenoso_27_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaPuebladelArenoso_27_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaPuebladelArenoso_27_2.png" /> PQI-SEG<br />\
    <img src="styles/legend/05_RedPrimariaPuebladelArenoso_27_3.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />' });
var format_05_RedPrimariaMontanejos_28 = new ol.format.GeoJSON();
var features_05_RedPrimariaMontanejos_28 = format_05_RedPrimariaMontanejos_28.readFeatures(json_05_RedPrimariaMontanejos_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaMontanejos_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaMontanejos_28.addFeatures(features_05_RedPrimariaMontanejos_28);
var lyr_05_RedPrimariaMontanejos_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaMontanejos_28, 
                style: style_05_RedPrimariaMontanejos_28,
                popuplayertitle: '05_Red Primaria Montanejos',
                interactive: true,
    title: '05_Red Primaria Montanejos<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_5.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_6.png" /> PQS-SAN Equipamiento Sanitario<br />\
    <img src="styles/legend/05_RedPrimariaMontanejos_28_7.png" /> PV Parque<br />' });
var format_05_RedPrimariaMontn_29 = new ol.format.GeoJSON();
var features_05_RedPrimariaMontn_29 = format_05_RedPrimariaMontn_29.readFeatures(json_05_RedPrimariaMontn_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaMontn_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaMontn_29.addFeatures(features_05_RedPrimariaMontn_29);
var lyr_05_RedPrimariaMontn_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaMontn_29, 
                style: style_05_RedPrimariaMontn_29,
                popuplayertitle: '05_Red Primaria Montán',
                interactive: true,
    title: '05_Red Primaria Montán<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_5.png" /> PQI-SEG Equipamiento Infraestructura Seguridad<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_6.png" /> PQS-ASI Equipamiento Asistencial<br />\
    <img src="styles/legend/05_RedPrimariaMontn_29_7.png" /> PV<br />' });
var format_05_RedPrimariaLudiente_30 = new ol.format.GeoJSON();
var features_05_RedPrimariaLudiente_30 = format_05_RedPrimariaLudiente_30.readFeatures(json_05_RedPrimariaLudiente_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaLudiente_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaLudiente_30.addFeatures(features_05_RedPrimariaLudiente_30);
var lyr_05_RedPrimariaLudiente_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaLudiente_30, 
                style: style_05_RedPrimariaLudiente_30,
                popuplayertitle: '05_Red Primaria Ludiente',
                interactive: true,
    title: '05_Red Primaria Ludiente<br />\
    <img src="styles/legend/05_RedPrimariaLudiente_30_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaLudiente_30_1.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaLudiente_30_2.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaLudiente_30_3.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaLudiente_30_4.png" /> PV Parque<br />' });
var format_05_RedPrimariaFuentelaReina_31 = new ol.format.GeoJSON();
var features_05_RedPrimariaFuentelaReina_31 = format_05_RedPrimariaFuentelaReina_31.readFeatures(json_05_RedPrimariaFuentelaReina_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaFuentelaReina_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaFuentelaReina_31.addFeatures(features_05_RedPrimariaFuentelaReina_31);
var lyr_05_RedPrimariaFuentelaReina_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaFuentelaReina_31, 
                style: style_05_RedPrimariaFuentelaReina_31,
                popuplayertitle: '05_Red Primaria Fuente la Reina',
                interactive: true,
    title: '05_Red Primaria Fuente la Reina<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_1.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_2.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_3.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_4.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaFuentelaReina_31_5.png" /> PQS-SAN Equipamiento Sanitario<br />' });
var format_05_RedPrimariaFuentesdeAydar_32 = new ol.format.GeoJSON();
var features_05_RedPrimariaFuentesdeAydar_32 = format_05_RedPrimariaFuentesdeAydar_32.readFeatures(json_05_RedPrimariaFuentesdeAydar_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaFuentesdeAydar_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaFuentesdeAydar_32.addFeatures(features_05_RedPrimariaFuentesdeAydar_32);
var lyr_05_RedPrimariaFuentesdeAydar_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaFuentesdeAydar_32, 
                style: style_05_RedPrimariaFuentesdeAydar_32,
                popuplayertitle: '05_Red Primaria Fuentes de Ayódar',
                interactive: true,
    title: '05_Red Primaria Fuentes de Ayódar<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_3.png" /> PQI Equipamiento Infraestructura / Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_5.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaFuentesdeAydar_32_6.png" /> PV Parque<br />' });
var format_05_RedPrimariaFanzara_33 = new ol.format.GeoJSON();
var features_05_RedPrimariaFanzara_33 = format_05_RedPrimariaFanzara_33.readFeatures(json_05_RedPrimariaFanzara_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaFanzara_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaFanzara_33.addFeatures(features_05_RedPrimariaFanzara_33);
var lyr_05_RedPrimariaFanzara_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaFanzara_33, 
                style: style_05_RedPrimariaFanzara_33,
                popuplayertitle: '05_Red Primaria Fanzara',
                interactive: true,
    title: '05_Red Primaria Fanzara<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_5.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaFanzara_33_6.png" /> PV Parque<br />' });
var format_05_RedPrimariaEspadilla_34 = new ol.format.GeoJSON();
var features_05_RedPrimariaEspadilla_34 = format_05_RedPrimariaEspadilla_34.readFeatures(json_05_RedPrimariaEspadilla_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaEspadilla_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaEspadilla_34.addFeatures(features_05_RedPrimariaEspadilla_34);
var lyr_05_RedPrimariaEspadilla_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaEspadilla_34, 
                style: style_05_RedPrimariaEspadilla_34,
                popuplayertitle: '05_Red Primaria Espadilla',
                interactive: true,
    title: '05_Red Primaria Espadilla<br />\
    <img src="styles/legend/05_RedPrimariaEspadilla_34_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaEspadilla_34_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaEspadilla_34_2.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaEspadilla_34_3.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaEspadilla_34_4.png" /> PV Parque<br />' });
var format_05_RedPrimariaCortesdelArenoso_35 = new ol.format.GeoJSON();
var features_05_RedPrimariaCortesdelArenoso_35 = format_05_RedPrimariaCortesdelArenoso_35.readFeatures(json_05_RedPrimariaCortesdelArenoso_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaCortesdelArenoso_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaCortesdelArenoso_35.addFeatures(features_05_RedPrimariaCortesdelArenoso_35);
var lyr_05_RedPrimariaCortesdelArenoso_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaCortesdelArenoso_35, 
                style: style_05_RedPrimariaCortesdelArenoso_35,
                popuplayertitle: '05_Red Primaria Cortes del Arenoso',
                interactive: true,
    title: '05_Red Primaria Cortes del Arenoso<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_1.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_5.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_6.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaCortesdelArenoso_35_7.png" /> PV Parque<br />' });
var format_05_RedPrimariaCirat_36 = new ol.format.GeoJSON();
var features_05_RedPrimariaCirat_36 = format_05_RedPrimariaCirat_36.readFeatures(json_05_RedPrimariaCirat_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaCirat_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaCirat_36.addFeatures(features_05_RedPrimariaCirat_36);
var lyr_05_RedPrimariaCirat_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaCirat_36, 
                style: style_05_RedPrimariaCirat_36,
                popuplayertitle: '05_Red Primaria Cirat',
                interactive: true,
    title: '05_Red Primaria Cirat<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_0.png" /> PCA Comunicaciones - Aparcamientos<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_1.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_3.png" /> PQD-RCR Equipamiento - Recreativo<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_4.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaCirat_36_5.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />' });
var format_05_RedPrimariaAydar_37 = new ol.format.GeoJSON();
var features_05_RedPrimariaAydar_37 = format_05_RedPrimariaAydar_37.readFeatures(json_05_RedPrimariaAydar_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaAydar_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaAydar_37.addFeatures(features_05_RedPrimariaAydar_37);
var lyr_05_RedPrimariaAydar_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaAydar_37, 
                style: style_05_RedPrimariaAydar_37,
                popuplayertitle: '05_Red Primaria Ayódar',
                interactive: true,
    title: '05_Red Primaria Ayódar<br />\
    <img src="styles/legend/05_RedPrimariaAydar_37_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaAydar_37_1.png" /> PQA Equipamientos - Administrativo Institucional<br />\
    <img src="styles/legend/05_RedPrimariaAydar_37_2.png" /> PQD-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaAydar_37_3.png" /> PV Parque<br />' });
var format_05_RedPrimariaArgelita_38 = new ol.format.GeoJSON();
var features_05_RedPrimariaArgelita_38 = format_05_RedPrimariaArgelita_38.readFeatures(json_05_RedPrimariaArgelita_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaArgelita_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaArgelita_38.addFeatures(features_05_RedPrimariaArgelita_38);
var lyr_05_RedPrimariaArgelita_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaArgelita_38, 
                style: style_05_RedPrimariaArgelita_38,
                popuplayertitle: '05_Red Primaria Argelita',
                interactive: true,
    title: '05_Red Primaria Argelita<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_0.png" /> PCA Comunicaciones - Aparcamientos<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_1.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_2.png" /> PQA Equipamiento Aministrativo - Institucional<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_3.png" /> PQE-CUL Euipamientos - Cultural<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_4.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_5.png" /> PQI Equipamientos - Infraestructura/servicio urbano<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_6.png" /> PQI-HID Equipamientos - Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_7.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_8.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaArgelita_38_9.png" /> PV Parque<br />' });
var format_05_RedPrimariaArauel_39 = new ol.format.GeoJSON();
var features_05_RedPrimariaArauel_39 = format_05_RedPrimariaArauel_39.readFeatures(json_05_RedPrimariaArauel_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaArauel_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaArauel_39.addFeatures(features_05_RedPrimariaArauel_39);
var lyr_05_RedPrimariaArauel_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaArauel_39, 
                style: style_05_RedPrimariaArauel_39,
                popuplayertitle: '05_Red Primaria Arañuel',
                interactive: true,
    title: '05_Red Primaria Arañuel<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_0.png" /> PCV Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_1.png" /> PQA Equipamiento Aministrativo-Institucional<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_2.png" /> PQI-HID Equipamiento Infraestructura Hidráulica<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_3.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_4.png" /> PQM Equipamiento Dotacional Múltiple<br />\
    <img src="styles/legend/05_RedPrimariaArauel_39_5.png" /> PQS-SAN Equipamiento Sanitario<br />' });
var format_05_RedPrimariaCastillodeVillamalefa_40 = new ol.format.GeoJSON();
var features_05_RedPrimariaCastillodeVillamalefa_40 = format_05_RedPrimariaCastillodeVillamalefa_40.readFeatures(json_05_RedPrimariaCastillodeVillamalefa_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_05_RedPrimariaCastillodeVillamalefa_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_05_RedPrimariaCastillodeVillamalefa_40.addFeatures(features_05_RedPrimariaCastillodeVillamalefa_40);
var lyr_05_RedPrimariaCastillodeVillamalefa_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_05_RedPrimariaCastillodeVillamalefa_40, 
                style: style_05_RedPrimariaCastillodeVillamalefa_40,
                popuplayertitle: '05_Red Primaria Castillo de Villamalefa',
                interactive: true,
    title: '05_Red Primaria Castillo de Villamalefa<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_0.png" /> PCV Comunicaciones - Red Viaria<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_1.png" /> PQA Equipamientos - Administrativo Institucional<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_2.png" /> PQE-DEP Equipamientos - Deportivo<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_3.png" /> PQE-DOC Equipamientos - Docente<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_4.png" /> PQI-SUR Equipamientos - Servicio Urbano<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_5.png" /> PQS-SAN Equipamientos - Sanitario<br />\
    <img src="styles/legend/05_RedPrimariaCastillodeVillamalefa_40_6.png" /> PV Parque<br />' });
var format_Cuevas_41 = new ol.format.GeoJSON();
var features_Cuevas_41 = format_Cuevas_41.readFeatures(json_Cuevas_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuevas_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuevas_41.addFeatures(features_Cuevas_41);
var lyr_Cuevas_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuevas_41, 
                style: style_Cuevas_41,
                popuplayertitle: 'Cuevas',
                interactive: true,
                title: '<img src="styles/legend/Cuevas_41.png" /> Cuevas'
            });
var format_BienesPatrimoniales_42 = new ol.format.GeoJSON();
var features_BienesPatrimoniales_42 = format_BienesPatrimoniales_42.readFeatures(json_BienesPatrimoniales_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BienesPatrimoniales_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BienesPatrimoniales_42.addFeatures(features_BienesPatrimoniales_42);
var lyr_BienesPatrimoniales_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BienesPatrimoniales_42, 
                style: style_BienesPatrimoniales_42,
                popuplayertitle: 'Bienes Patrimoniales ',
                interactive: true,
    title: 'Bienes Patrimoniales <br />\
    <img src="styles/legend/BienesPatrimoniales_42_0.png" /> Bienes de Interés Cultural - BIC<br />\
    <img src="styles/legend/BienesPatrimoniales_42_1.png" /> Bienes de Relevancia Local - BRL<br />\
    <img src="styles/legend/BienesPatrimoniales_42_2.png" /> <br />' });
var format_UDPaisajeAltoValor_43 = new ol.format.GeoJSON();
var features_UDPaisajeAltoValor_43 = format_UDPaisajeAltoValor_43.readFeatures(json_UDPaisajeAltoValor_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UDPaisajeAltoValor_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UDPaisajeAltoValor_43.addFeatures(features_UDPaisajeAltoValor_43);
var lyr_UDPaisajeAltoValor_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UDPaisajeAltoValor_43, 
                style: style_UDPaisajeAltoValor_43,
                popuplayertitle: 'UD Paisaje Alto Valor',
                interactive: true,
                title: '<img src="styles/legend/UDPaisajeAltoValor_43.png" /> UD Paisaje Alto Valor'
            });
var format_ParajesNaturalesMunicipales_44 = new ol.format.GeoJSON();
var features_ParajesNaturalesMunicipales_44 = format_ParajesNaturalesMunicipales_44.readFeatures(json_ParajesNaturalesMunicipales_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParajesNaturalesMunicipales_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParajesNaturalesMunicipales_44.addFeatures(features_ParajesNaturalesMunicipales_44);
var lyr_ParajesNaturalesMunicipales_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParajesNaturalesMunicipales_44, 
                style: style_ParajesNaturalesMunicipales_44,
                popuplayertitle: 'Parajes Naturales Municipales',
                interactive: true,
                title: '<img src="styles/legend/ParajesNaturalesMunicipales_44.png" /> Parajes Naturales Municipales'
            });
var format_ParquesNaturalesProtegidos_45 = new ol.format.GeoJSON();
var features_ParquesNaturalesProtegidos_45 = format_ParquesNaturalesProtegidos_45.readFeatures(json_ParquesNaturalesProtegidos_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParquesNaturalesProtegidos_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquesNaturalesProtegidos_45.addFeatures(features_ParquesNaturalesProtegidos_45);
var lyr_ParquesNaturalesProtegidos_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquesNaturalesProtegidos_45, 
                style: style_ParquesNaturalesProtegidos_45,
                popuplayertitle: 'Parques Naturales Protegidos',
                interactive: true,
                title: '<img src="styles/legend/ParquesNaturalesProtegidos_45.png" /> Parques Naturales Protegidos'
            });
var format_Terrenosforestalesestratgicos_46 = new ol.format.GeoJSON();
var features_Terrenosforestalesestratgicos_46 = format_Terrenosforestalesestratgicos_46.readFeatures(json_Terrenosforestalesestratgicos_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terrenosforestalesestratgicos_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrenosforestalesestratgicos_46.addFeatures(features_Terrenosforestalesestratgicos_46);
var lyr_Terrenosforestalesestratgicos_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrenosforestalesestratgicos_46, 
                style: style_Terrenosforestalesestratgicos_46,
                popuplayertitle: 'Terrenos forestales estratégicos',
                interactive: true,
                title: '<img src="styles/legend/Terrenosforestalesestratgicos_46.png" /> Terrenos forestales estratégicos'
            });
var format_HbitatsdeIntersComunitario_47 = new ol.format.GeoJSON();
var features_HbitatsdeIntersComunitario_47 = format_HbitatsdeIntersComunitario_47.readFeatures(json_HbitatsdeIntersComunitario_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HbitatsdeIntersComunitario_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HbitatsdeIntersComunitario_47.addFeatures(features_HbitatsdeIntersComunitario_47);
var lyr_HbitatsdeIntersComunitario_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HbitatsdeIntersComunitario_47, 
                style: style_HbitatsdeIntersComunitario_47,
                popuplayertitle: 'Hábitats de Interés Comunitario',
                interactive: true,
                title: '<img src="styles/legend/HbitatsdeIntersComunitario_47.png" /> Hábitats de Interés Comunitario'
            });
var format_ZEPA_ZonasdeEspecialProteccinparalasAves_48 = new ol.format.GeoJSON();
var features_ZEPA_ZonasdeEspecialProteccinparalasAves_48 = format_ZEPA_ZonasdeEspecialProteccinparalasAves_48.readFeatures(json_ZEPA_ZonasdeEspecialProteccinparalasAves_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEPA_ZonasdeEspecialProteccinparalasAves_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEPA_ZonasdeEspecialProteccinparalasAves_48.addFeatures(features_ZEPA_ZonasdeEspecialProteccinparalasAves_48);
var lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEPA_ZonasdeEspecialProteccinparalasAves_48, 
                style: style_ZEPA_ZonasdeEspecialProteccinparalasAves_48,
                popuplayertitle: 'ZEPA_Zonas de Especial Protección para las Aves ',
                interactive: true,
    title: 'ZEPA_Zonas de Especial Protección para las Aves <br />\
    <img src="styles/legend/ZEPA_ZonasdeEspecialProteccinparalasAves_48_0.png" /> Penyagolosa (ZEPA)<br />\
    <img src="styles/legend/ZEPA_ZonasdeEspecialProteccinparalasAves_48_1.png" /> Serra d\'Espadà (ZEPA)<br />\
    <img src="styles/legend/ZEPA_ZonasdeEspecialProteccinparalasAves_48_2.png" /> <br />' });
var format_ZEC_ZonasdeEspecialConservacin_49 = new ol.format.GeoJSON();
var features_ZEC_ZonasdeEspecialConservacin_49 = format_ZEC_ZonasdeEspecialConservacin_49.readFeatures(json_ZEC_ZonasdeEspecialConservacin_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEC_ZonasdeEspecialConservacin_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEC_ZonasdeEspecialConservacin_49.addFeatures(features_ZEC_ZonasdeEspecialConservacin_49);
var lyr_ZEC_ZonasdeEspecialConservacin_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZEC_ZonasdeEspecialConservacin_49, 
                style: style_ZEC_ZonasdeEspecialConservacin_49,
                popuplayertitle: 'ZEC_Zonas de Especial Conservación ',
                interactive: true,
    title: 'ZEC_Zonas de Especial Conservación <br />\
    <img src="styles/legend/ZEC_ZonasdeEspecialConservacin_49_0.png" /> Serra d\'Espadà<br />' });
var format_LugardeIntersComunitario_50 = new ol.format.GeoJSON();
var features_LugardeIntersComunitario_50 = format_LugardeIntersComunitario_50.readFeatures(json_LugardeIntersComunitario_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LugardeIntersComunitario_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LugardeIntersComunitario_50.addFeatures(features_LugardeIntersComunitario_50);
var lyr_LugardeIntersComunitario_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LugardeIntersComunitario_50, 
                style: style_LugardeIntersComunitario_50,
                popuplayertitle: 'Lugar de Interés Comunitario',
                interactive: true,
    title: 'Lugar de Interés Comunitario<br />\
    <img src="styles/legend/LugardeIntersComunitario_50_0.png" /> LIC Curs alt del riu Millars<br />\
    <img src="styles/legend/LugardeIntersComunitario_50_1.png" /> LIC Penyagolosa<br />\
    <img src="styles/legend/LugardeIntersComunitario_50_2.png" /> LIC Serra d\'Espadà<br />' });
var format_Microrreservas_51 = new ol.format.GeoJSON();
var features_Microrreservas_51 = format_Microrreservas_51.readFeatures(json_Microrreservas_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microrreservas_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microrreservas_51.addFeatures(features_Microrreservas_51);
var lyr_Microrreservas_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Microrreservas_51, 
                style: style_Microrreservas_51,
                popuplayertitle: 'Microrreservas',
                interactive: true,
    title: 'Microrreservas<br />\
    <img src="styles/legend/Microrreservas_51_0.png" /> Barranco de la Maimona<br />\
    <img src="styles/legend/Microrreservas_51_1.png" /> Olmeda de Fuente la Reina<br />\
    <img src="styles/legend/Microrreservas_51_2.png" /> El Tajar<br />\
    <img src="styles/legend/Microrreservas_51_3.png" /> <br />' });
var format_CorredoresTerritoriales_52 = new ol.format.GeoJSON();
var features_CorredoresTerritoriales_52 = format_CorredoresTerritoriales_52.readFeatures(json_CorredoresTerritoriales_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredoresTerritoriales_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredoresTerritoriales_52.addFeatures(features_CorredoresTerritoriales_52);
var lyr_CorredoresTerritoriales_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredoresTerritoriales_52, 
                style: style_CorredoresTerritoriales_52,
                popuplayertitle: 'Corredores Territoriales',
                interactive: true,
                title: '<img src="styles/legend/CorredoresTerritoriales_52.png" /> Corredores Territoriales'
            });
var format_AreasconRiesgoInundabilidad_53 = new ol.format.GeoJSON();
var features_AreasconRiesgoInundabilidad_53 = format_AreasconRiesgoInundabilidad_53.readFeatures(json_AreasconRiesgoInundabilidad_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasconRiesgoInundabilidad_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasconRiesgoInundabilidad_53.addFeatures(features_AreasconRiesgoInundabilidad_53);
var lyr_AreasconRiesgoInundabilidad_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasconRiesgoInundabilidad_53, 
                style: style_AreasconRiesgoInundabilidad_53,
                popuplayertitle: 'Areas con Riesgo Inundabilidad',
                interactive: true,
                title: '<img src="styles/legend/AreasconRiesgoInundabilidad_53.png" /> Areas con Riesgo Inundabilidad'
            });
var format_RiosyBarrancos_54 = new ol.format.GeoJSON();
var features_RiosyBarrancos_54 = format_RiosyBarrancos_54.readFeatures(json_RiosyBarrancos_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosyBarrancos_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosyBarrancos_54.addFeatures(features_RiosyBarrancos_54);
var lyr_RiosyBarrancos_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosyBarrancos_54, 
                style: style_RiosyBarrancos_54,
                popuplayertitle: 'Rios y Barrancos',
                interactive: true,
                title: '<img src="styles/legend/RiosyBarrancos_54.png" /> Rios y Barrancos'
            });
var format_RiosPrincipales_55 = new ol.format.GeoJSON();
var features_RiosPrincipales_55 = format_RiosPrincipales_55.readFeatures(json_RiosPrincipales_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosPrincipales_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosPrincipales_55.addFeatures(features_RiosPrincipales_55);
var lyr_RiosPrincipales_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosPrincipales_55, 
                style: style_RiosPrincipales_55,
                popuplayertitle: 'Rios Principales',
                interactive: true,
                title: '<img src="styles/legend/RiosPrincipales_55.png" /> Rios Principales'
            });
var format_EmbalsePuebladelArenoso_56 = new ol.format.GeoJSON();
var features_EmbalsePuebladelArenoso_56 = format_EmbalsePuebladelArenoso_56.readFeatures(json_EmbalsePuebladelArenoso_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmbalsePuebladelArenoso_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmbalsePuebladelArenoso_56.addFeatures(features_EmbalsePuebladelArenoso_56);
var lyr_EmbalsePuebladelArenoso_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmbalsePuebladelArenoso_56, 
                style: style_EmbalsePuebladelArenoso_56,
                popuplayertitle: 'Embalse Puebla del Arenoso',
                interactive: true,
                title: '<img src="styles/legend/EmbalsePuebladelArenoso_56.png" /> Embalse Puebla del Arenoso'
            });
var format_ZonaPolicaCauces100m_57 = new ol.format.GeoJSON();
var features_ZonaPolicaCauces100m_57 = format_ZonaPolicaCauces100m_57.readFeatures(json_ZonaPolicaCauces100m_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaPolicaCauces100m_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaPolicaCauces100m_57.addFeatures(features_ZonaPolicaCauces100m_57);
var lyr_ZonaPolicaCauces100m_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaPolicaCauces100m_57, 
                style: style_ZonaPolicaCauces100m_57,
                popuplayertitle: 'Zona Policía Cauces 100m',
                interactive: true,
                title: '<img src="styles/legend/ZonaPolicaCauces100m_57.png" /> Zona Policía Cauces 100m'
            });
var format_01_ConectoresFuncionales_58 = new ol.format.GeoJSON();
var features_01_ConectoresFuncionales_58 = format_01_ConectoresFuncionales_58.readFeatures(json_01_ConectoresFuncionales_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_01_ConectoresFuncionales_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_01_ConectoresFuncionales_58.addFeatures(features_01_ConectoresFuncionales_58);
var lyr_01_ConectoresFuncionales_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_01_ConectoresFuncionales_58, 
                style: style_01_ConectoresFuncionales_58,
                popuplayertitle: '01_Conectores Funcionales',
                interactive: true,
    title: '01_Conectores Funcionales<br />\
    <img src="styles/legend/01_ConectoresFuncionales_58_0.png" /> Conectores funcionales-Senderos<br />\
    <img src="styles/legend/01_ConectoresFuncionales_58_1.png" /> Conectores funcionales-Vias pecuarias<br />' });
var format_Carreterasprincipales_59 = new ol.format.GeoJSON();
var features_Carreterasprincipales_59 = format_Carreterasprincipales_59.readFeatures(json_Carreterasprincipales_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreterasprincipales_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreterasprincipales_59.addFeatures(features_Carreterasprincipales_59);
var lyr_Carreterasprincipales_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreterasprincipales_59, 
                style: style_Carreterasprincipales_59,
                popuplayertitle: 'Carreteras principales',
                interactive: true,
                title: '<img src="styles/legend/Carreterasprincipales_59.png" /> Carreteras principales'
            });
var format_SenderosGranRecorrido_60 = new ol.format.GeoJSON();
var features_SenderosGranRecorrido_60 = format_SenderosGranRecorrido_60.readFeatures(json_SenderosGranRecorrido_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SenderosGranRecorrido_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SenderosGranRecorrido_60.addFeatures(features_SenderosGranRecorrido_60);
var lyr_SenderosGranRecorrido_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SenderosGranRecorrido_60, 
                style: style_SenderosGranRecorrido_60,
                popuplayertitle: 'Senderos Gran Recorrido',
                interactive: true,
                title: '<img src="styles/legend/SenderosGranRecorrido_60.png" /> Senderos Gran Recorrido'
            });
var format_SGRSenderosGranRecorrido_61 = new ol.format.GeoJSON();
var features_SGRSenderosGranRecorrido_61 = format_SGRSenderosGranRecorrido_61.readFeatures(json_SGRSenderosGranRecorrido_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SGRSenderosGranRecorrido_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGRSenderosGranRecorrido_61.addFeatures(features_SGRSenderosGranRecorrido_61);
var lyr_SGRSenderosGranRecorrido_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGRSenderosGranRecorrido_61, 
                style: style_SGRSenderosGranRecorrido_61,
                popuplayertitle: 'SGR Senderos Gran Recorrido ',
                interactive: true,
                title: '<img src="styles/legend/SGRSenderosGranRecorrido_61.png" /> SGR Senderos Gran Recorrido '
            });
var format_CARRETERASCATEGORIZADAS_62 = new ol.format.GeoJSON();
var features_CARRETERASCATEGORIZADAS_62 = format_CARRETERASCATEGORIZADAS_62.readFeatures(json_CARRETERASCATEGORIZADAS_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARRETERASCATEGORIZADAS_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARRETERASCATEGORIZADAS_62.addFeatures(features_CARRETERASCATEGORIZADAS_62);
var lyr_CARRETERASCATEGORIZADAS_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARRETERASCATEGORIZADAS_62, 
                style: style_CARRETERASCATEGORIZADAS_62,
                popuplayertitle: 'CARRETERAS CATEGORIZADAS',
                interactive: true,
    title: 'CARRETERAS CATEGORIZADAS<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_0.png" /> Vial Estructurante<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_1.png" /> Vial Principal<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_2.png" /> Vial Secundario<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_3.png" /> Infraestructura a Ejecutar / Mejorar<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_4.png" /> Camino existente a Mejorar<br />\
    <img src="styles/legend/CARRETERASCATEGORIZADAS_62_5.png" /> <br />' });
var format_Ncleosurbanos_63 = new ol.format.GeoJSON();
var features_Ncleosurbanos_63 = format_Ncleosurbanos_63.readFeatures(json_Ncleosurbanos_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ncleosurbanos_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ncleosurbanos_63.addFeatures(features_Ncleosurbanos_63);
var lyr_Ncleosurbanos_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ncleosurbanos_63, 
                style: style_Ncleosurbanos_63,
                popuplayertitle: 'Núcleos urbanos',
                interactive: true,
                title: '<img src="styles/legend/Ncleosurbanos_63.png" /> Núcleos urbanos'
            });
var format_Carreteras_ejesynombres_64 = new ol.format.GeoJSON();
var features_Carreteras_ejesynombres_64 = format_Carreteras_ejesynombres_64.readFeatures(json_Carreteras_ejesynombres_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreteras_ejesynombres_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreteras_ejesynombres_64.addFeatures(features_Carreteras_ejesynombres_64);
var lyr_Carreteras_ejesynombres_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreteras_ejesynombres_64, 
                style: style_Carreteras_ejesynombres_64,
                popuplayertitle: 'Carreteras_ejes y nombres',
                interactive: true,
                title: '<img src="styles/legend/Carreteras_ejesynombres_64.png" /> Carreteras_ejes y nombres'
            });
var format_REDPRIMARIACOMARCAL_65 = new ol.format.GeoJSON();
var features_REDPRIMARIACOMARCAL_65 = format_REDPRIMARIACOMARCAL_65.readFeatures(json_REDPRIMARIACOMARCAL_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REDPRIMARIACOMARCAL_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REDPRIMARIACOMARCAL_65.addFeatures(features_REDPRIMARIACOMARCAL_65);
var lyr_REDPRIMARIACOMARCAL_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REDPRIMARIACOMARCAL_65, 
                style: style_REDPRIMARIACOMARCAL_65,
                popuplayertitle: 'RED PRIMARIA COMARCAL',
                interactive: true,
    title: 'RED PRIMARIA COMARCAL<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_0.png" /> Red Primaria Comunicaciones Viarias<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_1.png" /> Red Primaria Equipamientos-Deportivos<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_2.png" /> Red Primaria Infraestructuras Hidraúlicas<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_3.png" /> Red Primaria Infraestructuras de Seguridad<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_4.png" /> Red Primaria Infraestructuras Servicios Urbanos<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_5.png" /> Red Primaria Dotaciones Multiples<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_6.png" /> Red Primaria Asistencial<br />\
    <img src="styles/legend/REDPRIMARIACOMARCAL_65_7.png" /> Red Primaria de Zonas Verdes<br />' });
var format_LocalizacionesPropuestas_66 = new ol.format.GeoJSON();
var features_LocalizacionesPropuestas_66 = format_LocalizacionesPropuestas_66.readFeatures(json_LocalizacionesPropuestas_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacionesPropuestas_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacionesPropuestas_66.addFeatures(features_LocalizacionesPropuestas_66);
var lyr_LocalizacionesPropuestas_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalizacionesPropuestas_66, 
                style: style_LocalizacionesPropuestas_66,
                popuplayertitle: 'Localizaciones Propuestas',
                interactive: true,
                title: '<img src="styles/legend/LocalizacionesPropuestas_66.png" /> Localizaciones Propuestas'
            });
var format_CentroSanitario_67 = new ol.format.GeoJSON();
var features_CentroSanitario_67 = format_CentroSanitario_67.readFeatures(json_CentroSanitario_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentroSanitario_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroSanitario_67.addFeatures(features_CentroSanitario_67);
var lyr_CentroSanitario_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentroSanitario_67, 
                style: style_CentroSanitario_67,
                popuplayertitle: 'Centro Sanitario',
                interactive: true,
                title: '<img src="styles/legend/CentroSanitario_67.png" /> Centro Sanitario'
            });
var format_CentroEducativo_68 = new ol.format.GeoJSON();
var features_CentroEducativo_68 = format_CentroEducativo_68.readFeatures(json_CentroEducativo_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentroEducativo_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentroEducativo_68.addFeatures(features_CentroEducativo_68);
var lyr_CentroEducativo_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CentroEducativo_68, 
                style: style_CentroEducativo_68,
                popuplayertitle: 'Centro Educativo',
                interactive: true,
                title: '<img src="styles/legend/CentroEducativo_68.png" /> Centro Educativo'
            });
var format_AM_MunicipiosRelacionadoscpcopiar_69 = new ol.format.GeoJSON();
var features_AM_MunicipiosRelacionadoscpcopiar_69 = format_AM_MunicipiosRelacionadoscpcopiar_69.readFeatures(json_AM_MunicipiosRelacionadoscpcopiar_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AM_MunicipiosRelacionadoscpcopiar_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AM_MunicipiosRelacionadoscpcopiar_69.addFeatures(features_AM_MunicipiosRelacionadoscpcopiar_69);
var lyr_AM_MunicipiosRelacionadoscpcopiar_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AM_MunicipiosRelacionadoscpcopiar_69, 
                style: style_AM_MunicipiosRelacionadoscpcopiar_69,
                popuplayertitle: 'AM_MunicipiosRelacionadoscp copiar',
                interactive: true,
                title: '<img src="styles/legend/AM_MunicipiosRelacionadoscpcopiar_69.png" /> AM_MunicipiosRelacionadoscp copiar'
            });
var format_AM_Comarca_70 = new ol.format.GeoJSON();
var features_AM_Comarca_70 = format_AM_Comarca_70.readFeatures(json_AM_Comarca_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AM_Comarca_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AM_Comarca_70.addFeatures(features_AM_Comarca_70);
var lyr_AM_Comarca_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AM_Comarca_70, 
                style: style_AM_Comarca_70,
                popuplayertitle: 'AM_Comarca',
                interactive: true,
                title: '<img src="styles/legend/AM_Comarca_70.png" /> AM_Comarca'
            });
var group_PROPUESTAS = new ol.layer.Group({
                                layers: [lyr_LocalizacionesPropuestas_66,lyr_CentroSanitario_67,lyr_CentroEducativo_68,],
                                fold: 'open',
                                title: 'PROPUESTAS'});
var group_EQUIPAMIENTOSAESCALACOMARCAL = new ol.layer.Group({
                                layers: [lyr_CARRETERASCATEGORIZADAS_62,lyr_Ncleosurbanos_63,lyr_Carreteras_ejesynombres_64,lyr_REDPRIMARIACOMARCAL_65,],
                                fold: 'open',
                                title: 'EQUIPAMIENTOS A ESCALA COMARCAL'});
var group_RECORRIDOSCULTURALES = new ol.layer.Group({
                                layers: [lyr_SenderosGranRecorrido_60,lyr_SGRSenderosGranRecorrido_61,],
                                fold: 'open',
                                title: 'RECORRIDOS CULTURALES'});
var group_ConectoresFuncionales = new ol.layer.Group({
                                layers: [lyr_01_ConectoresFuncionales_58,lyr_Carreterasprincipales_59,],
                                fold: 'open',
                                title: 'Conectores Funcionales'});
var group_CorredoresFluviales = new ol.layer.Group({
                                layers: [lyr_AreasconRiesgoInundabilidad_53,lyr_RiosyBarrancos_54,lyr_RiosPrincipales_55,lyr_EmbalsePuebladelArenoso_56,lyr_ZonaPolicaCauces100m_57,],
                                fold: 'open',
                                title: 'Corredores Fluviales'});
var group_Conectoresecolgicos = new ol.layer.Group({
                                layers: [lyr_CorredoresTerritoriales_52,],
                                fold: 'open',
                                title: 'Conectores ecológicos'});
var group_ELEMENTOSDEINTERSAMBIENTAL = new ol.layer.Group({
                                layers: [lyr_UDPaisajeAltoValor_43,lyr_ParajesNaturalesMunicipales_44,lyr_ParquesNaturalesProtegidos_45,lyr_Terrenosforestalesestratgicos_46,lyr_HbitatsdeIntersComunitario_47,lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48,lyr_ZEC_ZonasdeEspecialConservacin_49,lyr_LugardeIntersComunitario_50,lyr_Microrreservas_51,],
                                fold: 'open',
                                title: 'ELEMENTOS DE INTERÉS AMBIENTAL'});
var group_ELEMENTOSDEINTERSTERRITORIAL = new ol.layer.Group({
                                layers: [lyr_Cuevas_41,lyr_BienesPatrimoniales_42,],
                                fold: 'open',
                                title: 'ELEMENTOS DE INTERÉS TERRITORIAL'});
var group_RedPrimariaMunicipal = new ol.layer.Group({
                                layers: [lyr_05_RedPrimariaZucaina_19,lyr_05_RedPrimariaVillamalur_20,lyr_05_RedPrimariaVillanuevadeViver_21,lyr_05_RedPrimariaVallat_22,lyr_05_RedPrimariaVillahermosadelRo_23,lyr_05_RedPrimariaTorrechiva_24,lyr_05_RedPrimariaTorralbadelPinar_25,lyr_05_RedPrimariaToga_26,lyr_05_RedPrimariaPuebladelArenoso_27,lyr_05_RedPrimariaMontanejos_28,lyr_05_RedPrimariaMontn_29,lyr_05_RedPrimariaLudiente_30,lyr_05_RedPrimariaFuentelaReina_31,lyr_05_RedPrimariaFuentesdeAydar_32,lyr_05_RedPrimariaFanzara_33,lyr_05_RedPrimariaEspadilla_34,lyr_05_RedPrimariaCortesdelArenoso_35,lyr_05_RedPrimariaCirat_36,lyr_05_RedPrimariaAydar_37,lyr_05_RedPrimariaArgelita_38,lyr_05_RedPrimariaArauel_39,lyr_05_RedPrimariaCastillodeVillamalefa_40,],
                                fold: 'close',
                                title: 'Red Primaria Municipal'});
var group_Afecciones = new ol.layer.Group({
                                layers: [lyr_04_Senderos_17,lyr_04_AfeccionPatrimonio_18,],
                                fold: 'open',
                                title: 'Afecciones'});
var group_Inundabilidad = new ol.layer.Group({
                                layers: [lyr_04_RiesgodeInundacin_16,],
                                fold: 'open',
                                title: 'Inundabilidad'});
var group_Cauces = new ol.layer.Group({
                                layers: [lyr_04_Otroscauces_12,lyr_04_ZonaPolicaCauces100m_13,lyr_04_Servidumbrecauces5m_14,lyr_04_DominioPblicoHidrulicoDPH_15,],
                                fold: 'open',
                                title: 'Cauces'});
var group_TransporteElctrico = new ol.layer.Group({
                                layers: [lyr_04_FranjaServidumbre25mL_10,lyr_04_LineasElectricas_11,],
                                fold: 'open',
                                title: 'Transporte Eléctrico'});
var group_ProteccionIncendios = new ol.layer.Group({
                                layers: [lyr_04_Areascortafuegos_7,lyr_04_Lneascortafuegos_8,lyr_04_Areasincendiadas_9,],
                                fold: 'open',
                                title: 'Proteccion Incendios'});
var group_ProteccinyReservaNatural = new ol.layer.Group({
                                layers: [lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5,lyr_04_Microreservas_6,],
                                fold: 'open',
                                title: 'Protección y Reserva Natural'});
var group_PECV = new ol.layer.Group({
                                layers: [lyr_PECV_Aptitud_aprovechamiento_eolico_4,],
                                fold: 'open',
                                title: 'PECV'});
var group_Derechosmineros = new ol.layer.Group({
                                layers: [lyr_04_Derechosmineros_3,],
                                fold: 'open',
                                title: 'Derechos mineros'});
var group_Zonificacin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Zonificación'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Catastro_2.setVisible(true);lyr_04_Derechosmineros_3.setVisible(true);lyr_PECV_Aptitud_aprovechamiento_eolico_4.setVisible(true);lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.setVisible(true);lyr_04_Microreservas_6.setVisible(true);lyr_04_Areascortafuegos_7.setVisible(true);lyr_04_Lneascortafuegos_8.setVisible(true);lyr_04_Areasincendiadas_9.setVisible(true);lyr_04_FranjaServidumbre25mL_10.setVisible(true);lyr_04_LineasElectricas_11.setVisible(true);lyr_04_Otroscauces_12.setVisible(true);lyr_04_ZonaPolicaCauces100m_13.setVisible(true);lyr_04_Servidumbrecauces5m_14.setVisible(true);lyr_04_DominioPblicoHidrulicoDPH_15.setVisible(true);lyr_04_RiesgodeInundacin_16.setVisible(true);lyr_04_Senderos_17.setVisible(true);lyr_04_AfeccionPatrimonio_18.setVisible(true);lyr_05_RedPrimariaZucaina_19.setVisible(true);lyr_05_RedPrimariaVillamalur_20.setVisible(true);lyr_05_RedPrimariaVillanuevadeViver_21.setVisible(true);lyr_05_RedPrimariaVallat_22.setVisible(true);lyr_05_RedPrimariaVillahermosadelRo_23.setVisible(true);lyr_05_RedPrimariaTorrechiva_24.setVisible(true);lyr_05_RedPrimariaTorralbadelPinar_25.setVisible(true);lyr_05_RedPrimariaToga_26.setVisible(true);lyr_05_RedPrimariaPuebladelArenoso_27.setVisible(true);lyr_05_RedPrimariaMontanejos_28.setVisible(true);lyr_05_RedPrimariaMontn_29.setVisible(true);lyr_05_RedPrimariaLudiente_30.setVisible(true);lyr_05_RedPrimariaFuentelaReina_31.setVisible(true);lyr_05_RedPrimariaFuentesdeAydar_32.setVisible(true);lyr_05_RedPrimariaFanzara_33.setVisible(true);lyr_05_RedPrimariaEspadilla_34.setVisible(true);lyr_05_RedPrimariaCortesdelArenoso_35.setVisible(true);lyr_05_RedPrimariaCirat_36.setVisible(true);lyr_05_RedPrimariaAydar_37.setVisible(true);lyr_05_RedPrimariaArgelita_38.setVisible(true);lyr_05_RedPrimariaArauel_39.setVisible(true);lyr_05_RedPrimariaCastillodeVillamalefa_40.setVisible(true);lyr_Cuevas_41.setVisible(true);lyr_BienesPatrimoniales_42.setVisible(true);lyr_UDPaisajeAltoValor_43.setVisible(true);lyr_ParajesNaturalesMunicipales_44.setVisible(true);lyr_ParquesNaturalesProtegidos_45.setVisible(true);lyr_Terrenosforestalesestratgicos_46.setVisible(true);lyr_HbitatsdeIntersComunitario_47.setVisible(true);lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48.setVisible(true);lyr_ZEC_ZonasdeEspecialConservacin_49.setVisible(true);lyr_LugardeIntersComunitario_50.setVisible(true);lyr_Microrreservas_51.setVisible(true);lyr_CorredoresTerritoriales_52.setVisible(true);lyr_AreasconRiesgoInundabilidad_53.setVisible(true);lyr_RiosyBarrancos_54.setVisible(true);lyr_RiosPrincipales_55.setVisible(true);lyr_EmbalsePuebladelArenoso_56.setVisible(true);lyr_ZonaPolicaCauces100m_57.setVisible(true);lyr_01_ConectoresFuncionales_58.setVisible(true);lyr_Carreterasprincipales_59.setVisible(true);lyr_SenderosGranRecorrido_60.setVisible(true);lyr_SGRSenderosGranRecorrido_61.setVisible(true);lyr_CARRETERASCATEGORIZADAS_62.setVisible(true);lyr_Ncleosurbanos_63.setVisible(true);lyr_Carreteras_ejesynombres_64.setVisible(true);lyr_REDPRIMARIACOMARCAL_65.setVisible(true);lyr_LocalizacionesPropuestas_66.setVisible(true);lyr_CentroSanitario_67.setVisible(true);lyr_CentroEducativo_68.setVisible(true);lyr_AM_MunicipiosRelacionadoscpcopiar_69.setVisible(true);lyr_AM_Comarca_70.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_Catastro_2,group_Derechosmineros,group_PECV,group_ProteccinyReservaNatural,group_ProteccionIncendios,group_TransporteElctrico,group_Cauces,group_Inundabilidad,group_Afecciones,group_RedPrimariaMunicipal,group_ELEMENTOSDEINTERSTERRITORIAL,group_ELEMENTOSDEINTERSAMBIENTAL,group_Conectoresecolgicos,group_CorredoresFluviales,group_ConectoresFuncionales,group_RECORRIDOSCULTURALES,group_EQUIPAMIENTOSAESCALACOMARCAL,group_PROPUESTAS,lyr_AM_MunicipiosRelacionadoscpcopiar_69,lyr_AM_Comarca_70];
lyr_04_Derechosmineros_3.set('fieldAliases', {'ID': 'ID', 'Nombre': 'Nombre', 'Organismo': 'Organismo', 'Tipo_Derec': 'Tipo_Derec', 'Fraccion': 'Fraccion', 'Numero_Reg': 'Numero_Reg', 'Superficie': 'Superficie', 'Seccion': 'Seccion', 'Paraje': 'Paraje', 'Situacion_': 'Situacion_', 'Titular': 'Titular', 'Sustancias': 'Sustancias', 'GeometriaT': 'GeometriaT', });
lyr_PECV_Aptitud_aprovechamiento_eolico_4.set('fieldAliases', {'id': 'id', 'tipo_espac': 'tipo_espac', 'codigo': 'codigo', 'aptitud': 'aptitud', });
lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.set('fieldAliases', {'site_code': 'site_code', 'nombre': 'nombre', 'provincia': 'provincia', 'municipio': 'municipio', 'municipio2': 'municipio2', 'directiva': 'directiva', 'doce': 'doce', 'fecha': 'fecha', 'correccion': 'correccion', 'hect_web': 'hect_web', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'shape_leng': 'shape_leng', 'leg_link': 'leg_link', 'nomficha': 'nomficha', 'localid': 'localid', 'namespace': 'namespace', 'legfoudate': 'legfoudate', 'titledoc': 'titledoc', 'datedoc': 'datedoc', 'urldoc': 'urldoc', 'designatio': 'designatio', 'percentage': 'percentage', 'language': 'language', 'namestatus': 'namestatus', 'nativeness': 'nativeness', 'pronunciat': 'pronunciat', 'sourcename': 'sourcename', 'text': 'text', 'script': 'script', 'siteprotec': 'siteprotec', 'desigschem': 'desigschem', 'designat_1': 'designat_1', 'datedoc_co': 'datedoc_co', 'datedoc__1': 'datedoc__1', 'desigsch_1': 'desigsch_1', 'versionid': 'versionid', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_04_Microreservas_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'provincia': 'provincia', 'comarca': 'comarca', 'cod_comarc': 'cod_comarc', 'area_ha': 'area_ha', 'perimetro': 'perimetro', 'Microrrese': 'Microrrese', 'municipio': 'municipio', });
lyr_04_Areascortafuegos_7.set('fieldAliases', {'ORDEN': 'ORDEN', 'ELEMENTO': 'ELEMENTO', 'TRAMO': 'TRAMO', 'ETIQUETA': 'ETIQUETA', 'REPRESENTA': 'REPRESENTA', 'DEMARCACIO': 'DEMARCACIO', 'ESTADO': 'ESTADO', 'UA': 'UA', 'LONGITUD': 'LONGITUD', 'CODIGO': 'CODIGO', 'SUBTRAMO': 'SUBTRAMO', 'BA_LADOA': 'BA_LADOA', 'D_LADOA': 'D_LADOA', 'DEC': 'DEC', 'BA_LADO1': 'BA_LADO1', 'D_LADO1': 'D_LADO1', 'TOTAL': 'TOTAL', 'CAMINO': 'CAMINO', 'TIPOLOGIA': 'TIPOLOGIA', });
lyr_04_Lneascortafuegos_8.set('fieldAliases', {'DEMARCACIO': 'DEMARCACIO', 'XETRS89': 'XETRS89', 'YETRS89': 'YETRS89', 'CODIGO': 'CODIGO', });
lyr_04_Areasincendiadas_9.set('fieldAliases', {'et_id': 'et_id', 'numparte': 'numparte', 'anyo': 'anyo', 'c_a': 'c_a', 'ccaa_nom': 'ccaa_nom', 'prov': 'prov', 'prov_nom': 'prov_nom', 'comarca': 'comarca', 'com_nom': 'com_nom', 'com_codicv': 'com_codicv', 'c_muni': 'c_muni', 'codmun': 'codmun', 'nom_mun': 'nom_mun', 'e_m': 'e_m', 'paraje': 'paraje', 'hoja': 'hoja', 'cuad': 'cuad', 'huso': 'huso', 'x': 'x', 'y': 'y', 'f_detec': 'f_detec', 'f_det_amd': 'f_det_amd', 'h_detec': 'h_detec', 'f_pm_ter': 'f_pm_ter', 'h_pm_ter': 'h_pm_ter', 'fpm_aeext': 'fpm_aeext', 'hpm_aeext': 'hpm_aeext', 'fpbrighel': 'fpbrighel', 'hpbrighel': 'hpbrighel', 'fcontrol': 'fcontrol', 'hcontrol': 'hcontrol', 'fextinc': 'fextinc', 'hextinc': 'hextinc', 'detecpor': 'detecpor', 'detecp_txt': 'detecp_txt', 'vigfij': 'vigfij', 'inijunta': 'inijunta', 'inijun_txt': 'inijun_txt', 't_causa': 't_causa', 't_caus_txt': 't_caus_txt', 'g_causa': 'g_causa', 'g_caus_txt': 'g_caus_txt', 'causas': 'causas', 'motivac': 'motivac', 'motiv_txt': 'motiv_txt', 'dtormenta': 'dtormenta', 'causante': 'causante', 'causan_txt': 'causan_txt', 'ncausant': 'ncausant', 'gcc': 'gcc', 'causa_txt': 'causa_txt', 'clasedia': 'clasedia', 'cdia_txt': 'cdia_txt', 'estacion': 'estacion', 'hora': 'hora', 'dulluvia': 'dulluvia', 'tempmax': 'tempmax', 'h_relat': 'h_relat', 'v_viento': 'v_viento', 'd_viento': 'd_viento', 'mod_com': 'mod_com', 'mod_co_txt': 'mod_co_txt', 'p_ign': 'p_ign', 'ind_pel': 'ind_pel', 'ind_pe_txt': 'ind_pe_txt', 'tip_fuego': 'tip_fuego', 't_fueg_txt': 't_fueg_txt', 'medio': 'medio', 'medio_txt': 'medio_txt', 'd_apie': 'd_apie', 'tecnicos': 'tecnicos', 'agentes_f': 'agentes_f', 'cuadybrig': 'cuadybrig', 'bomberos': 'bomberos', 'volun_org': 'volun_org', 'operciv': 'operciv', 'guarcivil': 'guarcivil', 'f_ejercit': 'f_ejercit', 'autobomba': 'autobomba', 'buldozzer': 'buldozzer', 'tractores': 'tractores', 'otros': 'otros', 'avianfnum': 'avianfnum', 'avianfdes': 'avianfdes', 'avicarnum': 'avicarnum', 'avicardes': 'avicardes', 'helextnum': 'helextnum', 'helextbt': 'helextbt', 'helextdes': 'helextdes', 'heltranum': 'heltranum', 'heltrabt': 'heltrabt', 'heltrades': 'heltrades', 'aercoonum': 'aercoonum', 'retard': 'retard', 'retard_txt': 'retard_txt', 'ataque': 'ataque', 'ataque_txt': 'ataque_txt', 'tatacindi': 'tatacindi', 'tataci_txt': 'tataci_txt', 'muertos': 'muertos', 'heridos': 'heridos', 'arb_publ': 'arb_publ', 'a_est_ca': 'a_est_ca', 'a_consor': 'a_consor', 'a_punca': 'a_punca', 'a_partic': 'a_partic', 'tot_arb': 'tot_arb', 'narb_publ': 'narb_publ', 'na_est_ca': 'na_est_ca', 'na_consor': 'na_consor', 'na_punca': 'na_punca', 'na_partic': 'na_partic', 'tot_narb': 'tot_narb', 'sup_nf': 'sup_nf', 'sup_f': 'sup_f', 'tot_est': 'tot_est', 'eimp_glob': 'eimp_glob', 'sup_q_a': 'sup_q_a', 'v_silv': 'v_silv', 'erosion': 'erosion', 'paisaje': 'paisaje', 'eco_local': 'eco_local', 'c_carret': 'c_carret', 'cl_ferro': 'cl_ferro', 'cs_elec': 'cs_elec', 'c_tlf': 'c_tlf', 'des_viv': 'des_viv', 'viv_ind': 'viv_ind', 'enp': 'enp', 'refor': 'refor', 'part_asoc': 'part_asoc', 'enp_1': 'enp_1', 'enp_1_txt': 'enp_1_txt', 's_arb': 's_arb', 's_nfor': 's_nfor', 'snarblen': 'snarblen', 'snarbherb': 'snarbherb', 'id_enp': 'id_enp', 'id_enp_txt': 'id_enp_txt', 'observ': 'observ', 'supcar_ha': 'supcar_ha', 'NIVELPREE': 'NIVELPREE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_04_FranjaServidumbre25mL_10.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'ficha': 'ficha', 'grupo': 'grupo', 'texto': 'texto', 'clave_top': 'clave_top', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_04_LineasElectricas_11.set('fieldAliases', {'tensio': 'tensio', });
lyr_04_Otroscauces_12.set('fieldAliases', {'regim': 'regim', 'Nombre': 'Nombre', 'Nivel': 'Nivel', });
lyr_04_ZonaPolicaCauces100m_13.set('fieldAliases', {'id': 'id', });
lyr_04_Servidumbrecauces5m_14.set('fieldAliases', {'id': 'id', });
lyr_04_DominioPblicoHidrulicoDPH_15.set('fieldAliases', {'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'RIO': 'RIO', 'LONG_KM': 'LONG_KM', 'HIPOTESIS': 'HIPOTESIS', 'HIDROLOGIA': 'HIDROLOGIA', 'PRECISION': 'PRECISION', 'HIDRAUL': 'HIDRAUL', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'ESCALA_REP': 'ESCALA_REP', 'DOCUMENTO': 'DOCUMENTO', 'FECHA': 'FECHA', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'Q_M3_S': 'Q_M3_S', 'FECHA_RESO': 'FECHA_RESO', 'FECHA_PUBL': 'FECHA_PUBL', 'BO_PUBLICA': 'BO_PUBLICA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_04_RiesgodeInundacin_16.set('fieldAliases', {'leyenda': 'leyenda', 'area': 'area', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_04_Senderos_17.set('fieldAliases', {'tipo': 'tipo', 'nombre': 'nombre', 'denominaci': 'denominaci', 'entidad_pr': 'entidad_pr', 'comarca': 'comarca', 'provincia': 'provincia', 'municipio': 'municipio', 'longitud': 'longitud', 'desnivel': 'desnivel', 'tiempo_est': 'tiempo_est', 'dificultad': 'dificultad', 'punto_de_i': 'punto_de_i', 'longitud_d': 'longitud_d', 'longitud_s': 'longitud_s', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', });
lyr_04_AfeccionPatrimonio_18.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Municipio': 'Municipio', 'Cultural': 'Cultural', 'Visual': 'Visual', 'Ambiental': 'Ambiental', 'Obsv.': 'Obsv.', 'Proteccion': 'Proteccion', 'Código': 'Código', 'Protecci2': 'Protecci2', 'X': 'X', 'Y': 'Y', });
lyr_05_RedPrimariaZucaina_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaVillamalur_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaVillanuevadeViver_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaVallat_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaVillahermosadelRo_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaTorrechiva_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaTorralbadelPinar_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaToga_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaPuebladelArenoso_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaMontanejos_28.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaMontn_29.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaLudiente_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaFuentelaReina_31.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaFuentesdeAydar_32.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaFanzara_33.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaEspadilla_34.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaCortesdelArenoso_35.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaCirat_36.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaAydar_37.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaArgelita_38.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaArauel_39.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_05_RedPrimariaCastillodeVillamalefa_40.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', });
lyr_Cuevas_41.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Municipio': 'Municipio', 'Cultural': 'Cultural', 'Visual': 'Visual', 'Ambiental': 'Ambiental', 'Obsv.': 'Obsv.', 'Proteccion': 'Proteccion', 'Código': 'Código', 'Protecci2': 'Protecci2', });
lyr_BienesPatrimoniales_42.set('fieldAliases', {'fid': 'fid', 'RP': 'RP', 'Municipio': 'Municipio', 'Cultural': 'Cultural', 'Visual': 'Visual', 'Ambiental': 'Ambiental', 'Obsv.': 'Obsv.', 'Proteccion': 'Proteccion', 'Código': 'Código', 'Protecci2': 'Protecci2', 'X': 'X', 'Y': 'Y', 'RP Etiquet': 'RP Etiquet', });
lyr_UDPaisajeAltoValor_43.set('fieldAliases', {'ID': 'ID', 'Comarca': 'Comarca', 'Municipio': 'Municipio', 'MunRelacio': 'MunRelacio', 'ZEPA': 'ZEPA', 'UPCastello': 'UPCastello', 'PATCastell': 'PATCastell', 'UP': 'UP', 'Nom_UP': 'Nom_UP', 'SubUP': 'SubUP', 'Nom_SubUP': 'Nom_SubUP', 'Consecutiv': 'Consecutiv', 'Denominaci': 'Denominaci', 'Fuente': 'Fuente', 'CodigoUP': 'CodigoUP', 'Área': 'Área', 'Toponimia': 'Toponimia', 'Valoració': 'Valoració', });
lyr_ParajesNaturalesMunicipales_44.set('fieldAliases', {'parajes_mu': 'parajes_mu', });
lyr_ParquesNaturalesProtegidos_45.set('fieldAliases', {'figura_pro': 'figura_pro', 'nombre': 'nombre', });
lyr_Terrenosforestalesestratgicos_46.set('fieldAliases', {'RP': 'RP', 'Municipio': 'Municipio', 'Obsv.': 'Obsv.', });
lyr_HbitatsdeIntersComunitario_47.set('fieldAliases', {'hab_lay': 'hab_lay', });
lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48.set('fieldAliases', {'nombre': 'nombre', });
lyr_ZEC_ZonasdeEspecialConservacin_49.set('fieldAliases', {'site_code': 'site_code', 'nombre': 'nombre', 'provincia': 'provincia', 'municipio': 'municipio', 'municipio2': 'municipio2', 'directiva': 'directiva', 'doce': 'doce', 'fecha': 'fecha', 'correccion': 'correccion', 'hect_web': 'hect_web', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'shape_leng': 'shape_leng', 'leg_link': 'leg_link', 'nomficha': 'nomficha', 'localid': 'localid', 'namespace': 'namespace', 'legfoudate': 'legfoudate', 'titledoc': 'titledoc', 'datedoc': 'datedoc', 'urldoc': 'urldoc', 'designatio': 'designatio', 'percentage': 'percentage', 'language': 'language', 'namestatus': 'namestatus', 'nativeness': 'nativeness', 'pronunciat': 'pronunciat', 'sourcename': 'sourcename', 'text': 'text', 'script': 'script', 'siteprotec': 'siteprotec', 'desigschem': 'desigschem', 'designat_1': 'designat_1', 'datedoc_co': 'datedoc_co', 'datedoc__1': 'datedoc__1', 'desigsch_1': 'desigsch_1', 'versionid': 'versionid', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_LugardeIntersComunitario_50.set('fieldAliases', {'site_code': 'site_code', 'nombre': 'nombre', 'provincia': 'provincia', 'municipio': 'municipio', 'municipio2': 'municipio2', 'directiva': 'directiva', 'doce': 'doce', 'fecha': 'fecha', 'correccion': 'correccion', 'hect_web': 'hect_web', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'shape_leng': 'shape_leng', 'leg_link': 'leg_link', 'nomficha': 'nomficha', 'localid': 'localid', 'namespace': 'namespace', 'legfoudate': 'legfoudate', 'titledoc': 'titledoc', 'datedoc': 'datedoc', 'urldoc': 'urldoc', 'designatio': 'designatio', 'percentage': 'percentage', 'language': 'language', 'namestatus': 'namestatus', 'nativeness': 'nativeness', 'pronunciat': 'pronunciat', 'sourcename': 'sourcename', 'text': 'text', 'script': 'script', 'siteprotec': 'siteprotec', 'desigschem': 'desigschem', 'designat_1': 'designat_1', 'datedoc_co': 'datedoc_co', 'datedoc__1': 'datedoc__1', 'desigsch_1': 'desigsch_1', 'versionid': 'versionid', 'shape_Le_1': 'shape_Le_1', 'shape_Area': 'shape_Area', });
lyr_Microrreservas_51.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'provincia': 'provincia', 'comarca': 'comarca', 'cod_comarc': 'cod_comarc', 'area_ha': 'area_ha', 'perimetro': 'perimetro', 'Microrrese': 'Microrrese', 'municipio': 'municipio', });
lyr_CorredoresTerritoriales_52.set('fieldAliases', {'corredores': 'corredores', });
lyr_AreasconRiesgoInundabilidad_53.set('fieldAliases', {'codigo': 'codigo', 'zona': 'zona', 'd_pelig': 'd_pelig', 'n_pelig': 'n_pelig', 'corriente': 'corriente', 'tipo': 'tipo', 'desde': 'desde', 'hasta': 'hasta', 'calado': 'calado', 'retorno': 'retorno', 'ambito': 'ambito', 'hectares': 'hectares', 'area': 'area', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_RiosyBarrancos_54.set('fieldAliases', {'regim': 'regim', 'Nombre': 'Nombre', 'Nivel': 'Nivel', });
lyr_RiosPrincipales_55.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'texto_norm': 'texto_norm', 'clave_top': 'clave_top', 'cv100': 'cv100', });
lyr_EmbalsePuebladelArenoso_56.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ficha': 'ficha', 'grupo': 'grupo', 'texto': 'texto', 'clave_top': 'clave_top', });
lyr_ZonaPolicaCauces100m_57.set('fieldAliases', {'id': 'id', });
lyr_01_ConectoresFuncionales_58.set('fieldAliases', {'ID': 'ID', 'RP': 'RP', 'Municipio': 'Municipio', 'Cultural': 'Cultural', 'Visual': 'Visual', 'Ambiental': 'Ambiental', 'Obsv.': 'Obsv.', 'Proteccion': 'Proteccion', 'Código': 'Código', 'Protecci2': 'Protecci2', 'Valor': 'Valor', 'ValorRango': 'ValorRango', 'Prelacion': 'Prelacion', });
lyr_Carreterasprincipales_59.set('fieldAliases', {'modificado': 'modificado', 'n_plat': 'n_plat', 'length': 'length', 'long': 'long', 'nom_ant': 'nom_ant', 'nom_act': 'nom_act', 'nom_fut': 'nom_fut', 'tit_ant': 'tit_ant', 'tit_act': 'tit_act', 'tit_fut': 'tit_fut', 'tipus_ant': 'tipus_ant', 'tipus_act': 'tipus_act', 'tipus_fut': 'tipus_fut', 'lleg_act': 'lleg_act', 'lleg_fut': 'lleg_fut', 'rotonda': 'rotonda', 'sentidos': 'sentidos', 'sec_cons': 'sec_cons', 'tunel': 'tunel', 'id_tunel': 'id_tunel', 'lleg_wms': 'lleg_wms', 'fecha_mod': 'fecha_mod', 'fecha_ent': 'fecha_ent', 'fecha_sal': 'fecha_sal', 'act': 'act', 'gran_cap': 'gran_cap', 'tipus_des': 'tipus_des', 'tit_des': 'tit_des', 'tunel_des': 'tunel_des', 'rotond_des': 'rotond_des', 'shape_Leng': 'shape_Leng', });
lyr_SenderosGranRecorrido_60.set('fieldAliases', {'tipo': 'tipo', 'nombre': 'nombre', 'denominaci': 'denominaci', 'entidad_pr': 'entidad_pr', 'comarca': 'comarca', 'provincia': 'provincia', 'municipio': 'municipio', 'longitud': 'longitud', 'desnivel': 'desnivel', 'tiempo_est': 'tiempo_est', 'dificultad': 'dificultad', 'punto_de_i': 'punto_de_i', 'longitud_d': 'longitud_d', 'longitud_s': 'longitud_s', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', });
lyr_SGRSenderosGranRecorrido_61.set('fieldAliases', {'tipo': 'tipo', 'nombre': 'nombre', 'denominaci': 'denominaci', 'entidad_pr': 'entidad_pr', 'comarca': 'comarca', 'provincia': 'provincia', 'municipio': 'municipio', 'longitud': 'longitud', 'desnivel': 'desnivel', 'tiempo_est': 'tiempo_est', 'dificultad': 'dificultad', 'punto_de_i': 'punto_de_i', 'longitud_d': 'longitud_d', 'longitud_s': 'longitud_s', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', });
lyr_CARRETERASCATEGORIZADAS_62.set('fieldAliases', {'nom_ant': 'nom_ant', 'nom_act': 'nom_act', 'lleg_act': 'lleg_act', 'lleg_fut': 'lleg_fut', 'rotonda': 'rotonda', 'sentidos': 'sentidos', 'sec_cons': 'sec_cons', 'tunel': 'tunel', 'id_tunel': 'id_tunel', 'lleg_wms': 'lleg_wms', 'act': 'act', 'gran_cap': 'gran_cap', 'tipus_des': 'tipus_des', 'tit_des': 'tit_des', 'tunel_des': 'tunel_des', 'rotond_des': 'rotond_des', 'shape_Leng': 'shape_Leng', 'Categoria': 'Categoria', });
lyr_Ncleosurbanos_63.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'Zona PAT': 'Zona PAT', 'Pedania_mp': 'Pedania_mp', 'Desc_Z PAT': 'Desc_Z PAT', 'superficie': 'superficie', 'Pob2024': 'Pob2024', });
lyr_Carreteras_ejesynombres_64.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_actual': 'nom_actual', 'jerarquia_': 'jerarquia_', 'jerarqui_1': 'jerarqui_1', 'titular_ca': 'titular_ca', 'titular_va': 'titular_va', 'calzada_ca': 'calzada_ca', 'calzada_va': 'calzada_va', 'sentido_ca': 'sentido_ca', 'sentido_va': 'sentido_va', 'ncarriles': 'ncarriles', 'situacionv': 'situacionv', 'situacio_1': 'situacio_1', 'tipovehicu': 'tipovehicu', 'tipovehi_1': 'tipovehi_1', 'firme_cas': 'firme_cas', 'firme_val': 'firme_val', 'clau': 'clau', 'zonasconse': 'zonasconse', 'acceso_cas': 'acceso_cas', 'acceso_val': 'acceso_val', 'tipotramo_': 'tipotramo_', 'tipotram_1': 'tipotram_1', 'clase_cas': 'clase_cas', 'clase_val': 'clase_val', 'anchoplata': 'anchoplata', 'restricalt': 'restricalt', 'restricanc': 'restricanc', 'restriclon': 'restriclon', 'restricpes': 'restricpes', 'limitevelo': 'limitevelo', 'validodesd': 'validodesd', 'nom_ant_ca': 'nom_ant_ca', 'id_vial': 'id_vial', 'nombre': 'nombre', 'bajabd': 'bajabd', 'altabd': 'altabd', 'created_us': 'created_us', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'globalid': 'globalid', });
lyr_REDPRIMARIACOMARCAL_65.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'Areas': 'Areas', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', });
lyr_LocalizacionesPropuestas_66.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'noms_mun': 'noms_mun', 'expediente': 'expediente', 'denominaci': 'denominaci', 'denomina_1': 'denomina_1', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'descripcio': 'descripcio', 'descripc_1': 'descripc_1', 'dotacion': 'dotacion', 'dot_descri': 'dot_descri', 'dot_desc_1': 'dot_desc_1', 'info_adici': 'info_adici', 'info_adi_1': 'info_adi_1', 'url_abs': 'url_abs', 'superficie': 'superficie', });
lyr_CentroSanitario_67.set('fieldAliases', {'fid': 'fid', });
lyr_CentroEducativo_68.set('fieldAliases', {'fid': 'fid', });
lyr_AM_MunicipiosRelacionadoscpcopiar_69.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'cod_ine_mu': 'cod_ine_mu', 'cod_ine__1': 'cod_ine__1', 'cod_catast': 'cod_catast', 'nom_mun': 'nom_mun', 'nom_mun_ca': 'nom_mun_ca', 'nom_mun__1': 'nom_mun__1', 'nom_mun_va': 'nom_mun_va', 'nom_mun__2': 'nom_mun__2', 'noms_mun': 'noms_mun', 'comarca': 'comarca', 'provincia': 'provincia', 'perimetro': 'perimetro', 'area_ha': 'area_ha', });
lyr_AM_Comarca_70.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'comarca': 'comarca', 'provincia': 'provincia', 'perimetro': 'perimetro', 'Área_m2': 'Área_m2', 'Área_ha': 'Área_ha', 'Área km2': 'Área km2', });
lyr_04_Derechosmineros_3.set('fieldImages', {'ID': 'TextEdit', 'Nombre': 'TextEdit', 'Organismo': 'TextEdit', 'Tipo_Derec': 'TextEdit', 'Fraccion': 'TextEdit', 'Numero_Reg': 'TextEdit', 'Superficie': 'TextEdit', 'Seccion': 'TextEdit', 'Paraje': 'TextEdit', 'Situacion_': 'TextEdit', 'Titular': 'TextEdit', 'Sustancias': 'TextEdit', 'GeometriaT': 'TextEdit', });
lyr_PECV_Aptitud_aprovechamiento_eolico_4.set('fieldImages', {'id': 'TextEdit', 'tipo_espac': 'TextEdit', 'codigo': 'TextEdit', 'aptitud': 'TextEdit', });
lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.set('fieldImages', {'site_code': 'TextEdit', 'nombre': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'municipio2': 'TextEdit', 'directiva': 'TextEdit', 'doce': 'TextEdit', 'fecha': 'TextEdit', 'correccion': 'TextEdit', 'hect_web': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'shape_leng': 'TextEdit', 'leg_link': 'TextEdit', 'nomficha': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'legfoudate': 'TextEdit', 'titledoc': 'TextEdit', 'datedoc': 'TextEdit', 'urldoc': 'TextEdit', 'designatio': 'TextEdit', 'percentage': 'TextEdit', 'language': 'TextEdit', 'namestatus': 'TextEdit', 'nativeness': 'TextEdit', 'pronunciat': 'TextEdit', 'sourcename': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'siteprotec': 'TextEdit', 'desigschem': 'TextEdit', 'designat_1': 'TextEdit', 'datedoc_co': 'TextEdit', 'datedoc__1': 'TextEdit', 'desigsch_1': 'TextEdit', 'versionid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_04_Microreservas_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'provincia': 'TextEdit', 'comarca': 'TextEdit', 'cod_comarc': 'TextEdit', 'area_ha': 'TextEdit', 'perimetro': 'TextEdit', 'Microrrese': 'TextEdit', 'municipio': 'TextEdit', });
lyr_04_Areascortafuegos_7.set('fieldImages', {'ORDEN': 'TextEdit', 'ELEMENTO': 'TextEdit', 'TRAMO': 'TextEdit', 'ETIQUETA': 'TextEdit', 'REPRESENTA': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ESTADO': 'TextEdit', 'UA': 'TextEdit', 'LONGITUD': 'TextEdit', 'CODIGO': 'TextEdit', 'SUBTRAMO': 'TextEdit', 'BA_LADOA': 'TextEdit', 'D_LADOA': 'TextEdit', 'DEC': 'TextEdit', 'BA_LADO1': 'TextEdit', 'D_LADO1': 'TextEdit', 'TOTAL': 'TextEdit', 'CAMINO': 'TextEdit', 'TIPOLOGIA': 'TextEdit', });
lyr_04_Lneascortafuegos_8.set('fieldImages', {'DEMARCACIO': 'TextEdit', 'XETRS89': 'TextEdit', 'YETRS89': 'TextEdit', 'CODIGO': 'TextEdit', });
lyr_04_Areasincendiadas_9.set('fieldImages', {'et_id': 'TextEdit', 'numparte': 'TextEdit', 'anyo': 'TextEdit', 'c_a': 'TextEdit', 'ccaa_nom': 'TextEdit', 'prov': 'TextEdit', 'prov_nom': 'TextEdit', 'comarca': 'TextEdit', 'com_nom': 'TextEdit', 'com_codicv': 'TextEdit', 'c_muni': 'TextEdit', 'codmun': 'TextEdit', 'nom_mun': 'TextEdit', 'e_m': 'TextEdit', 'paraje': 'TextEdit', 'hoja': 'TextEdit', 'cuad': 'TextEdit', 'huso': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'f_detec': 'TextEdit', 'f_det_amd': 'TextEdit', 'h_detec': 'TextEdit', 'f_pm_ter': 'TextEdit', 'h_pm_ter': 'TextEdit', 'fpm_aeext': 'TextEdit', 'hpm_aeext': 'TextEdit', 'fpbrighel': 'TextEdit', 'hpbrighel': 'TextEdit', 'fcontrol': 'TextEdit', 'hcontrol': 'TextEdit', 'fextinc': 'TextEdit', 'hextinc': 'TextEdit', 'detecpor': 'TextEdit', 'detecp_txt': 'TextEdit', 'vigfij': 'TextEdit', 'inijunta': 'TextEdit', 'inijun_txt': 'TextEdit', 't_causa': 'TextEdit', 't_caus_txt': 'TextEdit', 'g_causa': 'TextEdit', 'g_caus_txt': 'TextEdit', 'causas': 'TextEdit', 'motivac': 'TextEdit', 'motiv_txt': 'TextEdit', 'dtormenta': 'TextEdit', 'causante': 'TextEdit', 'causan_txt': 'TextEdit', 'ncausant': 'TextEdit', 'gcc': 'TextEdit', 'causa_txt': 'TextEdit', 'clasedia': 'TextEdit', 'cdia_txt': 'TextEdit', 'estacion': 'TextEdit', 'hora': 'TextEdit', 'dulluvia': 'TextEdit', 'tempmax': 'TextEdit', 'h_relat': 'TextEdit', 'v_viento': 'TextEdit', 'd_viento': 'TextEdit', 'mod_com': 'TextEdit', 'mod_co_txt': 'TextEdit', 'p_ign': 'TextEdit', 'ind_pel': 'TextEdit', 'ind_pe_txt': 'TextEdit', 'tip_fuego': 'TextEdit', 't_fueg_txt': 'TextEdit', 'medio': 'TextEdit', 'medio_txt': 'TextEdit', 'd_apie': 'TextEdit', 'tecnicos': 'TextEdit', 'agentes_f': 'TextEdit', 'cuadybrig': 'TextEdit', 'bomberos': 'TextEdit', 'volun_org': 'TextEdit', 'operciv': 'TextEdit', 'guarcivil': 'TextEdit', 'f_ejercit': 'TextEdit', 'autobomba': 'TextEdit', 'buldozzer': 'TextEdit', 'tractores': 'TextEdit', 'otros': 'TextEdit', 'avianfnum': 'TextEdit', 'avianfdes': 'TextEdit', 'avicarnum': 'TextEdit', 'avicardes': 'TextEdit', 'helextnum': 'TextEdit', 'helextbt': 'TextEdit', 'helextdes': 'TextEdit', 'heltranum': 'TextEdit', 'heltrabt': 'TextEdit', 'heltrades': 'TextEdit', 'aercoonum': 'TextEdit', 'retard': 'TextEdit', 'retard_txt': 'TextEdit', 'ataque': 'TextEdit', 'ataque_txt': 'TextEdit', 'tatacindi': 'TextEdit', 'tataci_txt': 'TextEdit', 'muertos': 'TextEdit', 'heridos': 'TextEdit', 'arb_publ': 'TextEdit', 'a_est_ca': 'TextEdit', 'a_consor': 'TextEdit', 'a_punca': 'TextEdit', 'a_partic': 'TextEdit', 'tot_arb': 'TextEdit', 'narb_publ': 'TextEdit', 'na_est_ca': 'TextEdit', 'na_consor': 'TextEdit', 'na_punca': 'TextEdit', 'na_partic': 'TextEdit', 'tot_narb': 'TextEdit', 'sup_nf': 'TextEdit', 'sup_f': 'TextEdit', 'tot_est': 'TextEdit', 'eimp_glob': 'TextEdit', 'sup_q_a': 'TextEdit', 'v_silv': 'TextEdit', 'erosion': 'TextEdit', 'paisaje': 'TextEdit', 'eco_local': 'TextEdit', 'c_carret': 'TextEdit', 'cl_ferro': 'TextEdit', 'cs_elec': 'TextEdit', 'c_tlf': 'TextEdit', 'des_viv': 'TextEdit', 'viv_ind': 'TextEdit', 'enp': 'TextEdit', 'refor': 'TextEdit', 'part_asoc': 'TextEdit', 'enp_1': 'TextEdit', 'enp_1_txt': 'TextEdit', 's_arb': 'TextEdit', 's_nfor': 'TextEdit', 'snarblen': 'TextEdit', 'snarbherb': 'TextEdit', 'id_enp': 'TextEdit', 'id_enp_txt': 'TextEdit', 'observ': 'TextEdit', 'supcar_ha': 'TextEdit', 'NIVELPREE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_04_FranjaServidumbre25mL_10.set('fieldImages', {'qc_id': 'TextEdit', 'fid': 'TextEdit', 'id': 'TextEdit', 'ficha': 'TextEdit', 'grupo': 'TextEdit', 'texto': 'TextEdit', 'clave_top': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_04_LineasElectricas_11.set('fieldImages', {'tensio': 'TextEdit', });
lyr_04_Otroscauces_12.set('fieldImages', {'regim': 'TextEdit', 'Nombre': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_04_ZonaPolicaCauces100m_13.set('fieldImages', {'id': 'TextEdit', });
lyr_04_Servidumbrecauces5m_14.set('fieldImages', {'id': 'TextEdit', });
lyr_04_DominioPblicoHidrulicoDPH_15.set('fieldImages', {'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'RIO': 'TextEdit', 'LONG_KM': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'HIDROLOGIA': 'TextEdit', 'PRECISION': 'TextEdit', 'HIDRAUL': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'ESCALA_REP': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA': 'DateTime', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'Q_M3_S': 'TextEdit', 'FECHA_RESO': 'DateTime', 'FECHA_PUBL': 'DateTime', 'BO_PUBLICA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_04_RiesgodeInundacin_16.set('fieldImages', {'leyenda': 'TextEdit', 'area': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_04_Senderos_17.set('fieldImages', {'tipo': 'TextEdit', 'nombre': 'TextEdit', 'denominaci': 'TextEdit', 'entidad_pr': 'TextEdit', 'comarca': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'longitud': 'TextEdit', 'desnivel': 'TextEdit', 'tiempo_est': 'TextEdit', 'dificultad': 'TextEdit', 'punto_de_i': 'TextEdit', 'longitud_d': 'TextEdit', 'longitud_s': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_04_AfeccionPatrimonio_18.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Municipio': 'TextEdit', 'Cultural': 'TextEdit', 'Visual': 'TextEdit', 'Ambiental': 'TextEdit', 'Obsv.': 'TextEdit', 'Proteccion': 'TextEdit', 'Código': 'TextEdit', 'Protecci2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_05_RedPrimariaZucaina_19.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaVillamalur_20.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaVillanuevadeViver_21.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaVallat_22.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaVillahermosadelRo_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaTorrechiva_24.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaTorralbadelPinar_25.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaToga_26.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaPuebladelArenoso_27.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaMontanejos_28.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaMontn_29.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaLudiente_30.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaFuentelaReina_31.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaFuentesdeAydar_32.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaFanzara_33.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaEspadilla_34.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaCortesdelArenoso_35.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaCirat_36.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaAydar_37.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaArgelita_38.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaArauel_39.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_05_RedPrimariaCastillodeVillamalefa_40.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', });
lyr_Cuevas_41.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Municipio': 'TextEdit', 'Cultural': 'TextEdit', 'Visual': 'TextEdit', 'Ambiental': 'TextEdit', 'Obsv.': 'TextEdit', 'Proteccion': 'TextEdit', 'Código': 'TextEdit', 'Protecci2': 'TextEdit', });
lyr_BienesPatrimoniales_42.set('fieldImages', {'fid': 'TextEdit', 'RP': 'TextEdit', 'Municipio': 'TextEdit', 'Cultural': 'TextEdit', 'Visual': 'TextEdit', 'Ambiental': 'TextEdit', 'Obsv.': 'TextEdit', 'Proteccion': 'TextEdit', 'Código': 'TextEdit', 'Protecci2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'RP Etiquet': 'TextEdit', });
lyr_UDPaisajeAltoValor_43.set('fieldImages', {'ID': 'TextEdit', 'Comarca': 'TextEdit', 'Municipio': 'TextEdit', 'MunRelacio': 'TextEdit', 'ZEPA': 'TextEdit', 'UPCastello': 'TextEdit', 'PATCastell': 'TextEdit', 'UP': 'TextEdit', 'Nom_UP': 'TextEdit', 'SubUP': 'TextEdit', 'Nom_SubUP': 'TextEdit', 'Consecutiv': 'TextEdit', 'Denominaci': 'TextEdit', 'Fuente': 'TextEdit', 'CodigoUP': 'TextEdit', 'Área': 'TextEdit', 'Toponimia': 'TextEdit', 'Valoració': 'TextEdit', });
lyr_ParajesNaturalesMunicipales_44.set('fieldImages', {'parajes_mu': 'TextEdit', });
lyr_ParquesNaturalesProtegidos_45.set('fieldImages', {'figura_pro': 'TextEdit', 'nombre': 'TextEdit', });
lyr_Terrenosforestalesestratgicos_46.set('fieldImages', {'RP': 'TextEdit', 'Municipio': 'TextEdit', 'Obsv.': 'TextEdit', });
lyr_HbitatsdeIntersComunitario_47.set('fieldImages', {'hab_lay': 'TextEdit', });
lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48.set('fieldImages', {'nombre': 'TextEdit', });
lyr_ZEC_ZonasdeEspecialConservacin_49.set('fieldImages', {'site_code': 'TextEdit', 'nombre': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'municipio2': 'TextEdit', 'directiva': 'TextEdit', 'doce': 'TextEdit', 'fecha': 'TextEdit', 'correccion': 'TextEdit', 'hect_web': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'shape_leng': 'TextEdit', 'leg_link': 'TextEdit', 'nomficha': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'legfoudate': 'TextEdit', 'titledoc': 'TextEdit', 'datedoc': 'TextEdit', 'urldoc': 'TextEdit', 'designatio': 'TextEdit', 'percentage': 'TextEdit', 'language': 'TextEdit', 'namestatus': 'TextEdit', 'nativeness': 'TextEdit', 'pronunciat': 'TextEdit', 'sourcename': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'siteprotec': 'TextEdit', 'desigschem': 'TextEdit', 'designat_1': 'TextEdit', 'datedoc_co': 'TextEdit', 'datedoc__1': 'TextEdit', 'desigsch_1': 'TextEdit', 'versionid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_LugardeIntersComunitario_50.set('fieldImages', {'site_code': 'TextEdit', 'nombre': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'municipio2': 'TextEdit', 'directiva': 'TextEdit', 'doce': 'TextEdit', 'fecha': 'TextEdit', 'correccion': 'TextEdit', 'hect_web': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'shape_leng': 'TextEdit', 'leg_link': 'TextEdit', 'nomficha': 'TextEdit', 'localid': 'TextEdit', 'namespace': 'TextEdit', 'legfoudate': 'TextEdit', 'titledoc': 'TextEdit', 'datedoc': 'TextEdit', 'urldoc': 'TextEdit', 'designatio': 'TextEdit', 'percentage': 'TextEdit', 'language': 'TextEdit', 'namestatus': 'TextEdit', 'nativeness': 'TextEdit', 'pronunciat': 'TextEdit', 'sourcename': 'TextEdit', 'text': 'TextEdit', 'script': 'TextEdit', 'siteprotec': 'TextEdit', 'desigschem': 'TextEdit', 'designat_1': 'TextEdit', 'datedoc_co': 'TextEdit', 'datedoc__1': 'TextEdit', 'desigsch_1': 'TextEdit', 'versionid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Microrreservas_51.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'provincia': 'TextEdit', 'comarca': 'TextEdit', 'cod_comarc': 'TextEdit', 'area_ha': 'TextEdit', 'perimetro': 'TextEdit', 'Microrrese': 'TextEdit', 'municipio': 'TextEdit', });
lyr_CorredoresTerritoriales_52.set('fieldImages', {'corredores': 'TextEdit', });
lyr_AreasconRiesgoInundabilidad_53.set('fieldImages', {'codigo': 'TextEdit', 'zona': 'TextEdit', 'd_pelig': 'TextEdit', 'n_pelig': 'TextEdit', 'corriente': 'TextEdit', 'tipo': 'TextEdit', 'desde': 'TextEdit', 'hasta': 'TextEdit', 'calado': 'TextEdit', 'retorno': 'TextEdit', 'ambito': 'TextEdit', 'hectares': 'TextEdit', 'area': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_RiosyBarrancos_54.set('fieldImages', {'regim': 'TextEdit', 'Nombre': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_RiosPrincipales_55.set('fieldImages', {'toponimo_i': 'TextEdit', 'texto_norm': 'TextEdit', 'clave_top': 'TextEdit', 'cv100': 'TextEdit', });
lyr_EmbalsePuebladelArenoso_56.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ficha': 'TextEdit', 'grupo': 'TextEdit', 'texto': 'TextEdit', 'clave_top': 'TextEdit', });
lyr_ZonaPolicaCauces100m_57.set('fieldImages', {'id': 'TextEdit', });
lyr_01_ConectoresFuncionales_58.set('fieldImages', {'ID': 'TextEdit', 'RP': 'TextEdit', 'Municipio': 'TextEdit', 'Cultural': 'TextEdit', 'Visual': 'TextEdit', 'Ambiental': 'TextEdit', 'Obsv.': 'TextEdit', 'Proteccion': 'TextEdit', 'Código': 'TextEdit', 'Protecci2': 'TextEdit', 'Valor': 'TextEdit', 'ValorRango': 'TextEdit', 'Prelacion': 'TextEdit', });
lyr_Carreterasprincipales_59.set('fieldImages', {'modificado': 'TextEdit', 'n_plat': 'TextEdit', 'length': 'TextEdit', 'long': 'TextEdit', 'nom_ant': 'TextEdit', 'nom_act': 'TextEdit', 'nom_fut': 'TextEdit', 'tit_ant': 'Range', 'tit_act': 'Range', 'tit_fut': 'Range', 'tipus_ant': 'TextEdit', 'tipus_act': 'TextEdit', 'tipus_fut': 'TextEdit', 'lleg_act': 'TextEdit', 'lleg_fut': 'TextEdit', 'rotonda': 'Range', 'sentidos': 'Range', 'sec_cons': 'TextEdit', 'tunel': 'Range', 'id_tunel': 'TextEdit', 'lleg_wms': 'TextEdit', 'fecha_mod': 'DateTime', 'fecha_ent': 'DateTime', 'fecha_sal': 'DateTime', 'act': 'Range', 'gran_cap': 'Range', 'tipus_des': 'TextEdit', 'tit_des': 'TextEdit', 'tunel_des': 'TextEdit', 'rotond_des': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_SenderosGranRecorrido_60.set('fieldImages', {'tipo': 'TextEdit', 'nombre': 'TextEdit', 'denominaci': 'TextEdit', 'entidad_pr': 'TextEdit', 'comarca': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'longitud': 'TextEdit', 'desnivel': 'TextEdit', 'tiempo_est': 'TextEdit', 'dificultad': 'TextEdit', 'punto_de_i': 'TextEdit', 'longitud_d': 'TextEdit', 'longitud_s': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_SGRSenderosGranRecorrido_61.set('fieldImages', {'tipo': 'TextEdit', 'nombre': 'TextEdit', 'denominaci': 'TextEdit', 'entidad_pr': 'TextEdit', 'comarca': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'longitud': 'TextEdit', 'desnivel': 'TextEdit', 'tiempo_est': 'TextEdit', 'dificultad': 'TextEdit', 'punto_de_i': 'TextEdit', 'longitud_d': 'TextEdit', 'longitud_s': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_CARRETERASCATEGORIZADAS_62.set('fieldImages', {'nom_ant': 'TextEdit', 'nom_act': 'TextEdit', 'lleg_act': 'TextEdit', 'lleg_fut': 'TextEdit', 'rotonda': 'Range', 'sentidos': 'Range', 'sec_cons': 'TextEdit', 'tunel': 'Range', 'id_tunel': 'TextEdit', 'lleg_wms': 'TextEdit', 'act': 'Range', 'gran_cap': 'Range', 'tipus_des': 'TextEdit', 'tit_des': 'TextEdit', 'tunel_des': 'TextEdit', 'rotond_des': 'TextEdit', 'shape_Leng': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Ncleosurbanos_63.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'Zona PAT': 'TextEdit', 'Pedania_mp': 'TextEdit', 'Desc_Z PAT': 'TextEdit', 'superficie': 'TextEdit', 'Pob2024': 'TextEdit', });
lyr_Carreteras_ejesynombres_64.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_actual': 'TextEdit', 'jerarquia_': 'TextEdit', 'jerarqui_1': 'TextEdit', 'titular_ca': 'TextEdit', 'titular_va': 'TextEdit', 'calzada_ca': 'TextEdit', 'calzada_va': 'TextEdit', 'sentido_ca': 'TextEdit', 'sentido_va': 'TextEdit', 'ncarriles': 'TextEdit', 'situacionv': 'TextEdit', 'situacio_1': 'TextEdit', 'tipovehicu': 'TextEdit', 'tipovehi_1': 'TextEdit', 'firme_cas': 'TextEdit', 'firme_val': 'TextEdit', 'clau': 'TextEdit', 'zonasconse': 'TextEdit', 'acceso_cas': 'TextEdit', 'acceso_val': 'TextEdit', 'tipotramo_': 'TextEdit', 'tipotram_1': 'TextEdit', 'clase_cas': 'TextEdit', 'clase_val': 'TextEdit', 'anchoplata': 'TextEdit', 'restricalt': 'TextEdit', 'restricanc': 'TextEdit', 'restriclon': 'TextEdit', 'restricpes': 'TextEdit', 'limitevelo': 'TextEdit', 'validodesd': 'TextEdit', 'nom_ant_ca': 'TextEdit', 'id_vial': 'TextEdit', 'nombre': 'TextEdit', 'bajabd': 'TextEdit', 'altabd': 'TextEdit', 'created_us': 'TextEdit', 'last_edite': 'TextEdit', 'last_edi_1': 'TextEdit', 'globalid': 'TextEdit', });
lyr_REDPRIMARIACOMARCAL_65.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'Areas': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', });
lyr_LocalizacionesPropuestas_66.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'noms_mun': 'TextEdit', 'expediente': 'TextEdit', 'denominaci': 'TextEdit', 'denomina_1': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'descripcio': 'TextEdit', 'descripc_1': 'TextEdit', 'dotacion': 'TextEdit', 'dot_descri': 'TextEdit', 'dot_desc_1': 'TextEdit', 'info_adici': 'TextEdit', 'info_adi_1': 'TextEdit', 'url_abs': 'TextEdit', 'superficie': 'TextEdit', });
lyr_CentroSanitario_67.set('fieldImages', {'fid': 'TextEdit', });
lyr_CentroEducativo_68.set('fieldImages', {'fid': 'TextEdit', });
lyr_AM_MunicipiosRelacionadoscpcopiar_69.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'cod_ine_mu': 'TextEdit', 'cod_ine__1': 'TextEdit', 'cod_catast': 'TextEdit', 'nom_mun': 'TextEdit', 'nom_mun_ca': 'TextEdit', 'nom_mun__1': 'TextEdit', 'nom_mun_va': 'TextEdit', 'nom_mun__2': 'TextEdit', 'noms_mun': 'TextEdit', 'comarca': 'TextEdit', 'provincia': 'TextEdit', 'perimetro': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_AM_Comarca_70.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'comarca': 'TextEdit', 'provincia': 'TextEdit', 'perimetro': 'TextEdit', 'Área_m2': 'TextEdit', 'Área_ha': 'TextEdit', 'Área km2': 'TextEdit', });
lyr_04_Derechosmineros_3.set('fieldLabels', {'ID': 'no label', 'Nombre': 'no label', 'Organismo': 'no label', 'Tipo_Derec': 'no label', 'Fraccion': 'no label', 'Numero_Reg': 'no label', 'Superficie': 'no label', 'Seccion': 'no label', 'Paraje': 'no label', 'Situacion_': 'no label', 'Titular': 'no label', 'Sustancias': 'no label', 'GeometriaT': 'no label', });
lyr_PECV_Aptitud_aprovechamiento_eolico_4.set('fieldLabels', {'id': 'no label', 'tipo_espac': 'no label', 'codigo': 'no label', 'aptitud': 'no label', });
lyr_04_ZECZonasdeEspecialConservacin_LICLugardeIntersComunitario_5.set('fieldLabels', {'site_code': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'municipio2': 'no label', 'directiva': 'no label', 'doce': 'no label', 'fecha': 'no label', 'correccion': 'no label', 'hect_web': 'no label', 'perim_geo': 'no label', 'area_geo': 'no label', 'hect_geo': 'no label', 'hect_ofi': 'no label', 'shape_leng': 'no label', 'leg_link': 'no label', 'nomficha': 'no label', 'localid': 'no label', 'namespace': 'no label', 'legfoudate': 'no label', 'titledoc': 'no label', 'datedoc': 'no label', 'urldoc': 'no label', 'designatio': 'no label', 'percentage': 'no label', 'language': 'no label', 'namestatus': 'no label', 'nativeness': 'no label', 'pronunciat': 'no label', 'sourcename': 'no label', 'text': 'no label', 'script': 'no label', 'siteprotec': 'no label', 'desigschem': 'no label', 'designat_1': 'no label', 'datedoc_co': 'no label', 'datedoc__1': 'no label', 'desigsch_1': 'no label', 'versionid': 'no label', 'shape_Le_1': 'no label', 'shape_Area': 'no label', });
lyr_04_Microreservas_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'provincia': 'no label', 'comarca': 'no label', 'cod_comarc': 'no label', 'area_ha': 'no label', 'perimetro': 'no label', 'Microrrese': 'no label', 'municipio': 'no label', });
lyr_04_Areascortafuegos_7.set('fieldLabels', {'ORDEN': 'no label', 'ELEMENTO': 'no label', 'TRAMO': 'no label', 'ETIQUETA': 'no label', 'REPRESENTA': 'no label', 'DEMARCACIO': 'no label', 'ESTADO': 'no label', 'UA': 'no label', 'LONGITUD': 'no label', 'CODIGO': 'no label', 'SUBTRAMO': 'no label', 'BA_LADOA': 'no label', 'D_LADOA': 'no label', 'DEC': 'no label', 'BA_LADO1': 'no label', 'D_LADO1': 'no label', 'TOTAL': 'no label', 'CAMINO': 'no label', 'TIPOLOGIA': 'no label', });
lyr_04_Lneascortafuegos_8.set('fieldLabels', {'DEMARCACIO': 'no label', 'XETRS89': 'no label', 'YETRS89': 'no label', 'CODIGO': 'no label', });
lyr_04_Areasincendiadas_9.set('fieldLabels', {'et_id': 'no label', 'numparte': 'no label', 'anyo': 'no label', 'c_a': 'no label', 'ccaa_nom': 'no label', 'prov': 'no label', 'prov_nom': 'no label', 'comarca': 'no label', 'com_nom': 'no label', 'com_codicv': 'no label', 'c_muni': 'no label', 'codmun': 'no label', 'nom_mun': 'no label', 'e_m': 'no label', 'paraje': 'no label', 'hoja': 'no label', 'cuad': 'no label', 'huso': 'no label', 'x': 'no label', 'y': 'no label', 'f_detec': 'no label', 'f_det_amd': 'no label', 'h_detec': 'no label', 'f_pm_ter': 'no label', 'h_pm_ter': 'no label', 'fpm_aeext': 'no label', 'hpm_aeext': 'no label', 'fpbrighel': 'no label', 'hpbrighel': 'no label', 'fcontrol': 'no label', 'hcontrol': 'no label', 'fextinc': 'no label', 'hextinc': 'no label', 'detecpor': 'no label', 'detecp_txt': 'no label', 'vigfij': 'no label', 'inijunta': 'no label', 'inijun_txt': 'no label', 't_causa': 'no label', 't_caus_txt': 'no label', 'g_causa': 'no label', 'g_caus_txt': 'no label', 'causas': 'no label', 'motivac': 'no label', 'motiv_txt': 'no label', 'dtormenta': 'no label', 'causante': 'no label', 'causan_txt': 'no label', 'ncausant': 'no label', 'gcc': 'no label', 'causa_txt': 'no label', 'clasedia': 'no label', 'cdia_txt': 'no label', 'estacion': 'no label', 'hora': 'no label', 'dulluvia': 'no label', 'tempmax': 'no label', 'h_relat': 'no label', 'v_viento': 'no label', 'd_viento': 'no label', 'mod_com': 'no label', 'mod_co_txt': 'no label', 'p_ign': 'no label', 'ind_pel': 'no label', 'ind_pe_txt': 'no label', 'tip_fuego': 'no label', 't_fueg_txt': 'no label', 'medio': 'no label', 'medio_txt': 'no label', 'd_apie': 'no label', 'tecnicos': 'no label', 'agentes_f': 'no label', 'cuadybrig': 'no label', 'bomberos': 'no label', 'volun_org': 'no label', 'operciv': 'no label', 'guarcivil': 'no label', 'f_ejercit': 'no label', 'autobomba': 'no label', 'buldozzer': 'no label', 'tractores': 'no label', 'otros': 'no label', 'avianfnum': 'no label', 'avianfdes': 'no label', 'avicarnum': 'no label', 'avicardes': 'no label', 'helextnum': 'no label', 'helextbt': 'no label', 'helextdes': 'no label', 'heltranum': 'no label', 'heltrabt': 'no label', 'heltrades': 'no label', 'aercoonum': 'no label', 'retard': 'no label', 'retard_txt': 'no label', 'ataque': 'no label', 'ataque_txt': 'no label', 'tatacindi': 'no label', 'tataci_txt': 'no label', 'muertos': 'no label', 'heridos': 'no label', 'arb_publ': 'no label', 'a_est_ca': 'no label', 'a_consor': 'no label', 'a_punca': 'no label', 'a_partic': 'no label', 'tot_arb': 'no label', 'narb_publ': 'no label', 'na_est_ca': 'no label', 'na_consor': 'no label', 'na_punca': 'no label', 'na_partic': 'no label', 'tot_narb': 'no label', 'sup_nf': 'no label', 'sup_f': 'no label', 'tot_est': 'no label', 'eimp_glob': 'no label', 'sup_q_a': 'no label', 'v_silv': 'no label', 'erosion': 'no label', 'paisaje': 'no label', 'eco_local': 'no label', 'c_carret': 'no label', 'cl_ferro': 'no label', 'cs_elec': 'no label', 'c_tlf': 'no label', 'des_viv': 'no label', 'viv_ind': 'no label', 'enp': 'no label', 'refor': 'no label', 'part_asoc': 'no label', 'enp_1': 'no label', 'enp_1_txt': 'no label', 's_arb': 'no label', 's_nfor': 'no label', 'snarblen': 'no label', 'snarbherb': 'no label', 'id_enp': 'no label', 'id_enp_txt': 'no label', 'observ': 'no label', 'supcar_ha': 'no label', 'NIVELPREE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_04_FranjaServidumbre25mL_10.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'id': 'no label', 'ficha': 'no label', 'grupo': 'no label', 'texto': 'no label', 'clave_top': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', });
lyr_04_LineasElectricas_11.set('fieldLabels', {'tensio': 'no label', });
lyr_04_Otroscauces_12.set('fieldLabels', {'regim': 'no label', 'Nombre': 'no label', 'Nivel': 'no label', });
lyr_04_ZonaPolicaCauces100m_13.set('fieldLabels', {'id': 'no label', });
lyr_04_Servidumbrecauces5m_14.set('fieldLabels', {'id': 'no label', });
lyr_04_DominioPblicoHidrulicoDPH_15.set('fieldLabels', {'ID_ZONA': 'no label', 'ZONA': 'no label', 'TIPO_ZONA': 'no label', 'RIO': 'no label', 'LONG_KM': 'no label', 'HIPOTESIS': 'no label', 'HIDROLOGIA': 'no label', 'PRECISION': 'no label', 'HIDRAUL': 'no label', 'ESTUDIO': 'no label', 'TIPO_EST': 'no label', 'ESCALA_REP': 'no label', 'DOCUMENTO': 'no label', 'FECHA': 'no label', 'ORGANISMO': 'no label', 'CLAVE_EXPE': 'no label', 'DEMARCACIO': 'no label', 'ID_DEMAR': 'no label', 'Q_M3_S': 'no label', 'FECHA_RESO': 'no label', 'FECHA_PUBL': 'no label', 'BO_PUBLICA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_04_RiesgodeInundacin_16.set('fieldLabels', {'leyenda': 'no label', 'area': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_04_Senderos_17.set('fieldLabels', {'tipo': 'no label', 'nombre': 'no label', 'denominaci': 'no label', 'entidad_pr': 'no label', 'comarca': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'longitud': 'no label', 'desnivel': 'no label', 'tiempo_est': 'no label', 'dificultad': 'no label', 'punto_de_i': 'no label', 'longitud_d': 'no label', 'longitud_s': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', });
lyr_04_AfeccionPatrimonio_18.set('fieldLabels', {'fid': 'no label', 'RP': 'no label', 'Municipio': 'no label', 'Cultural': 'no label', 'Visual': 'no label', 'Ambiental': 'no label', 'Obsv.': 'no label', 'Proteccion': 'no label', 'Código': 'no label', 'Protecci2': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_05_RedPrimariaZucaina_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaVillamalur_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaVillanuevadeViver_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaVallat_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaVillahermosadelRo_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaTorrechiva_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaTorralbadelPinar_25.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaToga_26.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaPuebladelArenoso_27.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaMontanejos_28.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaMontn_29.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaLudiente_30.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaFuentelaReina_31.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaFuentesdeAydar_32.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaFanzara_33.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaEspadilla_34.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaCortesdelArenoso_35.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaCirat_36.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaAydar_37.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaArgelita_38.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaArauel_39.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_05_RedPrimariaCastillodeVillamalefa_40.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', });
lyr_Cuevas_41.set('fieldLabels', {'fid': 'no label', 'RP': 'no label', 'Municipio': 'no label', 'Cultural': 'no label', 'Visual': 'no label', 'Ambiental': 'no label', 'Obsv.': 'no label', 'Proteccion': 'no label', 'Código': 'no label', 'Protecci2': 'no label', });
lyr_BienesPatrimoniales_42.set('fieldLabels', {'fid': 'no label', 'RP': 'no label', 'Municipio': 'no label', 'Cultural': 'no label', 'Visual': 'no label', 'Ambiental': 'no label', 'Obsv.': 'no label', 'Proteccion': 'no label', 'Código': 'no label', 'Protecci2': 'no label', 'X': 'no label', 'Y': 'no label', 'RP Etiquet': 'no label', });
lyr_UDPaisajeAltoValor_43.set('fieldLabels', {'ID': 'no label', 'Comarca': 'no label', 'Municipio': 'no label', 'MunRelacio': 'no label', 'ZEPA': 'no label', 'UPCastello': 'no label', 'PATCastell': 'no label', 'UP': 'no label', 'Nom_UP': 'no label', 'SubUP': 'no label', 'Nom_SubUP': 'no label', 'Consecutiv': 'no label', 'Denominaci': 'no label', 'Fuente': 'no label', 'CodigoUP': 'no label', 'Área': 'no label', 'Toponimia': 'no label', 'Valoració': 'no label', });
lyr_ParajesNaturalesMunicipales_44.set('fieldLabels', {'parajes_mu': 'no label', });
lyr_ParquesNaturalesProtegidos_45.set('fieldLabels', {'figura_pro': 'no label', 'nombre': 'no label', });
lyr_Terrenosforestalesestratgicos_46.set('fieldLabels', {'RP': 'no label', 'Municipio': 'no label', 'Obsv.': 'no label', });
lyr_HbitatsdeIntersComunitario_47.set('fieldLabels', {'hab_lay': 'no label', });
lyr_ZEPA_ZonasdeEspecialProteccinparalasAves_48.set('fieldLabels', {'nombre': 'no label', });
lyr_ZEC_ZonasdeEspecialConservacin_49.set('fieldLabels', {'site_code': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'municipio2': 'no label', 'directiva': 'no label', 'doce': 'no label', 'fecha': 'no label', 'correccion': 'no label', 'hect_web': 'no label', 'perim_geo': 'no label', 'area_geo': 'no label', 'hect_geo': 'no label', 'hect_ofi': 'no label', 'shape_leng': 'no label', 'leg_link': 'no label', 'nomficha': 'no label', 'localid': 'no label', 'namespace': 'no label', 'legfoudate': 'no label', 'titledoc': 'no label', 'datedoc': 'no label', 'urldoc': 'no label', 'designatio': 'no label', 'percentage': 'no label', 'language': 'no label', 'namestatus': 'no label', 'nativeness': 'no label', 'pronunciat': 'no label', 'sourcename': 'no label', 'text': 'no label', 'script': 'no label', 'siteprotec': 'no label', 'desigschem': 'no label', 'designat_1': 'no label', 'datedoc_co': 'no label', 'datedoc__1': 'no label', 'desigsch_1': 'no label', 'versionid': 'no label', 'shape_Le_1': 'no label', 'shape_Area': 'no label', });
lyr_LugardeIntersComunitario_50.set('fieldLabels', {'site_code': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'municipio2': 'no label', 'directiva': 'no label', 'doce': 'no label', 'fecha': 'no label', 'correccion': 'no label', 'hect_web': 'no label', 'perim_geo': 'no label', 'area_geo': 'no label', 'hect_geo': 'no label', 'hect_ofi': 'no label', 'shape_leng': 'no label', 'leg_link': 'no label', 'nomficha': 'no label', 'localid': 'no label', 'namespace': 'no label', 'legfoudate': 'no label', 'titledoc': 'no label', 'datedoc': 'no label', 'urldoc': 'no label', 'designatio': 'no label', 'percentage': 'no label', 'language': 'no label', 'namestatus': 'no label', 'nativeness': 'no label', 'pronunciat': 'no label', 'sourcename': 'no label', 'text': 'no label', 'script': 'no label', 'siteprotec': 'no label', 'desigschem': 'no label', 'designat_1': 'no label', 'datedoc_co': 'no label', 'datedoc__1': 'no label', 'desigsch_1': 'no label', 'versionid': 'no label', 'shape_Le_1': 'no label', 'shape_Area': 'no label', });
lyr_Microrreservas_51.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'provincia': 'no label', 'comarca': 'no label', 'cod_comarc': 'no label', 'area_ha': 'no label', 'perimetro': 'no label', 'Microrrese': 'no label', 'municipio': 'no label', });
lyr_CorredoresTerritoriales_52.set('fieldLabels', {'corredores': 'no label', });
lyr_AreasconRiesgoInundabilidad_53.set('fieldLabels', {'codigo': 'no label', 'zona': 'no label', 'd_pelig': 'no label', 'n_pelig': 'no label', 'corriente': 'no label', 'tipo': 'no label', 'desde': 'no label', 'hasta': 'no label', 'calado': 'no label', 'retorno': 'no label', 'ambito': 'no label', 'hectares': 'no label', 'area': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', 'shape_Area': 'no label', });
lyr_RiosyBarrancos_54.set('fieldLabels', {'regim': 'no label', 'Nombre': 'no label', 'Nivel': 'no label', });
lyr_RiosPrincipales_55.set('fieldLabels', {'toponimo_i': 'no label', 'texto_norm': 'no label', 'clave_top': 'no label', 'cv100': 'no label', });
lyr_EmbalsePuebladelArenoso_56.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'ficha': 'no label', 'grupo': 'no label', 'texto': 'no label', 'clave_top': 'no label', });
lyr_ZonaPolicaCauces100m_57.set('fieldLabels', {'id': 'no label', });
lyr_01_ConectoresFuncionales_58.set('fieldLabels', {'ID': 'no label', 'RP': 'no label', 'Municipio': 'no label', 'Cultural': 'no label', 'Visual': 'no label', 'Ambiental': 'no label', 'Obsv.': 'no label', 'Proteccion': 'no label', 'Código': 'no label', 'Protecci2': 'no label', 'Valor': 'no label', 'ValorRango': 'no label', 'Prelacion': 'no label', });
lyr_Carreterasprincipales_59.set('fieldLabels', {'modificado': 'no label', 'n_plat': 'no label', 'length': 'no label', 'long': 'no label', 'nom_ant': 'no label', 'nom_act': 'no label', 'nom_fut': 'no label', 'tit_ant': 'no label', 'tit_act': 'no label', 'tit_fut': 'no label', 'tipus_ant': 'no label', 'tipus_act': 'no label', 'tipus_fut': 'no label', 'lleg_act': 'no label', 'lleg_fut': 'no label', 'rotonda': 'no label', 'sentidos': 'no label', 'sec_cons': 'no label', 'tunel': 'no label', 'id_tunel': 'no label', 'lleg_wms': 'no label', 'fecha_mod': 'no label', 'fecha_ent': 'no label', 'fecha_sal': 'no label', 'act': 'no label', 'gran_cap': 'no label', 'tipus_des': 'no label', 'tit_des': 'no label', 'tunel_des': 'no label', 'rotond_des': 'no label', 'shape_Leng': 'no label', });
lyr_SenderosGranRecorrido_60.set('fieldLabels', {'tipo': 'no label', 'nombre': 'no label', 'denominaci': 'no label', 'entidad_pr': 'no label', 'comarca': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'longitud': 'no label', 'desnivel': 'no label', 'tiempo_est': 'no label', 'dificultad': 'no label', 'punto_de_i': 'no label', 'longitud_d': 'no label', 'longitud_s': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', });
lyr_SGRSenderosGranRecorrido_61.set('fieldLabels', {'tipo': 'no label', 'nombre': 'no label', 'denominaci': 'no label', 'entidad_pr': 'no label', 'comarca': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'longitud': 'no label', 'desnivel': 'no label', 'tiempo_est': 'no label', 'dificultad': 'no label', 'punto_de_i': 'no label', 'longitud_d': 'no label', 'longitud_s': 'no label', 'hyperlink': 'no label', 'shape_Leng': 'no label', });
lyr_CARRETERASCATEGORIZADAS_62.set('fieldLabels', {'nom_ant': 'no label', 'nom_act': 'no label', 'lleg_act': 'no label', 'lleg_fut': 'no label', 'rotonda': 'no label', 'sentidos': 'no label', 'sec_cons': 'no label', 'tunel': 'no label', 'id_tunel': 'no label', 'lleg_wms': 'no label', 'act': 'no label', 'gran_cap': 'no label', 'tipus_des': 'no label', 'tit_des': 'no label', 'tunel_des': 'no label', 'rotond_des': 'no label', 'shape_Leng': 'no label', 'Categoria': 'no label', });
lyr_Ncleosurbanos_63.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'Zona PAT': 'no label', 'Pedania_mp': 'no label', 'Desc_Z PAT': 'no label', 'superficie': 'no label', 'Pob2024': 'no label', });
lyr_Carreteras_ejesynombres_64.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nom_actual': 'no label', 'jerarquia_': 'no label', 'jerarqui_1': 'no label', 'titular_ca': 'no label', 'titular_va': 'no label', 'calzada_ca': 'no label', 'calzada_va': 'no label', 'sentido_ca': 'no label', 'sentido_va': 'no label', 'ncarriles': 'no label', 'situacionv': 'no label', 'situacio_1': 'no label', 'tipovehicu': 'no label', 'tipovehi_1': 'no label', 'firme_cas': 'no label', 'firme_val': 'no label', 'clau': 'no label', 'zonasconse': 'no label', 'acceso_cas': 'no label', 'acceso_val': 'no label', 'tipotramo_': 'no label', 'tipotram_1': 'no label', 'clase_cas': 'no label', 'clase_val': 'no label', 'anchoplata': 'no label', 'restricalt': 'no label', 'restricanc': 'no label', 'restriclon': 'no label', 'restricpes': 'no label', 'limitevelo': 'no label', 'validodesd': 'no label', 'nom_ant_ca': 'no label', 'id_vial': 'no label', 'nombre': 'no label', 'bajabd': 'no label', 'altabd': 'no label', 'created_us': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', 'globalid': 'no label', });
lyr_REDPRIMARIACOMARCAL_65.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'Areas': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', });
lyr_LocalizacionesPropuestas_66.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'noms_mun': 'no label', 'expediente': 'no label', 'denominaci': 'no label', 'denomina_1': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'descripcio': 'no label', 'descripc_1': 'no label', 'dotacion': 'no label', 'dot_descri': 'no label', 'dot_desc_1': 'no label', 'info_adici': 'no label', 'info_adi_1': 'no label', 'url_abs': 'no label', 'superficie': 'no label', });
lyr_CentroSanitario_67.set('fieldLabels', {'fid': 'no label', });
lyr_CentroEducativo_68.set('fieldLabels', {'fid': 'no label', });
lyr_AM_MunicipiosRelacionadoscpcopiar_69.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'cod_ine_mu': 'no label', 'cod_ine__1': 'no label', 'cod_catast': 'no label', 'nom_mun': 'no label', 'nom_mun_ca': 'no label', 'nom_mun__1': 'no label', 'nom_mun_va': 'no label', 'nom_mun__2': 'no label', 'noms_mun': 'no label', 'comarca': 'no label', 'provincia': 'no label', 'perimetro': 'no label', 'area_ha': 'no label', });
lyr_AM_Comarca_70.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'comarca': 'no label', 'provincia': 'no label', 'perimetro': 'no label', 'Área_m2': 'no label', 'Área_ha': 'no label', 'Área km2': 'no label', });
lyr_AM_Comarca_70.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});