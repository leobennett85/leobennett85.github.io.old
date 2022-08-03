setContent = (index) => {
    const getGridWrapperIndex = 'gridWrapper' + index;
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
    clIndex: (index) => `<div id="infoIndex${index}" class="infoStyle">${index}</div>`,
    clExpCon: (index) => `<div id="infoExpCon${index}" class="infoStyle" onClick="expand(${index});">+</div>`,
    clTime: `<div id="infoTime" class="infoStyle"></div>`,
    clStartAdd: `<div id="infoStartAdd" class="infoStyle"></div>`,
    clRunTotal: `<div id="infoRunTotal" class="infoStyle"></div>`,
    clSpaceRight: `<div class="space"></div>`,
    closeDiv: `</div></div>`,
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
        newGridInfo.clExpCon(fareTableCount) +
        newGridInfo.clTime +
        newGridInfo.clStartAdd +
        newGridInfo.clRunTotal +
        newGridInfo.clSpaceRight +
        newGridInfo.closeDiv +
        // gridDetails section
        newGridInfo.idGridWrapper(fareTableCount) +
        newGridInfo.idGridDetails +
        newGridInfo.idGridDetailsLayout +
        newGridInfo.clSpaceA1 +
        newGridInfo.clSpaceA2 +
        newGridInfo.clSpaceA3 +
        newGridInfo.clDetailsEndTime +
        newGridInfo.clDetailsDestination +
        newGridInfo.clDetailsFareTotal +
        newGridInfo.clSpaceB1 +
        newGridInfo.clSpaceB2 +
        newGridInfo.clSpaceB3 +
        newGridInfo.clSpaceB4 +
        newGridInfo.clDetailsTotalTime +
        newGridInfo.clDetailsDistance +
        newGridInfo.clDetailDollarsPerKm +
        newGridInfo.clSpaceC1 +
        newGridInfo.clSpaceC2 +
        newGridInfo.clSpaceC3 +
        newGridInfo.clSpaceC4 +
        newGridInfo.clDetailsFareType +
        newGridInfo.clDetailsTip +
        newGridInfo.clSpaceC5
    );

    fareTableElement.appendChild(addFare);
    setContent(fareTableCount);
}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}