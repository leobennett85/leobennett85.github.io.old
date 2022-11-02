returnId = (id) => {
  let idHeader;
  switch (id) {
    case "taxiStatsHead":
      idHeader = document.getElementById("taxiStats");
      break;
    case "leafletHead":
      idHeader = document.getElementById("leaflet");
      break;
    case "notesResourceHead":
      idHeader = document.getElementById("notesResources");
      break;
  }
  const display = window.getComputedStyle(idHeader).display;
  if (display === "none") {
    idHeader.style.display = "block";
  } else {
    idHeader.style.display = "none";
  }
};

showTaxiStats = () => {};

showLeaflet = () => {};

showNotesResources = () => {};
