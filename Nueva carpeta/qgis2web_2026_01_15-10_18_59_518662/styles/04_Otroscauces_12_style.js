var size = 0;
var placement = 'point';
function categories_04_Otroscauces_12(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,159,163,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.42}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,159,163,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.57}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_04_Otroscauces_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nivel");
    var labelFont = "7.800000000000001px \'Arial Narrow\', sans-serif";
    var labelFill = "#759fba";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Nombre") !== null && resolution > 0 && resolution < 4) {
        labelText = String(feature.get("Nombre"));
    }
    
    var style = categories_04_Otroscauces_12(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
