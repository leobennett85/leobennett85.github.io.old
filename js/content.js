let newGridInfo = {
    idGridIndfo: `<div id="gridInfo">`,
    idGridInfoLayout: `<div id="gridInfoLayout">`,
    clSpaceLeft: `<div class="space"></div>`,
    idIndex: (index) => `<div id="infoIndex${index}" class="infoStyle">${index}</div>`,
    idExpCon: (index) => `<div id="infoExpCon${index}" class="infoStyle" onClick="expand(${index});">+</div>`,
    idTime: (index, time) => `<div id="infoTime${index}" class="infoStyle">${time}</div>`,
    idStartAdd: (index, startAdd) => `<div id="infoStartAdd${index}" class="infoStyle">${startAdd}</div>`,
    idRunTotal: `<div id="infoRunTotal" class="infoStyle"></div>`,
    clSpaceRight: `<div class="space"></div>`,
    closeDiv: `</div></div>`,
    idGridWrapper: (index) => `<div id="gridWrapper${index}">`,
    idGridDetails: `<div id="gridDetails">`,
    idGridDetailsLayout:`<div id="gridDetailsLayout">`,
    clSpaceA1: `<div class="space"></div>`,
    clSpaceA2: `<div class="space"></div>`,
    clSpaceA3: `<div class="space"></div>`,
    idDetailsEndTime: (index, detailsArrival) => `<div id= detailsEndTime${index}" class="detailsStyle">Arrival Time: ${detailsArrival}</div>`,
    idDetailsDestination: (index, detailsDestination) => `<div id="detailsDestination${index}" class="detailsStyle">Destination Address: ${detailsDestination}</div>`,
    idDetailsFareTotal: (index, detailsFareTotal) => `<div id="detailsFareTotal${index}" class="detailsStyle">Fare Total: ${detailsFareTotal}</div>`,
    clSpaceB1: `<div class="space"></div>`,
    clSpaceB2: `<div class="space"></div>`,
    clSpaceB3: `<div class="space"></div>`,
    clSpaceB4: `<div class="space"></div>`,
    idDetailsTotalTime: (index) => `<div id="detailsTotalTime${index}" class="detailsStyle">Total Time:</div>`,
    idDetailsDistance: (index, detailsDistance) => `<div id="detailsDistance${index}" class="detailsStyle">Distance (km): ${detailsDistance}</div>`,
    idDetailDollarsPerKm: (index, detailsDolPerKm) => `<div id="detailsDollarsPerKm${index}" class="detailsStyle">$/km: ${detailsDolPerKm}</div>`,
    clSpaceC1: `<div class="space"></div>`,
    clSpaceC2: `<div class="space"></div>`,
    clSpaceC3: `<div class="space"></div>`,
    clSpaceC4: `<div class="space"></div>`,
    clSpaceC5: `<div class="space"></div>`,
    idDetailsFareType: (index, detailsFareType) => `<div id="detailsFareType${index}" class="detailsStyle">FareType: ${detailsFareType}</div>`,
    idDetailsTip: (index, detailsTip) => `<div id="detailsTip${index}" class="detailsStyle">Tip: ${detailsTip}</div>`,
    clspaceD1: `<div class="space"></div>`,
    closeDiv: `</div>`
}

let newTotals = {
    idTotals: `<div id="totals" class="totalsStyle hideTotals">`,
    idBtnTotals: `<div class="btnTotals" onclick="clickTotals();">
                 <span>&Sigma;</span>
                 </div>`,
    cltotalsShiftHeader: `<div class="totalsHeader">Shift Report</div>`,
    idTotalsShiftMeter: (shiftMeter) => `<div id="totalsShiftMeter" class="totalsContent">Meter: ${shiftMeter}</div>`,
    idTotalsShiftFlat: (shiftFlat) => `<div id="totalsShiftFlat" class="totalsContent">Flat Rates: ${shiftFlat}</div>`,
    idTotalsShift: (shiftTotal) => `<div id="totalsShift" class="totalsFooter">Total Shift: ${shiftTotal}</div>`,
    clTotalsProfHeader:  `<div class="totalsHeader">Profit Report</div>`,
    idTotalsProfitBroker: (profitBroker) => `<div id="totalProfitBroker" class="totalsContent">Broker Profit: ${profitBroker}</div>`,
    idTotalsProfitDriver: (profitDriver) => `<div id="totalsProfitDriver" class="totalsContent">Driver Profit ${profitDriver}</div>`,
    idTotalsProfit: (profitTotal) => `<div id="totalsProfit" class="totalsFooter">Total Taxi Profit: ${profitTotal}</div>`,
    clTotalsPayHeader: `<div class="totalsHeader">Payment Type Report</div>`,
    idTotalsPayCash: (payCash) => `<div id="totalsPayCash" class="totalsContent">Cash: ${payCash}</div>`,
    idTotalsPayDebit: (payDebit) => `<div id="totalsPayDebit" class="totalsContent">Debit/Credit: ${payDebit}</div>`,
    idTotalsPayOther: (payOther) => `<div id="totalsPayOther" class="totalsContent">Other: ${payOther}</div>`,
    idTotalsPay: (payTotal) => `<div id="totalsPay" class="totalsFooter">Total Gross Paid: ${payTotal}</div>`,
    clTotalsKmHeader: `<div class="totalsHeader">KM Report</div>`,
    idTotalsKmTraveled: (kmTraveled) => `<div id="totalsKmTraveled" class="totalsContent">Km Traveled: ${kmTraveled}</div>`,
    idTotalsKmMetered: (kmMetered) => `<div id="totalsKmMetered" class="totalsContent">Metered Km: ${kmMetered}</div>`,
    idTotalsKmDolPerKm: (kmPer) => `<div id="totalsKmDolPerKm" class="totalsContent">$/km: ${kmPer}</div>`,
    clTotalsHeader: `<div class="totalsHeader">Expense Report</div>`,
    idTotalsExpPersonal: (expPersonal) => `<div id="totalsExpPersonal" class="totalsContent">Personal Expenses: ${expPersonal}</div>`,
    idTotalsExpTaxi: (expTaxi) => `<div id="totalsExpTaxi" class="totalsContent">Taxi Expenses: ${expTaxi}</div>`,
    idTotalsExp: (expTotal) => `<div id="totalsExp" class="totalsFooter">Total Expenses: ${expTotal}</div>`,
    idTotalsEstGas: (estGas) => `<div id="totalsEstGas" class="totalsHeader">Estimated Gas Total: ${estGas}</div>`,
    closeDiv: `</div>`
}

addNewFareTable = () => {
    const fareTableElement = document.getElementById("fareTable");
    const fareTableCount = fareTableElement.childElementCount;
    const contentForm = document.forms["formWrapper"];
    /* Input Variables */
    const time = contentForm.inputTime.value;
    const startAdd = contentForm.inputStartingAdd.value;
    const detailsArrival = contentForm.inputDetailsArrivalTime.value;
    const detailsDestination = contentForm.inputDetailsDestinationAdd.value;
    const detailsDistance = contentForm.inputDetailsDistance.value;
    const detailsFareTotal = contentForm.inputDetailsFareTotal.value;
    const deatilsDolPerKm = contentForm.inputDetailsDolPerKm.value;
    const detailsFareType = contentForm.inputDetailsFareType.value;
    const detailsTip = contentForm.inputDetailsTip.value;
    /* Calculated Variables */
    const d = new Date();
    const currentTime = d.toLocaleTimeString();

    const addFare = elementFromHtml (
        // gridInfo Section
        newGridInfo.idGridIndfo +
        newGridInfo.idGridInfoLayout +
        newGridInfo.clSpaceLeft +
        newGridInfo.idIndex(fareTableCount) +
        newGridInfo.idExpCon(fareTableCount) +
        newGridInfo.idTime(fareTableCount, currentTime) +
        newGridInfo.idStartAdd(fareTableCount, startAdd) +
        newGridInfo.idRunTotal +
        newGridInfo.clSpaceRight +
        newGridInfo.closeDiv +
        // gridDetails section
        newGridInfo.idGridWrapper(fareTableCount) +
        newGridInfo.idGridDetails +
        newGridInfo.idGridDetailsLayout +
        newGridInfo.clSpaceA1 +
        newGridInfo.clSpaceA2 +
        newGridInfo.clSpaceA3 +
        newGridInfo.idDetailsEndTime(fareTableCount, detailsArrival) +
        newGridInfo.idDetailsDestination(fareTableCount, detailsDestination) +
        newGridInfo.idDetailsFareTotal(fareTableCount, detailsFareTotal) +
        newGridInfo.clSpaceB1 +
        newGridInfo.clSpaceB2 +
        newGridInfo.clSpaceB3 +
        newGridInfo.clSpaceB4 +
        newGridInfo.idDetailsTotalTime(fareTableCount) +
        newGridInfo.idDetailsDistance(fareTableCount, detailsDistance)  +
        newGridInfo.idDetailDollarsPerKm(fareTableCount, deatilsDolPerKm) +
        newGridInfo.clSpaceC1 +
        newGridInfo.clSpaceC2 +
        newGridInfo.clSpaceC3 +
        newGridInfo.clSpaceC4 +
        newGridInfo.idDetailsFareType(fareTableCount, detailsFareType) +
        newGridInfo.idDetailsTip(fareTableCount, detailsTip) +
        newGridInfo.clSpaceC5 +
        newGridInfo.closeDiv
    );

    fareTableElement.appendChild(addFare);
    setContent(fareTableCount);
}

initTotals = () => {
    const totalsTableElement = document.getElementById("TotalsWrapper");

    const initTotals = elementFromHtml (
        newTotals.idTotals +
        newTotals.idBtnTotals +
        newTotals.cltotalsShiftHeader +
        newTotals.idTotalsShiftMeter(0) +
        newTotals.idTotalsShiftFlat(0) +
        newTotals.idTotalsShift(0) +
        newTotals.clTotalsProfHeader +
        newTotals.idTotalsProfitBroker(0) +
        newTotals.idTotalsProfitDriver(0) +
        newTotals.idTotalsProfit(0) +
        newTotals.clTotalsPayHeader +
        newTotals.idTotalsPayCash(0) +
        newTotals.idTotalsPayDebit(0) +
        newTotals.idTotalsPayOther(0) +
        newTotals.idTotalsPay(0) +
        newTotals.clTotalsKmHeader +
        newTotals.idTotalsKmTraveled(0) +
        newTotals.idTotalsKmMetered(0) +
        newTotals.idTotalsKmDolPerKm(0) +
        newTotals.clTotalsHeader +
        newTotals.idTotalsExpPersonal(0) +
        newTotals.idTotalsExpTaxi(0) +
        newTotals.idTotalsExp(0) +
        newTotals.idTotalsEstGas(0)
    );
    child = document.getElementById("totals")
    totalsTableElement.removeChild(child);
    
    totalsTableElement.appendChild(initTotals);

}

//TODO write a function to figure out the type of fare
//     and apply it to the right total

updateTotals = () => {
    const totalsTableElement = document.getElementById("TotalsWrapper");
    const detailsFareTotal = contentForm.inputDetailsFareTotal.value;

    const shiftMeter = shiftMeter + detailsFareTotal;
    const shiftFlat = 0;
    const shiftTotal = 0;
    const profitBroker = 0;
    const profitDriver = 0;
    const profitTotal = 0;
    const payCash = 0;
    const payDebit = 0;
    const payOther = 0;
    const payTotal = 0;
    const kmTraveled = 0;
    const kmMetered = 0;
    const kmPer = 0;
    const expPersonal = 0;
    const expTaxi = 0;
    const expTotal = 0;
    const estGas = 0;


    const updateTotals = elementFromHtml(
        newTotals.idTotals +
        newTotals.idBtnTotals +
        newTotals.cltotalsShiftHeader +
        newTotals.idTotalsShiftMeter(shiftMeter) +
        newTotals.idTotalsShiftFlat(shiftFlat) +
        newTotals.idTotalsShift(shiftTotal) +
        newTotals.clTotalsProfHeader +
        newTotals.idTotalsProfitBroker(profitBroker) +
        newTotals.idTotalsProfitDriver(profitDriver) +
        newTotals.idTotalsProfit(profitTotal) +
        newTotals.clTotalsPayHeader +
        newTotals.idTotalsPayCash(payCash) +
        newTotals.idTotalsPayDebit(payDebit) +
        newTotals.idTotalsPayOther(payOther) +
        newTotals.idTotalsPay(payTotal) +
        newTotals.clTotalsKmHeader +
        newTotals.idTotalsKmTraveled(kmTraveled) +
        newTotals.idTotalsKmMetered(kmMetered) +
        newTotals.idTotalsKmDolPerKm(kmPer) +
        newTotals.clTotalsHeader +
        newTotals.idTotalsExpPersonal(expPersonal) +
        newTotals.idTotalsExpTaxi(expTaxi) +
        newTotals.idTotalsExp(expTotal) +
        newTotals.idTotalsEstGas(estGas)
    );
    child = document.getElementById("totals")
    totalsTableElement.removeChild(child);
    
    totalsTableElement.appendChild(updateTotals);

}

elementFromHtml = (html) => {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

setContent = (index) => {
    const getGridWrapperIndex = "gridWrapper" + index;
    const content = document.getElementById(getGridWrapperIndex);
    content.classList.toggle('hide');
}

showContent = (gridWrapperIndex, index) => {
    const content = document.getElementById(gridWrapperIndex);
    content.classList.replace('hide', 'show');
    const getExpIndex = 'infoExpCon' + index;
    document.getElementById(getExpIndex).innerHTML = "-";
}

hideContent = (gridWrapperIndex, index) => {
    const content = document.getElementById(gridWrapperIndex);
    content.classList.replace('show', 'hide');
    const getExpIndex = 'infoExpCon' + index;
    document.getElementById(getExpIndex).innerHTML = "+";
}

expand = (index) => {
    const getGridWrapperIndex = 'gridWrapper' + index;
    const content = document.getElementById(getGridWrapperIndex);
    
    if (content.classList.contains('hide')) {
        showContent(getGridWrapperIndex, index);
    } else if (content.classList.contains('show')) {
        hideContent(getGridWrapperIndex, index);
    }
}

contractFirst = (index) => {
    const getGridWrapperIndex = 'gridWrapper' + index;
    const content = document.getElementById(getGridWrapperIndex);
    content.classList.toggle('hide');
}

contract = (index) => {
    const getGridWrapperIndex = 'gridWrapper' + index;
    const content = document.getElementById(getGridWrapperIndex);
    content.classList.replace('show', 'hide');
}