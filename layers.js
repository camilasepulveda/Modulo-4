var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_fabricas_conserveras_mendoza_1 = new ol.format.GeoJSON();
var features_fabricas_conserveras_mendoza_1 = format_fabricas_conserveras_mendoza_1.readFeatures(json_fabricas_conserveras_mendoza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fabricas_conserveras_mendoza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fabricas_conserveras_mendoza_1.addFeatures(features_fabricas_conserveras_mendoza_1);
var lyr_fabricas_conserveras_mendoza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fabricas_conserveras_mendoza_1, 
                style: style_fabricas_conserveras_mendoza_1,
                popuplayertitle: 'fabricas_conserveras_mendoza',
                interactive: true,
                title: '<img src="styles/legend/fabricas_conserveras_mendoza_1.png" /> fabricas_conserveras_mendoza'
            });
var format_Fincas_conservadoras_2 = new ol.format.GeoJSON();
var features_Fincas_conservadoras_2 = format_Fincas_conservadoras_2.readFeatures(json_Fincas_conservadoras_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fincas_conservadoras_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fincas_conservadoras_2.addFeatures(features_Fincas_conservadoras_2);
var lyr_Fincas_conservadoras_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fincas_conservadoras_2, 
                style: style_Fincas_conservadoras_2,
                popuplayertitle: 'Fincas_conservadoras',
                interactive: true,
    title: 'Fincas_conservadoras<br />\
    <img src="styles/legend/Fincas_conservadoras_2_0.png" /> Alto<br />\
    <img src="styles/legend/Fincas_conservadoras_2_1.png" /> Bajo<br />\
    <img src="styles/legend/Fincas_conservadoras_2_2.png" /> Medio<br />\
    <img src="styles/legend/Fincas_conservadoras_2_3.png" /> <br />' });
var format_Voronoipolygons_3 = new ol.format.GeoJSON();
var features_Voronoipolygons_3 = format_Voronoipolygons_3.readFeatures(json_Voronoipolygons_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoipolygons_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoipolygons_3.addFeatures(features_Voronoipolygons_3);
var lyr_Voronoipolygons_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voronoipolygons_3, 
                style: style_Voronoipolygons_3,
                popuplayertitle: 'Voronoi polygons',
                interactive: true,
                title: '<img src="styles/legend/Voronoipolygons_3.png" /> Voronoi polygons'
            });
var format_TriangulacindeDelaunay_4 = new ol.format.GeoJSON();
var features_TriangulacindeDelaunay_4 = format_TriangulacindeDelaunay_4.readFeatures(json_TriangulacindeDelaunay_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriangulacindeDelaunay_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriangulacindeDelaunay_4.addFeatures(features_TriangulacindeDelaunay_4);
var lyr_TriangulacindeDelaunay_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriangulacindeDelaunay_4, 
                style: style_TriangulacindeDelaunay_4,
                popuplayertitle: 'Triangulación de Delaunay',
                interactive: true,
                title: '<img src="styles/legend/TriangulacindeDelaunay_4.png" /> Triangulación de Delaunay'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_fabricas_conserveras_mendoza_1.setVisible(true);lyr_Fincas_conservadoras_2.setVisible(true);lyr_Voronoipolygons_3.setVisible(true);lyr_TriangulacindeDelaunay_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_fabricas_conserveras_mendoza_1,lyr_Fincas_conservadoras_2,lyr_Voronoipolygons_3,lyr_TriangulacindeDelaunay_4];
lyr_fabricas_conserveras_mendoza_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'municipio': 'municipio', 'empleados': 'empleados', 'capacidad_t': 'capacidad_t', 'coord_x': 'coord_x', 'coord_y': 'coord_y', });
lyr_Fincas_conservadoras_2.set('fieldAliases', {'id': 'id', 'Ha': 'Ha', 'Imp_hidric': 'Imp_hidric', });
lyr_Voronoipolygons_3.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'municipio': 'municipio', 'empleados': 'empleados', 'capacidad_t': 'capacidad_t', 'coord_x': 'coord_x', 'coord_y': 'coord_y', });
lyr_TriangulacindeDelaunay_4.set('fieldAliases', {'POINTA': 'POINTA', 'POINTB': 'POINTB', 'POINTC': 'POINTC', });
lyr_fabricas_conserveras_mendoza_1.set('fieldImages', {'id': '', 'nombre': '', 'municipio': '', 'empleados': '', 'capacidad_t': '', 'coord_x': '', 'coord_y': '', });
lyr_Fincas_conservadoras_2.set('fieldImages', {'id': 'TextEdit', 'Ha': 'TextEdit', 'Imp_hidric': 'TextEdit', });
lyr_Voronoipolygons_3.set('fieldImages', {'id': 'Range', 'nombre': 'TextEdit', 'municipio': 'TextEdit', 'empleados': 'Range', 'capacidad_t': 'Range', 'coord_x': 'Range', 'coord_y': 'Range', });
lyr_TriangulacindeDelaunay_4.set('fieldImages', {'POINTA': '', 'POINTB': '', 'POINTC': '', });
lyr_fabricas_conserveras_mendoza_1.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'municipio': 'no label', 'empleados': 'no label', 'capacidad_t': 'no label', 'coord_x': 'no label', 'coord_y': 'no label', });
lyr_Fincas_conservadoras_2.set('fieldLabels', {'id': 'no label', 'Ha': 'no label', 'Imp_hidric': 'no label', });
lyr_Voronoipolygons_3.set('fieldLabels', {'id': 'no label', 'nombre': 'inline label - always visible', 'municipio': 'inline label - always visible', 'empleados': 'inline label - always visible', 'capacidad_t': 'inline label - always visible', 'coord_x': 'no label', 'coord_y': 'no label', });
lyr_TriangulacindeDelaunay_4.set('fieldLabels', {'POINTA': 'no label', 'POINTB': 'no label', 'POINTC': 'no label', });
lyr_TriangulacindeDelaunay_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});