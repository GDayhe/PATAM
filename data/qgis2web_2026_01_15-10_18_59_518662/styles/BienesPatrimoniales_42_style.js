var size = 0;
var placement = 'point';
function categories_BienesPatrimoniales_42(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'BIC':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.25 + size, points: 5,
            radius2: 4.125, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.38}), fill: new ol.style.Fill({color: 'rgba(36,251,244,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BRL':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 5.5 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(255,231,0,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(100,201,139,0.5)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_BienesPatrimoniales_42 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Proteccion");
    var labelFont = "10.4px \'Arial Narrow\', sans-serif";
    var labelFill = "#747474";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("RP") !== null && resolution > 0 && resolution < 19) {
        labelText = String(feature.get("RP"));
    }
    
    var style = categories_BienesPatrimoniales_42(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
