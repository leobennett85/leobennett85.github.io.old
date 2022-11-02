returnId = (id) => {
  let idHeader;
  let idArrow;
  switch (id) {
    case "taxiStatsHead":
      idHeader = document.getElementById("taxiStats");
      idArrow = document.getElementById("taxiStatsArrow");
      break;
    case "leafletHead":
      idHeader = document.getElementById("leaflet");
      idArrow = document.getElementById("leafletArrow");
      break;
    case "notesResourcesHead":
      idHeader = document.getElementById("notesResources");
      idArrow = document.getElementById("notesResourcesArrow");
      break;
  }
  const display = window.getComputedStyle(idHeader).display;
  if (display === "none") {
    idHeader.style.display = "block";
    idArrow.innerHTML = "-";
  } else if (display === "block") {
    idHeader.style.display = "none";
    idArrow.innerHTML = "+";
  }
};
