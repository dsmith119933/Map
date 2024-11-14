// Initialize the map
var map = L.map('map').setView([0, 0], 2);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the current location
var marker = L.marker([0, 0]).addTo(map)
    .bindPopup('You are here.')
    .openPopup();

var circle;
var currentPosition;

// Check if geolocation is available
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    alert('Geolocation is not supported by your browser.');
}

// Success callback function
function success(position) {
    currentPosition = position;
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var altitude = position.coords.altitude || 'N/A';

    // Update the map and marker position
    map.setView([lat, lon], 13);
    marker.setLatLng([lat, lon]);

    // Add a circle to show the accuracy radius
    if (circle) {
        circle.setLatLng([lat, lon]);
        circle.setRadius(position.coords.accuracy);
    } else {
        circle = L.circle([lat, lon], {
            color: 'blue',
            fillColor: '#a2c9ff',
            fillOpacity: 0.5,
            radius: position.coords.accuracy
        }).addTo(map);
    }

    // Display additional information in the popup
    var popupContent = 'You are here: ' + lat + ', ' + lon;
    if (position.coords.accuracy) {
        popupContent += '<br>Accuracy: ' + position.coords.accuracy + ' meters';
    }
    if (position.coords.speed) {
        popupContent += '<br>Speed: ' + position.coords.speed + ' m/s';
    }
    if (altitude !== 'N/A') {
        popupContent += '<br>Altitude: ' + altitude + ' m';
        document.getElementById('alt').textContent = altitude + ' m';
    }
    marker.bindPopup(popupContent).openPopup();
}

// Error callback function
function error() {
    alert('Unable to retrieve your location.');
}

// Real-time tracking
document.getElementById('locateButton').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

// Compass functionality
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha;
        if (alpha !== null) {
            document.getElementById('direction').textContent = Math.round(alpha) + '°';
        }
    });
} else {
    alert('Device orientation is not supported by your browser.');
}

// Level functionality
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
        var tiltX = event.rotationRate.beta;
        var tiltY = event.rotationRate.gamma;
        if (tiltX !== null && tiltY !== null) {
            document.getElementById('tiltX').textContent = Math.round(tiltX);
            document.getElementById('tiltY').textContent = Math.round(tiltY);
        }
    });
} else {
    alert('Device motion is not supported by your browser.');
}

