var size = 0;
var placement = 'point';
function categories_04_LineasElectricas_11(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '60 - 110 kV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,4,11,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '150 - 220 kV':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,10,205,0.5)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_04_LineasElectricas_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("texto");
    var labelFont = "11.700000000000001px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (exp_label_04_LineasElectricas_11_eval_expression(context) !== null && resolution > 0 && resolution < 16) {
        labelText = String(exp_label_04_LineasElectricas_11_eval_expression(context));
    }
    
    var style = categories_04_LineasElectricas_11(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
