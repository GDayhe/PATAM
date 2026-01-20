var size = 0;
var placement = 'point';

var style_Terrenosforestalesestratgicos_46 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#b2df8a";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("RP") !== null && resolution > 0 && resolution < 14) {
        labelText = String(feature.get("RP"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(94,171,125,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
