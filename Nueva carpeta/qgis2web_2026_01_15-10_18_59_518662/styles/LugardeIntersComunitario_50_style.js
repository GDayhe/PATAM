var size = 0;
var placement = 'point';
function categories_LugardeIntersComunitario_50(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'LIC Curs alt del riu Millars':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(73,174,145,0.5)', lineDash: [2.128,4.256], lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LIC Penyagolosa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,104,37,0.5)', lineDash: [2.128,4.256], lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LIC Serra d\'Espadà':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(153,146,133,0.5)', lineDash: [2.128,4.256], lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_LugardeIntersComunitario_50 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("nombre");
    var labelFont = "19.5px \'Arial\', sans-serif";
    var labelFill = "#fdfdfd";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    
    var style = categories_LugardeIntersComunitario_50(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
