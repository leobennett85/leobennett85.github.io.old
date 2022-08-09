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

//Create an object for the html of the page
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
    closeDiv: `</div><div></div>`
}

function addNewFareTable() {
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
        newGridInfo.clSpaceC5
    );

    fareTableElement.appendChild(addFare);
    setContent(fareTableCount);
}

/*TODO: Make a function and object to fill the totals menu*/

function updateTotals() {}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}