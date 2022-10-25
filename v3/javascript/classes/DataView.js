expCon = (expConDetails) => {
  console.log(expConDetails);
  if (expConDetails.classList.contains("viewMainDetailsHide")) {
    expConDetails.classList.replace(
      "viewMainDetailsHide",
      "viewMainDetailsShow"
    );
  } else if (expConDetails.classList.contains("viewMainDetailsShow")) {
    expConDetails.classList.replace(
      "viewMainDetailsShow",
      "viewMainDetailsHide"
    );
  }
};

class ViewMain {
  constructor() {
    this.expConState = "con";
    this.viewMainHeaderHTML = `
          <div id="viewMain">
              <div id="viewMainHeaders">
                  <div class="headerStyle">Run</div>
                  <div class="headerStyle">+/-</div>
                  <div class="headerStyle">Time</div>
                  <div class="headerStyle">Starting Address</div>
                  <div class="headerStyle">Total Meter</div>
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

  buildMainViewHeader = () => {
    console.log(this.dataWrap);
    this.dataWrap.innerHTML = this.viewMainHeaderHTML;
  };

  // Methods
  addRow = (
    startingAdd,
    totalFare,
    standAcq,
    time,
    duration,
    dolPerKm,
    fareType,
    tip
  ) => {
    const viewMainRowHTML = `
    <div id="viewMainData${newRunIndex}">
        <div id="viewMainRow${newRunIndex}" class="viewMainRowInfo">
            <div id="viewMainRunIndex${newRunIndex}">${newRunIndex}</div>
            <div id="viewMainExpCon${newRunIndex}">+</div>
            <div id="viewMainStatingAdd${newRunIndex}">${startingAdd}</div>
            <div id="viewMainTotalMeter${newRunIndex}">${totalFare}</div>
        </div>
    </div> `;
    const viewMainDetailsHTML = `
    <div id="viewMainDetails${newRunIndex}" class="viewMainDetailsInfo viewMainDetailsHide">
            <div class="label">Destination Address: </div><div id="viewMainDestinationAdd${newRunIndex}">${newRunIndex}</div>
            <div class="label">Stand Acquired: </div><div id="viewMainJobAcq${newRunIndex}">${standAcq}</div>
            <div class="label">Time of Run: </div><div id="viewMainArrival${newRunIndex}">${time}</div>
            <div class="label">Duration of Run: </div><div id="viewMainDuration${newRunIndex}">${duration}</div>
            <div class="label">$/km: </div><div id="viewMainDolPerKm${newRunIndex}">${dolPerKm}</div>
            <div class="label">Type of Fare: </div><div id="viewMainFareType${newRunIndex}">${fareType}</div>
            <div class="label">Tip: </div><div id="viewMainTip${newRunIndex}">${tip}</div>
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
    ///////////////////////////////////////////////////////
    /*
    const getExpCon = "viewMainExpCon" + newRunIndex;
    const expConClicked = document.getElementById(getExpCon);
    console.log("expConClicked" + expConClicked);
    const expCon = `${this.expConState}`;
    console.log("expCon: " + expCon);
    //expConClicked.style.display = "none";
    //const expConRef = this;

      console.log(newRunIndex);
      if (expCon === "exp") {
        console.log(expCon);
        expConClicked.style.display = "none";
        this.expConState = "con";
      } else if (expCon === "con") {
        console.log(expCon);
        expConClicked.style.display = "block";
        this.expConState = "exp";
      }
      
    };*/
  };
}
