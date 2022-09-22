// Map initializtion
const map = L.map("map").setView([47.56253, -52.707949], 17);

// GoogleStreets Layer
const googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

// Add Layers to map
googleStreets.addTo(map);

let markerStart = L.marker([47.56253, -52.707949]);
let centerMarker = L.marker([47.56253, -52.707949]);
markerStart.addTo(map);

const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Function to begin tracking device
function navCurrentLocation() {
  const watchID = navigator.geolocation.watchPosition(success, error, options);
}

// Variable to count the number of requests
let reqcount = 0;

function success(pos) {
  reqcount++;
  const crd = pos.coords;

  addCoords(crd.latitude, crd.longitude);
  updateAnalyzer(reqcount, crd.accuracy, crd.heading, crd.speed);
  centerMarker = L.marker([crd.latitude, crd.longitude]).addTo(map);
  map.setView([crd.latitude, crd.longitude], 18);
}

setInterval(navCurrentLocation, 1000);

// Function to add data to the coordinate display dashboard
function addCoords(lat, long) {
  let coordinateDisplay = document.getElementById("coordDisplay");

  let newCoordHTML = `<div class="coords">
        Latitude: <i>${lat}</i> | Longitude: <i>${long}</i> <br />
        </div>`;
  coordinateDisplay.innerHTML += newCoordHTML;
  coordinateDisplay.scrollTo(0, coordinateDisplay.scrollHeight);
}

function updateAnalyzer(req, acc, head, speed) {
  let varDisplay = document.getElementById("varDisplay");

  let newVarDisplayHTML = `<div class="travelVariables">
      <b>Number of Requests:</b> <i>${req}</i> <br>
      <b>Accuracy:</b> <i>${acc}</i> <br>
      <b>Heading:</b> <i>${head}</i> <br>
      <b>Speed:</b> <i>${speed}</i>
      </div>`;
  varDisplay.innerHTML = newVarDisplayHTML;
}
