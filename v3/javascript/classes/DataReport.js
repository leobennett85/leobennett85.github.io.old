class DataReport {
  constructor() {
    this.dataReportHTML = `
        <div id="totalsWrap">
          <div id="idBtnTotals" class="reportItem" onclick="checkTotals();">
            <span class="material-icons md-dark" style="font-size: 35px">
              calculate
            </span>
          </div>
          <div id="idReportTotals" class="report"></div>
        </div>

        <div id="mapWrap">
          <div id="idBtnMap" class="reportItem" onclick="checkMap();">
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

  // METHODS
  buildDataReport = () => {
    this.dataReportWrap.innerHTML = this.dataReportHTML;
  };
}
