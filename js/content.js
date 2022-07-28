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
    idGridIndfo: (index) => `<div id="gridInfo${index}">`,
    idGridInfoLayout: (index) => `<div id="gridInfoLayout${index}">`,
    clSpaceLeft: `<div class="space"></div>`,
    clIndex: (index) => `<div class="infoStyle${index} index${index}">${index}</div>`,
    clExpCon: (index) => `<div class="infoStyle${index} expcon${index}" onClick="expand();">+</div>`,
    clTime: (index) => `<div class="infoStyle${index} time${index}"></div>`,
    clStartAdd: (index) => `<div class="infoStyle${index} startadd${index}"></div>`,
    clRunTotal: (index) => `<div class="infoStyle${index} runtotal${index}"></div>`,
    clSpaceRight: `<div class="space"></div>`,
    closeDiv: `</div></div>`
}

let newGridDetails = {
    idGridDetails: (index) => `<div id="gridDetails${index}">`,
    idGridDetailsLayout: (index) => `<div id="gridDetailsLayout${index}">`,
    clSpaceA1: `<div class="space"></div>`,
    clSpaceA2: `<div class="space"></div>`,
    clSpaceA3: `<div class="space"></div>`,
    clDetailsEndTime: (index) => `<div class="detailsStyle${index} detailsEndTime${index}">Arrival Time:</div>`,
    clDetailsDestination: (index) => `<div class="detailsStyle${index} detailsDestination${index}">Destination Address:</div>`,
    clDetailsFareTotal: (index) => `<div class="detailsStyle${index} detailsFareTotal${index}">Fare Total:</div>`,
    clSpaceB1: `<div class="space"></div>`,
    clSpaceB2: `<div class="space"></div>`,
    clSpaceB3: `<div class="space"></div>`,
    clSpaceB4: `<div class="space"></div>`,
    clDetailsTotalTime: (index) => `<div class="detailsStyle${index} detailsTotalTime${index}">Total Time:</div>`,
    clDetailsDistance: (index) => `<div class="detailsStyle${index} detailsDistance${index}">Distance (km):</div>`,
    clDetailDollarsPerKm: (index) => `<div class="detailsStyle${index} detailsDollarsPerKm${index}">$/km:</div>`,
    clSpaceC1: `<div class="space"></div>`,
    clSpaceC2: `<div class="space"></div>`,
    clSpaceC3: `<div class="space"></div>`,
    clSpaceC4: `<div class="space"></div>`,
    clSpaceC5: `<div class="space"></div>`,
    clDetailsFareType: (index) => `<div class="detailsStyle${index} detailsFareType${index}">FareType:</div>`,
    clDetailsTip: (index) => `<div class="detailsStyle${index} detailsTip${index}">Tip:</div>`,
    clspaceD1: `<div class="space"></div>`,
    closeDiv: `</div><div>`
}

    /* old object
    idGridInfo: `<div id="">`,
    // Call function clIndex() with index parameter passed to it
    clIndex: (index) =>  `<div class="index" id="${index}">${index}</div>`,
    // Call expand(); onClick event to expand and current row
    clExpCon: `<div class="expCon" onclick="expand()">+</div>`,
    clTime: `<div class="startTime">2:00PM</div>`,
    clStartingAdd: `<div class="startAdd">11 Fennellys Rd</div>`,
    clEndingAdd: `<div class="endAdd">15 Mt. Pleasant Avenue, St. John's</div>`,
    clFare: `<div class="fare">$ 25.00</div>`,
    clRunningTotal: `<div class="runningTotal">$ 25.00</div>`,
    idContent: `<div id="content">`,
    clContentGridWrapper: `<div id="contentGridWrapper">`,
    clContentTotalTime: `<div class="conTotalTime">Total Time:</div>`,
    clContentDistance: `<div class="conDistance">Distance(km):</div>`,
    clContentFareType: `<div class="conFareType">Type of Fare:</div>`,
    clContentDollarPerKm: `<div class="conDolPerKm">$/km:</div>`,
    clContentFareTotal: `<div class="conFareTotal">Total Fare:</div>`,
    clContentTip: `<div class="conTip">Tip:</div>`,
    endingDiv: `</div>`
}
End of old Object */

function addNewFareTable() {
    const fareTableElement = document.getElementById("fareTable");
    const fareTableCount = fareTableElement.childElementCount;
    // gridInfo Section
    newGridInfo.idGridIndfo(fareTableCount) +
    newGridInfo.idGridInfoLayout(fareTableCount) +
    newGridInfo.clIndex(fareTableCount) +
    newGridInfo.clExpCon(fareTableCount) +
    newGridInfo.clTime(fareTableCount) +
    newGridInfo.clStartAdd(fareTableCount) +
    newGridInfo.clRunTotal(fareTableCount) +
    newGridInfo.clSpaceRight(fareTableCount) +
    newGridInfo.closeDiv

    // gridDetails section
    newGridDetails.idGridDetails(fareTableCount) +
    newGridDetails.idGridDetailsLayout(fareTableCount) +
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
}

/* old function 
/*Adding a row
function addRow() {
    // Return the elements of the fareTable div
    const fareTableElement = document.getElementById("fareTable");
    // Count the elements of the fareTable div and return the current element count
    const fareTableCount = fareTableElement.childElementCount;

    const rowAdd =  elementFromHtml(
        elementConstruct.clGridWrapper +
        // Use the element count in fareTable from fareTableCount and fareTableElement to return proper index
        elementConstruct.clIndex(fareTableCount) +
        elementConstruct.clExpCon +
        elementConstruct.clTime +
        elementConstruct.clStartingAdd +
        elementConstruct.clEndingAdd +
        elementConstruct.clFare +
        elementConstruct.clRunningTotal +
        elementConstruct.idContent +
        elementConstruct.clContentGridWrapper +
        elementConstruct.clContentTotalTime +
        elementConstruct.clContentDistance +
        elementConstruct.clContentFareType +
        elementConstruct.clContentDollarPerKm +
        elementConstruct.clContentFareTotal +
        elementConstruct.clContentTip +
        elementConstruct.endingDiv
    );

    fareTableElement.appendChild(rowAdd);
}
*/

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}