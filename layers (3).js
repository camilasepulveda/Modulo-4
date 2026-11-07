var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_vieja_poligono_1 = new ol.format.GeoJSON();
var features_vieja_poligono_1 = format_vieja_poligono_1.readFeatures(json_vieja_poligono_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vieja_poligono_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vieja_poligono_1.addFeatures(features_vieja_poligono_1);
var lyr_vieja_poligono_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vieja_poligono_1, 
                style: style_vieja_poligono_1,
                popuplayertitle: 'vieja_poligono',
                interactive: true,
                title: '<img src="styles/legend/vieja_poligono_1.png" /> vieja_poligono'
            });
var format_actual_poligono_2 = new ol.format.GeoJSON();
var features_actual_poligono_2 = format_actual_poligono_2.readFeatures(json_actual_poligono_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_actual_poligono_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_actual_poligono_2.addFeatures(features_actual_poligono_2);
var lyr_actual_poligono_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_actual_poligono_2, 
                style: style_actual_poligono_2,
                popuplayertitle: 'actual_poligono',
                interactive: true,
                title: '<img src="styles/legend/actual_poligono_2.png" /> actual_poligono'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_vieja_poligono_1.setVisible(true);lyr_actual_poligono_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_vieja_poligono_1,lyr_actual_poligono_2];
lyr_vieja_poligono_1.set('fieldAliases', {'fid': 'fid', 'area_ha': 'area_ha', });
lyr_actual_poligono_2.set('fieldAliases', {'fid': 'fid', 'area': 'area', });
lyr_vieja_poligono_1.set('fieldImages', {'fid': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_actual_poligono_2.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', });
lyr_vieja_poligono_1.set('fieldLabels', {'fid': 'no label', 'area_ha': 'inline label - always visible', });
lyr_actual_poligono_2.set('fieldLabels', {'fid': 'no label', 'area': 'inline label - always visible', });
lyr_actual_poligono_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});