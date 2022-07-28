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
    idGridIndfo:        `<div id="gridInfo">`,
    idGridInfoLayout:       `<div id="gridInfoLayout">`,
    clSpaceLeft:               `<div class="space"></div>`,
    clIndex:                    `<div class="infoStyle index">1</div>`,
    clExpCon:                   `<div class="infoStyle expcon" onClick="expand();">+</div>`,
    clInfoStyle:                `<div class="infoStyle time">4:00PM</div>`,
    clStartAdd:                 `<div class="infoStyle startadd">15 Mt. Pleasant Avenue</div>`,
    clRunTotal:                 `<div class="infoStyle runtotal">25</div>`,
    clSpaceRight:               `<div class="space"></div>`,
    closeDiv:           `</div></div>`
}

let newGridDetails = {
    idGridDetails:          `<div id="gridDetails">`,
    idGridDetailsLayout:        `<div id="gridDetailsLayout">`,
    clSpace1:                       `<div class="space"></div>`,
    clSpace2:                       `<div class="space"></div>`,
    clSpace3:                       `<div class="space"></div>`,
    clDetailsEndTime:               `<div class="detailsStyle detailsEndTime">Arrival Time:</div>`,
    clDetailsDestination:           `<div class="detailsStyle detailsDestination">Destination Address:</div>`,
    clDetailsFareTotal:             `<div class="detailsStyle detailsFareTotal">Fare Total:</div>`,
    clSpace4:                       `<div class="space"></div>`,
    clSpace6:                       `<div class="space"></div>`,
    clSpace7:                       `<div class="space"></div>`,
    clSpace8:                       `<div class="space"></div>`,
    cldetailsTotalTime:             `<div class="detailsStyle detailsTotalTime">Total Time:</div>`,
    clDetailsDistance:              `<div class="detailsStyle detailsDistance">Distance (km):</div>`,
    clDetailDollarsPerKm:           `<div class="detailsStyle detailsDollarsPerKm">$/km:</div>`,
    clSpace9:                       `<div class="space"></div>`,
    clSpace10:                      `<div class="space"></div>`,
    clSpace11:                      `<div class="space"></div>`,
    clSpace12:                      `<div class="space"></div>`,
    clSpace13:                      `<div class="space"></div>`,
    clDetailsFareType:              `<div class="detailsStyle detailsFareType">FareType:</div>`,
    clDetailsTip:                   `<div class="detailsStyle detailsTip">Tip:</div>`,
    clspace14:                      `<div class="space"></div>`,
    closeDiv:               `</div><div>`
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
    End of old Object */
}

/*Adding a row*/
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

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}