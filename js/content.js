setContent = () => {
    const content = document.getElementById('content');
    content.classList.toggle('contract');
}

expand = () => {
    const content = document.getElementById('content');
    content.classList.toggle('expand');
}

contract = () => {
    const content = document.getElementById('content');
    content.classList.toggle('contract');
}

//Create an object for the html of the page
//TEST: Create the object, then use console to return values
let elementConstruct = {
    clGridWrapper: `<div id="gridWrapper">`,
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