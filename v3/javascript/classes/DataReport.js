class DataReport {
  constructor() {
    this.dataReportHTML = `
        <div id="totalsWrap">
          <div id="idBtnTotals" class="reportItem">
            <span class="material-icons md-dark" style="font-size: 35px">
              calculate
            </span>
          </div>
          <div id="idReportTotals" class="report">
            <div class="reportHeader">Shift Gross</div>
            <div class="reportLabel">Total Meter:</div><div id="reportShiftTotalMeter">test</div>
            <div class="reportLabel">Total Flat Rates:</div><div id="reportShiftFlatRate"></div>
            <div class="reportLabel">Total Tips:</div><div id="reportShiftTotalTips">test</div>
            <div class="reportTotal">Total Shift Gross:</div><div id="reportShiftTotalGross"></div>
            <div class="reportHeader">Profit</div>
            <div class="reportLabel">Broker Profit:</div><div id="reportProfitBroker"></div>
            <div class="reportLabel">Driver Profit:</div><div id="reportProfitDriver"></div>
            <div class="reportHeader">Payment Type</div>
            <div class="reportLabel">Cash:</div><div id="reportPaymentCash"></div>
            <div class="reportLabel">Card:</div><div id="reportPaymentCard"></div>
            <div class="reportLabel">Charge:</div><div id="reportPaymentCharge"></div>
            <div class="reportTotal">Total Paid:</div><div id="reportPaymentTotal"></div>
            <div class="reportHeader">Travel</div>
            <div class="reportLabel">Km Metered:</div><div id="reportTravelKmMetered"></div>
            <div class="reportLabel">$/km:</div><div id="reportTravelDolPerKm"></div>
            <div class="reportHeader">Expense</div>
            <div class="reportLabel">Personal Expense Total:</div><div id="reportExpenseTotalPersonal"></div>
            <div class="reportLabel">Broker Expense Total:</div><div id="reportExpenseTotalBroker"></div>
            <div class="reportHeader">Estimated Gas</div>
            <div class="reportTotal">Estimated cost of Gas:</div><div id="reportEstGasTotal"></div>
          </div>
        </div>

        <div id="mapWrap">
          <div id="idBtnMap" class="reportItem">
            <span class="material-icons md-dark" style="font-size: 35px">
            my_location

            </span>
          </div>
          <div id="idReportMap" class="report"></div>
        </div>`;
  }

  // GETTERS

  get dataReportWrap() {
    return document.getElementById("dataReportWrap");
  }

  get btnTotals() {
    return document.getElementById("idBtnTotals");
  }

  get btnMaps() {
    return document.getElementById("idBtnMap");
  }

  // METHODS
  buildDataReport = () => {
    this.dataReportWrap.innerHTML = this.dataReportHTML;
    const reportTotals = this.btnTotals;
    const reportMap = this.btnMaps;
    const reportRef = this;
    // onClick event to activate Reports
    reportTotals.onclick = function () {
      reportRef.checkTotals();
    };
    reportMap.onclick = function () {
      reportRef.checkMap();
    };
  };

  checkTotals = () => {
    const menu = document.getElementById("totalsWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-320px":
        this.hideTotals();
        break;
      case "0px":
        this.hideAll();
        this.showTotals();
        break;
    }
  };

  checkMap = () => {
    const menu = document.getElementById("mapWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-320px":
        this.hideMap();
        break;
      case "0px":
        this.hideAll();
        this.showMap();
        break;
    }
  };

  showTotals = () => {
    const menu = document.getElementById("totalsWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-20rem";
  };

  hideTotals = () => {
    const menu = document.getElementById("totalsWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0px";
  };

  showMap = () => {
    const menu = document.getElementById("mapWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-20rem";
  };

  hideMap = () => {
    const menu = document.getElementById("mapWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0px";
  };

  hideAll = () => {
    const totals = document.getElementById("totalsWrap");
    const map = document.getElementById("mapWrap");
    const add = document.getElementById("addWrap");
    const update = document.getElementById("updateWrap");
    const edit = document.getElementById("editWrap");
    const eod = document.getElementById("eodWrap");

    add.style.left = "-10rem";
    update.style.left = "-10rem";
    edit.style.left = "-10rem";
    eod.style.left = "-10rem";
    totals.style.left = "0px";
    map.style.left = "0px";
  };
}
