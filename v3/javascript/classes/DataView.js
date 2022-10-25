expCon = (expConDetails) => {
  console.log(expConDetails);
  const expCon = document.getElementById(`viewMainExpCon${newRunIndex}`);
  if (expConDetails.classList.contains("viewMainDetailsHide")) {
    expConDetails.classList.replace(
      "viewMainDetailsHide",
      "viewMainDetailsShow"
    );
    expCon.innerHTML = "-";
  } else if (expConDetails.classList.contains("viewMainDetailsShow")) {
    expConDetails.classList.replace(
      "viewMainDetailsShow",
      "viewMainDetailsHide"
    );
    expCon.innerHTML = "+";
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

  getTime = () => {
    const d = new Date();
    const time = d.getTime();
    const formattedTime = d.toLocaleTimeString(time);
    return formattedTime;
  };

  buildMainViewHeader = () => {
    console.log(this.dataWrap);
    this.dataWrap.innerHTML = this.viewMainHeaderHTML;
  };

  addRow = (
    startingAdd,
    totalFare,
    standAcq,
    duration,
    dolPerKm,
    fareType,
    tip
  ) => {
    const viewMainRowHTML = `
    <div id="viewMainData">
        <div id="viewMainRow${newRunIndex}" class="viewMainRowInfo">
            <div id="viewMainRunIndex${newRunIndex}" class="info">${newRunIndex}</div> 
            <div id="viewMainExpCon${newRunIndex}" class="info">+</div>
            <div id="viewMainStatingAdd${newRunIndex}" class="info">${startingAdd}</div>
            <div id="viewMainTotalMeter${newRunIndex}" class="info">${totalFare}</div>
        </div>
    </div> `;
    const viewMainDetailsHTML = `
    <div id="viewMainDetails${newRunIndex}" class="viewMainDetailsInfo viewMainDetailsHide">
            <div class="label">Destination Address: </div><div id="viewMainDestinationAdd${newRunIndex}" class="info">${newRunIndex}</div>
            <div class="label">Stand Acquired: </div><div id="viewMainJobAcq${newRunIndex}" class="info">${standAcq}</div>
            <div class="label">Time of Run: </div><div id="viewMainArrival${newRunIndex}" class="info">${this.getTime()}</div>
            <div class="label">Duration of Run: </div><div id="viewMainDuration${newRunIndex}" class="info">${duration}</div>
            <div class="label">$/km: </div><div id="viewMainDolPerKm${newRunIndex}" class="info">${dolPerKm}</div>
            <div class="label">Type of Fare: </div><div id="viewMainFareType${newRunIndex}" class="info">${fareType}</div>
            <div class="label">Tip: </div><div id="viewMainTip${newRunIndex}" class="info">${tip}</div>
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
    this.expConClicked.addEventListener("click", function () {
      expCon(expConDetails);
    });
  };
}
