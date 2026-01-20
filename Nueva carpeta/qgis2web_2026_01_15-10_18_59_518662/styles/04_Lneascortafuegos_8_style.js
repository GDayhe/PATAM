var size = 0;
var placement = 'point';
function categories_04_Lneascortafuegos_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,105,10,0.5)', lineDash: [1.748,3.496], lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(171,165,95,0.5)', lineDash: [10.032,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_04_Lneascortafuegos_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ORDEN");
    var labelFont = "7.800000000000001px \'Arial\', sans-serif";
    var labelFill = "#af8a63";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_04_Lneascortafuegos_8_eval_expression(context) !== null && resolution > 0 && resolution < 4) {
        labelText = String(exp_label_04_Lneascortafuegos_8_eval_expression(context));
    }
    
    var style = categories_04_Lneascortafuegos_8(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
