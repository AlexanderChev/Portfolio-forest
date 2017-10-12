'use strict';

export default function map() {
    var mapOptions = {
        // Приближение
        zoom: 13,
        // Координаты центра
        center: new google.maps.LatLng(57.604650, 39.799427), // Yaroslavl
        // Стили карты
        styles: [{"featureType": "administrative", "stylers": [{"visibility": "off"}]}, {
            "featureType": "poi",
            "stylers": [{"visibility": "simplified"}]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{"visibility": "simplified"}]
        }, {"featureType": "water", "stylers": [{"visibility": "simplified"}]}, {
            "featureType": "transit",
            "stylers": [{"visibility": "simplified"}]
        }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"}]}, {
            "featureType": "road.highway",
            "stylers": [{"visibility": "off"}]
        }, {"featureType": "road.local", "stylers": [{"visibility": "on"}]}, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{"visibility": "on"}]
        }, {"featureType": "water", "stylers": [{"color": "#abbaa4"}]}, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{"color": "#3f518c"}]
        }, {"featureType": "road.highway", "stylers": [{"color": "#ad9b8d"}]}],
        // Отключение стандартного интерфейса
        disableDefaultUI: true,
        // Отключение реакции на прокрутку колеса мыши
        scrollwheel: false
    };

    // Выбор элемента для карты
    var mapElement = document.getElementById('map');
    // Создание карты
    var map = new google.maps.Map(mapElement, mapOptions);
    var icon = './assets/img/map_n.svg';
    var location = new google.maps.LatLng(57.625896, 39.879936);
    var mapMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Я тут',
        icon: icon
    });
};
