setContent = () => {
    const content = document.getElementById('gridDetails');
    content.classList.toggle('hide');
}

expand = () => {
    console.log(this);
    /*
    const content = document.getElementById(gridWrapper);
    content.classList.toggle('show');*/
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
    clIndex: (index) => `<div id="infoIndex${index}" class="infoStyle">${index}</div>`,
    clExpCon: `<div id="infoExpCon" class="infoStyle" onClick="expand(this.id);">+</div>`,
    clTime: `<div id="infoTime" class="infoStyle"></div>`,
    clStartAdd: `<div id="infoStartAdd" class="infoStyle"></div>`,
    clRunTotal: `<div id="infoRunTotal" class="infoStyle"></div>`,
    clSpaceRight: `<div class="space"></div>`,
    closeDiv: `</div></div>`
}

let newGridDetails = {
    idGridWrapper: (index) => `<div id="gridWrapper${index}">`,
    idGridDetails: `<div id="gridDetails">`,
    idGridDetailsLayout:`<div id="gridDetailsLayout">`,
    clSpaceA1: `<div class="space"></div>`,
    clSpaceA2: `<div class="space"></div>`,
    clSpaceA3: `<div class="space"></div>`,
    clDetailsEndTime: `<div id= detailsEndTime" class="detailsStyle">Arrival Time:</div>`,
    clDetailsDestination: `<div id="detailsDestination" class="detailsStyle">Destination Address:</div>`,
    clDetailsFareTotal: `<div id="detailsFareTotal" class="detailsStyle">Fare Total:</div>`,
    clSpaceB1: `<div class="space"></div>`,
    clSpaceB2: `<div class="space"></div>`,
    clSpaceB3: `<div class="space"></div>`,
    clSpaceB4: `<div class="space"></div>`,
    clDetailsTotalTime: `<div id="detailsTotalTime" class="detailsStyle">Total Time:</div>`,
    clDetailsDistance: `<div id="detailsDistance" class="detailsStyle">Distance (km):</div>`,
    clDetailDollarsPerKm: `<div id="detailsDollarsPerKm" class="detailsStyle">$/km:</div>`,
    clSpaceC1: `<div class="space"></div>`,
    clSpaceC2: `<div class="space"></div>`,
    clSpaceC3: `<div class="space"></div>`,
    clSpaceC4: `<div class="space"></div>`,
    clSpaceC5: `<div class="space"></div>`,
    clDetailsFareType: `<div id="detailsFareType" class="detailsStyle">FareType:</div>`,
    clDetailsTip: `<div id="detailsTip" class="detailsStyle">Tip:</div>`,
    clspaceD1: `<div class="space"></div>`,
    closeDiv: `</div><div></div>`
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
        newGridInfo.clExpCon +
        newGridInfo.clTime +
        newGridInfo.clStartAdd +
        newGridInfo.clRunTotal +
        newGridInfo.clSpaceRight +
        newGridInfo.closeDiv +
        // gridDetails section
        newGridDetails.idGridWrapper(fareTableCount) +
        newGridDetails.idGridDetails +
        newGridDetails.idGridDetailsLayout +
        newGridDetails.clSpaceA1 +
        newGridDetails.clSpaceA2 +
        newGridDetails.clSpaceA3 +
        newGridDetails.clDetailsEndTime +
        newGridDetails.clDetailsDestination +
        newGridDetails.clDetailsFareTotal +
        newGridDetails.clSpaceB1 +
        newGridDetails.clSpaceB2 +
        newGridDetails.clSpaceB3 +
        newGridDetails.clSpaceB4 +
        newGridDetails.clDetailsTotalTime +
        newGridDetails.clDetailsDistance +
        newGridDetails.clDetailDollarsPerKm +
        newGridDetails.clSpaceC1 +
        newGridDetails.clSpaceC2 +
        newGridDetails.clSpaceC3 +
        newGridDetails.clSpaceC4 +
        newGridDetails.clDetailsFareType +
        newGridDetails.clDetailsTip +
        newGridDetails.clSpaceC5
    );

    fareTableElement.appendChild(addFare);
}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}