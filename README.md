The Enhanced GPS Map is a web application that provides real-time GPS tracking, compass direction, altitude, and device tilt (level) information. It uses Leaflet.js for map rendering, the Geolocation API for GPS functionality, and DeviceOrientationEvent and DeviceMotionEvent for compass and level features.
Features

Real-time GPS Tracking: Displays the user's current location on the map and updates it in real-time.

Compass Direction: Shows the direction the device is facing.

Altitude Information: Displays the altitude above sea level.

Device Tilt (Level): Shows the tilt of the device along the X and Y axes.

Accuracy Circle: Indicates the accuracy of the GPS location.

Custom Map with OpenStreetMap Tiles: Provides a detailed and interactive map.
Technologies Used

HTML: For the structure of the web application.

CSS: For styling the application.

JavaScript: For functionality and interactivity.

Leaflet.js: For map rendering.

Geolocation API: For GPS functionality.

DeviceOrientationEvent and DeviceMotionEvent: For compass and level features.

Setup and Installation
Clone the repository:
bash
git clone https://github.com/yourusername/enhanced-gps-map.git
cd enhanced-gps-map

Open index.html:
Open the index.html file in your preferred web browser.
Usage
Allow Location Access:
When prompted, allow the web application to access your location.
Click "Locate Me":
Click the "Locate Me" button to enable real-time location tracking.

View Information:
The map will center on your current location.
The compass direction, altitude, and device tilt (level) information will be displayed below the map.

Code Structure

index.html: Contains the structure of the web application.

style.css: Contains the styles for the web application.

script.js: Contains the functionality and interactivity for the web application.
