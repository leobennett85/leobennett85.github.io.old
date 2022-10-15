class ViewMain {
  constructor(
    runIndex,
    startingAdd,
    totalMeter,
    standAcq,
    time,
    duration,
    dolPerKm,
    fareType,
    tip
  ) {
    this.exp = "+";
    this.con = "-";
    this.runIndex = runIndex;
    this.startingAdd = startingAdd;
    this.totalMeter = totalMeter;
    this.standAcq = standAcq;
    this.time = time;
    this.duration = duration;
    this.dolPerKm = dolPerKm;
    this.fareType = fareType;
    this.tip = tip;
    this.viewMainWrapper = `<div id="viewMainWrapper">`;
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
    this.viewMainRowHTML = `
        <div id="viewMainData">
            <div id="viewMainRow${this.runIndex}" class="viewMainRowInfo">
                <div id="viewMainRunIndex${this.runIndex}">${this.runIndex}</div>
                <div id="viewMainExpCon${this.runIndex}">${this.exp}</div>
                <div id="viewMainStatingAdd${this.runIndex}">${this.startingAdd}</div>
                <div id="viewMainTotalMeter${this.runIndex}">${this.totalMeter}</div>
            </div>
        </div> `;
    this.viewMainDetailsHTML = `
    <div id="viewMainDetails${this.runIndex}" class="viewMainDetailsInfo">
        <div id="viewMainDetails">
            <div class="label">Destination Address: </div><div id="viewMainDestinationAdd${this.runIndex}">${this.runIndex}</div>
            <div class="label">Stand Acquired: </div><div id="viewMainJobAcq${this.runIndex}">${this.standAcq}</div>
            <div class="label">Time of Run: </div><div id="viewMainArrival${this.runIndex}">${this.time}</div>
            <div class="label">Duration of Run: </div><div id="viewMainDuration${this.runIndex}">${this.duration}</div>
            <div class="label">Total Meter: </div><div id="viewMainDistance${this.runIndex}">${this.totalMeter}</div>
            <div class="label">$/km: </div><div id="viewMainDolPerKm${this.runIndex}">${this.dolPerKm}</div>
            <div class="label">Type of Fare: </div><div id="viewMainFareType${this.runIndex}">${this.fareType}</div>
            <div class="label">Tip: </div><div id="viewMainTip${this.runIndex}">${this.tip}</div>
        </div>
    </div>
    `;
    this.viewMainWrapperClose = `</div>`;
  }
  // Getters

  get newRowLine() {
    return document.getElementById("dataView");
  }

  get expcon() {
    let clickedExpCon = "viewMainExpCon";
    let index = this.runIndex;
    let expcon = clickedExpCon + index;
    return document.getElementById(expcon);
  }

  // Methods
  expConClick = () => {};
  addRow = () => {
    // Generate new row HTML
    const expConClicked = document.getElementById(this.expcon);
    console.log(expConClicked);
    this.newRowLine.innerHTML = this.viewMainHeaderHTML;
    this.newRowLine.innerHTML +=
      this.viewMainRowHTML + this.viewMainDetailsHTML;
    //expConClick.onclick = function () {
    //Ref.modalClick();
  };
}
