var size = 0;
var placement = 'point';
function categories_04_Microreservas_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Barranco de la Maimona':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,121,177,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'El Tajar':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Olmeda de Fuente la Reina':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,175,74,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_04_Microreservas_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("nombre");
    var labelFont = "13.0px \'Arial Unicode MS\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_04_Microreservas_6_eval_expression(context) !== null && resolution > 0 && resolution < 16) {
        labelText = String(exp_label_04_Microreservas_6_eval_expression(context));
    }
    
    var style = categories_04_Microreservas_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
