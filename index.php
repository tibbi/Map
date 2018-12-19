<!DOCTYPE html>
<html>
    <!-- author: https://github.com/tibbi -->
    <head>
        <title>Simple Map</title>
        <meta name="viewport" content="initial-scale=1.0">
        <meta name="author" content="tibbi">
        <meta charset="utf-8">

        <link rel="shortcut icon" href="favicon.png">
        <link href="assets/css/style.css" rel="stylesheet">

    <script>
        document.addEventListener('DOMContentLoaded', function() { 
            if (window.location.protocol != "https:") {
                window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
            }
        }, false);
    </script>
  </head>
  <body>
    <div id="map"></div>

    <script src="assets/js/script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHhF8xVxqRSSkvRUA4jqO1FampbdGy444&callback=initMap" async defer></script>
  </body>
</html>
