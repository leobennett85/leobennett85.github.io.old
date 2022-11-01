expCon = (expConDetails, expConSymbol) => {
  console.log(expConDetails);
  if (expConDetails.classList.contains("viewMainDetailsHide")) {
    expConDetails.classList.replace(
      "viewMainDetailsHide",
      "viewMainDetailsShow"
    );
    expConSymbol.innerHTML = "-";
  } else if (expConDetails.classList.contains("viewMainDetailsShow")) {
    expConDetails.classList.replace(
      "viewMainDetailsShow",
      "viewMainDetailsHide"
    );
    expConSymbol.innerHTML = "+";
  }
};

class ViewMain {
  constructor() {
    this.viewMainHeaderHTML = `
          <div id="viewMain">
              <div id="viewMainHeaders">
                  <div class="headerStyle">Run</div>
                  <div class="headerStyle">+/-</div>
                  <div class="headerStyle">Starting Address</div>
                  <div class="headerStyle">Meter</div>
              </div>
          </div>
      `;
  }

  // GETTERS
  get dataWrap() {
    return document.getElementById("dataViewWrap");
  }

  get expConClicked() {
    return document.getElementById("viewMainExpCon" + newRunIndex);
  }

  // METHODS

  buildMainViewHeader = () => {
    console.log(this.dataWrap);
    this.dataWrap.innerHTML = this.viewMainHeaderHTML;
  };

  getFormattedTime = (rawTime) => {
    const newTime = +rawTime;
    const d = new Date(newTime);
    const time = d.toLocaleTimeString();
    return time;
  };

  addRow = (
    beginOdometer,
    timeAcq,
    standAcq,
    startingAdd,
    destinationAdd,
    endOdometer,
    timeArrival,
    duration,
    distance,
    totalMeter,
    dolPerKm,
    fareType,
    paymentType,
    tip
  ) => {
    distance = endOdometer - beginOdometer;
    dolPerKm = totalMeter / distance;
    dolPerKm.toFixed(2);
    const viewMainRowHTML = `
    <div id="viewMainData">
        <div id="viewMainRow${newRunIndex}" class="viewMainRowInfo">
            <div id="viewMainRunIndex${newRunIndex}" class="info">${newRunIndex}</div> 
            <div id="viewMainExpCon${newRunIndex}" class="info">+</div>
            <div id="viewMainStatingAdd${newRunIndex}" class="info">${startingAdd}</div>
            <div id="viewMainTotalMeter${newRunIndex}" class="info">$ ${totalMeter}</div>
        </div>
    </div> `;
    const viewMainDetailsHTML = `
    <div id="viewMainDetails${newRunIndex}" class="viewMainDetailsInfo viewMainDetailsHide">
            <div class="label">Destination Address: </div><div id="viewMainDestinationAdd${newRunIndex}" class="info">${destinationAdd}</div>
            <div class="label">Stand Acquired: </div><div id="viewMainStandAcq${newRunIndex}" class="info">${standAcq}</div>
            <div class="label">Time of Run: </div><div id="viewMainTimeAcq${newRunIndex}" class="info">${this.getFormattedTime(
      timeAcq
    )}</div>
            <div class="label">Time of Arrival: </div><div id="viewMainTimeArrival${newRunIndex}" class="info">${this.getFormattedTime(
      timeArrival
    )}</div>
            <div class="label">Duration of Run: </div><div id="viewMainDuration${newRunIndex}" class="info">${duration} Seconds</div>
            <div class="label">Distance Travelled: </div><div id="viewMainDistance${newRunIndex}" class="info">${distance} km</div>
            <div class="label">$/km: </div><div id="viewMainDolPerKm${newRunIndex}" class="info">${dolPerKm}/km</div>
            <div class="label">Type of Fare: </div><div id="viewMainFareType${newRunIndex}" class="info">${fareType}</div>
            <div class="label">Type of Fare: </div><div id="viewMainPaymentType${newRunIndex}" class="info">${paymentType}</div>
            <div class="label">Tip: </div><div id="viewMainTip${newRunIndex}" class="info">$${tip}</div>
    </div>
    `;
    const viewMainWrapperClose = `</div>`;

    const dataWrapNewRow = document.createElement("div");

    dataWrapNewRow.innerHTML =
      viewMainRowHTML + viewMainDetailsHTML + viewMainWrapperClose;

    this.dataWrap.appendChild(dataWrapNewRow);

    const expConDetails = document.getElementById(
      "viewMainDetails" + newRunIndex
    );
    const expConSymbol = document.getElementById(
      "viewMainExpCon" + newRunIndex
    );
    this.expConClicked.addEventListener("click", function () {
      expCon(expConDetails, expConSymbol);
    });
  };
}
