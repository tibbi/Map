var DEF_LAT = 20;
var DEF_LNG = 0;
var DEF_ZOOM_OUT = 3;
var DEF_ZOOM_IN = 16;

var lat = isCorrect(getParameterByName('a')) ? Number(getParameterByName('a')) : DEF_LAT;
var lng = isCorrect(getParameterByName('n')) ? Number(getParameterByName('n')) : DEF_LNG;
var isAtDefaultPos = lat == DEF_LAT && lng == DEF_LNG;
var zoom = (isAtDefaultPos) ? DEF_ZOOM_OUT : DEF_ZOOM_IN;
var map;
var marker;

function initMap() {
    var latLng = {lat: lat, lng: lng};
    map = new google.maps.Map(document.getElementById('map'), {
        center: latLng,
        zoom: zoom
    });

    map.addListener('click', function(e) {
        updatePosition(e);
    });

    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: true
    });

    marker.setVisible(!isAtDefaultPos);

    marker.addListener('dragend', function(e) {
        updatePosition(e);
    });
}

function updatePosition(e) {
    var coords = e.latLng;
    var clickLat = parseFloat(coords.lat()).toFixed(5);
    var clickLng = parseFloat(coords.lng()).toFixed(5);
    var clickLatLng = new google.maps.LatLng(clickLat, clickLng);
    marker.setPosition(clickLatLng);
    window.history.pushState("", "", "/?a=" + clickLat + "&n=" + clickLng);
    marker.setVisible(true);
}

function isCorrect(n) {
    return n != null && isNumeric(n);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// taken from http://stackoverflow.com/a/901144/1967672
function getParameterByName(param, url) {
    if (!url) {
        url = window.location.href;
    }

    url = url.toLowerCase();
    param = param.replace(/[\[\]]/g, "\\$&").toLowerCase();
    var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) {
        return null;
    }

    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

