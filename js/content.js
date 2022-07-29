setContent = () => {
    const content = document.getElementById('gridDetails');
    content.classList.toggle('hide');
}

expand = () => {
    const content = document.getElementById('gridDetails');
    content.classList.toggle('show');
}

contract = () => {
    const content = document.getElementById('gridDetails');
    content.classList.toggle('hide');
}

//Create an object for the html of the page
let newGridInfo = {
    idGridIndfo: `<div id="gridInfo">`,
    idGridInfoLayout: `<div id="gridInfoLayout">`,
    clSpaceLeft: `<div class="space"></div>`,
    clIndex: (index) => `<div id="${index}" class="infoStyle">${index}</div>`,
    clExpCon: (index) => `<div id="expcon${index}" class="infoStyle" onClick="expand();">+</div>`,
    clTime: (index) => `<div id="time${index}" class="infoStyle"></div>`,
    clStartAdd: (index) => `<div id="startadd${index}" class="infoStyle"></div>`,
    clRunTotal: (index) => `<div id=runtotal${index}" class="infoStyle"></div>`,
    clSpaceRight: `<div class="space"></div>`,
    closeDiv: `</div></div>`
}

let newGridDetails = {
    idGridDetails: `<div id="gridDetails" class="gridDetailsStyle">`,
    idGridDetailsLayout:`<div id="gridDetailsLayout">`,
    clSpaceA1: `<div class="space"></div>`,
    clSpaceA2: `<div class="space"></div>`,
    clSpaceA3: `<div class="space"></div>`,
    clDetailsEndTime: (index) => `<div id= detailsEndTime${index}" class="detailsStyle">Arrival Time:</div>`,
    clDetailsDestination: (index) => `<div id="detailsDestination${index}" class="detailsStyle">Destination Address:</div>`,
    clDetailsFareTotal: (index) => `<div id="detailsFareTotal${index}" class="detailsStyle">Fare Total:</div>`,
    clSpaceB1: `<div class="space"></div>`,
    clSpaceB2: `<div class="space"></div>`,
    clSpaceB3: `<div class="space"></div>`,
    clSpaceB4: `<div class="space"></div>`,
    clDetailsTotalTime: (index) => `<div id="detailsTotalTime${index}" class="detailsStyle">Total Time:</div>`,
    clDetailsDistance: (index) => `<div id="detailsDistance${index}" class="detailsStyle">Distance (km):</div>`,
    clDetailDollarsPerKm: (index) => `<div id="detailsDollarsPerKm${index}" class="detailsStyle">$/km:</div>`,
    clSpaceC1: `<div class="space"></div>`,
    clSpaceC2: `<div class="space"></div>`,
    clSpaceC3: `<div class="space"></div>`,
    clSpaceC4: `<div class="space"></div>`,
    clSpaceC5: `<div class="space"></div>`,
    clDetailsFareType: (index) => `<div id="detailsFareType${index}" class="detailsStyle">FareType:</div>`,
    clDetailsTip: (index) => `<div id="detailsTip${index}" class="detailsStyle">Tip:</div>`,
    clspaceD1: `<div class="space"></div>`,
    closeDiv: `</div><div>`
}

function addNewFareTable() {
    const fareTableElement = document.getElementById("fareTable");
    const fareTableCount = fareTableElement.childElementCount;
    const addFare = elementFromHtml (
        // gridInfo Section
        newGridInfo.idGridIndfo +
        newGridInfo.idGridInfoLayout +
        newGridInfo.clSpaceLeft +
        newGridInfo.clIndex(fareTableCount) +
        newGridInfo.clExpCon(fareTableCount) +
        newGridInfo.clTime(fareTableCount) +
        newGridInfo.clStartAdd(fareTableCount) +
        newGridInfo.clRunTotal(fareTableCount) +
        newGridInfo.clSpaceRight +
        newGridInfo.closeDiv +
        // gridDetails section
        newGridDetails.idGridDetails +
        newGridDetails.idGridDetailsLayout +
        newGridDetails.clSpaceA1 +
        newGridDetails.clSpaceA2 +
        newGridDetails.clSpaceA3 +
        newGridDetails.clDetailsEndTime(fareTableCount) +
        newGridDetails.clDetailsDestination(fareTableCount) +
        newGridDetails.clDetailsFareTotal(fareTableCount) +
        newGridDetails.clSpaceB1 +
        newGridDetails.clSpaceB2 +
        newGridDetails.clSpaceB3 +
        newGridDetails.clSpaceB4 +
        newGridDetails.clDetailsTotalTime(fareTableCount) +
        newGridDetails.clDetailsDistance(fareTableCount) +
        newGridDetails.clDetailDollarsPerKm(fareTableCount) +
        newGridDetails.clSpaceC1 +
        newGridDetails.clSpaceC2 +
        newGridDetails.clSpaceC3 +
        newGridDetails.clSpaceC4 +
        newGridDetails.clDetailsFareType(fareTableCount) +
        newGridDetails.clDetailsTip(fareTableCount) +
        newGridDetails.clSpaceC5
    );

    fareTableElement.appendChild(addFare);
}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}