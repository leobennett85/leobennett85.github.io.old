class DataReport {
  constructor() {
    this.dataReportHTML = `
        <div id="totalsWrap">
          <div id="idBtnTotals" class="reportItem">
            <span class="material-icons md-dark" style="font-size: 35px">
              calculate
            </span>
          </div>
          <div id="idReportTotals" class="report"></div>
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
