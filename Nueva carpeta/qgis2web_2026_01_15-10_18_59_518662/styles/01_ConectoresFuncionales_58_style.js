var size = 0;
var placement = 'point';
function categories_01_ConectoresFuncionales_58(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Conectores funcionales-Senderos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(127,189,39,0.5)', lineDash: [2.28,1.14], lineCap: 'butt', lineJoin: 'miter', width: 1.14}),fill: new ol.style.Fill({color: 'rgba(149,196,105,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Conectores funcionales-Vias pecuarias':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(122,112,34,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.14}),fill: new ol.style.Fill({color: 'rgba(122,112,34,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_01_ConectoresFuncionales_58 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Obsv.");
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
    
    var style = categories_01_ConectoresFuncionales_58(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
