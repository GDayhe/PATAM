var size = 0;
var placement = 'point';

var style_AreasconRiesgoInundabilidad_53 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,114,150,0.5)', lineDash: [2.7359999999999998,1.3679999999999999], lineCap: 'butt', lineJoin: 'miter', width: 1.3679999999999999}),fill: new ol.style.Fill({color: 'rgba(45,114,150,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
