/* Tracker practice 
var x = navigator.geolocation;

x.getCurrentPosition(success, failure);

function success(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  var coords = new google.maps.LatLng(lat, lng);

  var options = {
    zoom: 16,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    map: map,
    position: coords,
  });
}
*/

function initMap() {
  var options = {
    center: { lat: 47.56253, lng: -52.707949 },
    zoom: 16,
  };

  // New Google Map
  map = new google.maps.Map(document.getElementById("map"), options);

  function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: "icon.png",
    });
  }

  addMarker({ lat: 47.56253, lng: -52.707949 });

  function navCurrentLocation() {
    const watchID = navigator.geolocation.watchPosition(
      success,
      error,
      options
    );
  }

  // Variable to count the number of requests
  let reqcount = 0;

  function success(pos) {
    reqcount++;
    const crd = pos.coords;

    addCoords(crd.latitude, crd.longitude);
    updateAnalyzer(reqcount, crd.accuracy, crd.heading, crd.speed);
    center: {
      crd.latitude, crd.longitude;
    }
  }

  function error() {
    console.log("Not supported, or possibly not enabled");
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
}

/*
  // Create starting marker
  const marker = new google.maps.Marker({
    position: { lat: 47.56253, lng: -52.707949 },
    map: map,
    icon: "icon.png",
  });

  // Create a detial window
  const detailWindow = new google.maps.InfoWindow({
    content: `<h2>Get Coding <br> Home Base</h2>`,
  });

  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  });
}
  */
