//GLOBAL VARIABLES FOR TOTALS
let shiftMeter = 0;
let shiftFlat = 0;
let shiftTips = 0;
let shiftTotal = 0;
let profitBroker = 0;
let profitDriver = 0;
let profitTotal = 0;
let payCash = 0;
let payDebit = 0;
let payOther = 0;
let payTotal = 0;
let kmTraveled = 0;
let kmMetered = 0;
let kmPer = 0;
let expPersonal = 0;
let expTaxi = 0;
let expTotal = 0;
let estGas = 0;
let runningTotal = 0;
let priceOfGas = 0;
let litresPer = 0;
let pickupTime;

logGlobals = () => {
    console.log(
        "Log Globals: ", '\n',
        "shiftMeter = ", shiftMeter, '\n',
        "shiftFlat = ", shiftFlat, '\n',
        "shiftTips =", shiftTips, '\n',
        "shiftTotal = ", shiftTotal, '\n',
        "profitBroker = ", profitBroker, '\n',
        "profitDriver = ", profitDriver, '\n',
        "profitTotal = ", profitTotal, '\n',
        "payCash = ", payCash, '\n',
        "payDebit = ", payDebit, '\n',
        "payOther = ", payOther, '\n',
        "payTotal = ", payTotal, '\n',
        "kmTraveled = ", kmTraveled, '\n',
        "kmMetered = ", kmMetered, '\n',
        "kmPer = ", kmPer, '\n',
        "expPersonal = ", expPersonal, '\n',
        "expTaxi = ", expTaxi, '\n',
        "expTotal = ", expTotal, '\n',
        "estGas = ", estGas, '\n',
        "runningTotal = ", runningTotal, '\n',
        "priceOfGas = ", priceOfGas, '\n',
        "litresPer = ", litresPer, '\n',
        "pickupTime = ", pickupTime
        );
}

let newGridInfo = {
    idGridIndfo: `<div id="gridInfo">`,
    idGridInfoLayout: `<div id="gridInfoLayout">`,
    clSpaceLeft: `<div class="space"></div>`,
    idIndex: (index) => `<div id="infoIndex${index}" class="infoStyle">${index}</div>`,
    idExpCon: (index) => `<div id="infoExpCon${index}" class="infoStyle" onClick="expand(${index});">+</div>`,
    idTime: (index, time) => `<div id="infoTime${index}" class="infoStyle">${time}</div>`,
    idStartAdd: (index, startAdd) => `<div id="infoStartAdd${index}" class="infoStyle">${startAdd}</div>`,
    idRunTotal: (runTotal) => `<div id="infoRunTotal" class="infoStyle">${runTotal}</div>`,
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
    idDetailsTotalTime: (index, totalTime) => `<div id="detailsTotalTime${index}" class="detailsStyle">Total Time: ${totalTime}</div>`,
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
    idTotalsShiftTips: (shiftTips) => `<div id="totalsShiftTips" class="totalsContent">Tips: ${shiftTips}</div>`,
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

beginRun = () => {
    const d = new Date();
    pickupTime = d.toLocaleTimeString();
    console.log(pickupTime);
    document.getElementById('btnEndRun').style.visibility = "visible";
}

endRun = () => {
    const d = new Date();
    const dropTime = d.toLocaleTimeString();

    addNewFareTable(dropTime);
    updateTotals();
    document.getElementById('btnEndRun').style.visibility = "hidden";
}

addNewFareTable = (dropTime) => {
    const fareTableElement = document.getElementById("fareTable");
    const fareTableCount = fareTableElement.childElementCount;
    const contentForm = document.forms["formWrapperAddRun"];
    /* Input Variables */
    const startAdd = contentForm.inputStartingAdd.value;
    const detailsDestination = contentForm.inputDetailsDestinationAdd.value;
    const detailsDistance = contentForm.inputDetailsDistance.value;
    const detailsFareTotal = contentForm.inputDetailsFareTotal.value;
    const detailsFareType = contentForm.inputDetailsFareType.value;
    const detailsTip = contentForm.inputDetailsTip.value;
    const runTotal = +detailsFareTotal + +detailsTip;
    console.log(pickupTime, dropTime);
    const totalTime = pickupTime - dropTime;
    console.log(totalTime);
    runningTotal = runningTotal + runTotal;

    /* Calculated Variables */
    

    const addFare = elementFromHtml (
        // gridInfo Section
        newGridInfo.idGridIndfo +
        newGridInfo.idGridInfoLayout +
        newGridInfo.clSpaceLeft +
        newGridInfo.idIndex(fareTableCount) +
        newGridInfo.idExpCon(fareTableCount) +
        newGridInfo.idTime(fareTableCount, pickupTime) +
        newGridInfo.idStartAdd(fareTableCount, startAdd) +
        newGridInfo.idRunTotal(runningTotal) +
        newGridInfo.clSpaceRight +
        newGridInfo.closeDiv +
        newGridInfo.idGridWrapper(fareTableCount) +
        newGridInfo.idGridDetails +
        newGridInfo.idGridDetailsLayout +
        newGridInfo.clSpaceA1 +
        newGridInfo.clSpaceA2 +
        newGridInfo.clSpaceA3 +
        newGridInfo.idDetailsEndTime(fareTableCount, dropTime) +
        newGridInfo.idDetailsDestination(fareTableCount, detailsDestination) +
        newGridInfo.idDetailsFareTotal(fareTableCount, detailsFareTotal) +
        newGridInfo.clSpaceB1 +
        newGridInfo.clSpaceB2 +
        newGridInfo.clSpaceB3 +
        newGridInfo.clSpaceB4 +
        newGridInfo.idDetailsTotalTime(fareTableCount, totalTime) +
        newGridInfo.idDetailsDistance(fareTableCount, detailsDistance)  +
        newGridInfo.idDetailDollarsPerKm(fareTableCount) +
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

updateTotals = () => {
    let updateShiftMeter = 0;
    let updateShiftFlat = 0;
    let updateShiftTips = 0;
    let updateShiftTotal = 0;
    let updateProfitBroker = 0;
    let updateProfitDriver = 0;
    let updateProfitTotal = 0;
    let updatePayCash = 0;
    let updatePayDebit = 0;
    let updatePayOther = 0;
    let updatePayTotal = 0;
    let updateKmTraveled = 0;
    let updateKmMetered = 0;
    let updateKmPer = 0;
    let updateExpPersonal = 0;
    let updateExpTaxi = 0;
    let updateExpTotal = 0;
    let updateEstGas = 0;
    let typeOfFare;
    
    const totalsTableElement = document.getElementById("TotalsWrapper");
    const contentForm = document.forms["formWrapperAddRun"];

    // Used to accumulate according to Metered or Flat Fares
    typeOfFare = contentForm.inputDetailsFareType.value;

    // Shift Report
    if (typeOfFare == "Flat") {
        updateShiftFlat =  +contentForm.inputDetailsFareTotal.value
        updateShiftMeter = 0;
    } else if (typeOfFare == "Metered") {
        updateShiftMeter = +contentForm.inputDetailsFareTotal.value;
        updateShiftFlat = 0;
    }

    updateShiftTips = +contentForm.inputDetailsTip.value;
    updateShiftTotal = +contentForm.inputDetailsFareTotal.value;

    shiftMeter = updateShiftMeter + shiftMeter;
    shiftFlat = updateShiftFlat + shiftFlat;
    shiftTips = updateShiftTips +  shiftTips;
    shiftTotal = updateShiftTotal + shiftTotal;
    
    logGlobals();
    let updateTotals = elementFromHtml(
        
        newTotals.idTotals +
        newTotals.idBtnTotals +
        newTotals.cltotalsShiftHeader +
        newTotals.idTotalsShiftMeter(shiftMeter) +
        newTotals.idTotalsShiftFlat(shiftFlat) +
        newTotals.idTotalsShiftTips(shiftTips) +
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
    document.getElementById("formWrapperAddRun").style.visibility = "hidden";

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

addRun = () => {
    document.getElementById("formWrapperAddRun").style.visibility = "visible";
}


//FORMATTING AND PREVENTATIVE ERRORNEOUS-DATA FUNCTIONS

formatFare = (fareTotal) => {
    const newFareTotal= Math.round((fareTotal * 100)/100).toFixed(2);
    let input = document.getElementById('inputDetailsFareTotal');
    input.value = newFareTotal;
}

formatTip = (tipTotal) => {
    const newTipTotal= Math.round((tipTotal * 100)/100).toFixed(2);
    let input = document.getElementById('inputDetailsTip');
    input.value = newTipTotal;
}

checkFareType = (fareType) => {
    const invalidEntry = "Fare Type must be Metered or Flate";

    if (fareType == "Metered or Flat Rate") {
        alert(invalidEntry);
    }
}

checkPayType = (payType) => {
    const invalidEntry = "Payment Type must be Cash, Debit/Credit, or Charge";
    if (payType == "Cash, Debit/Credit or Charge") {
        alert(invalidEntry);
    }
}