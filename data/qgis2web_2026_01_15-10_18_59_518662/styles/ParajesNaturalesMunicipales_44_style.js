var size = 0;
var placement = 'point';

var style_ParajesNaturalesMunicipales_44 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#e8f2da";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("parajes_mu") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("parajes_mu"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(99,144,64,0.5)', lineDash: [6.84,1.3679999999999999], lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(99,144,64,0.9019607843137255)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
