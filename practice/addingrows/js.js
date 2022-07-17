setContent = () => {
    const content = document.getElementById('content');
    content.classList.toggle('contract');
}

expand = (index) => {
    const grid = "grid" + index;
    console.log(grid);
    const content = document.getElementById(grid); 
    console.log(content);
    
}

contract = () => {
    const content = document.getElementById('content');
    content.classList.toggle('contract');
}

const startingAddress = "randow value";

//Create an object for the html of the page
//TEST: Create the object, then use console to return values
let elementConstruct = {
    clGridWrapper: (index) => `<div class="grid-wrapper" id="grid${index}">`,
    // Call function clIndex() with index parameter passed to it
    clIndex: (index) =>  `<div class="index" id="${index}">${index}</div>`,
    // Call expand(); onClick event to expand and current row
    clExpCon: (index) => `<div class="expcon" onclick="expand(${index})">+</div>`,
    clTime: `<div class="startingtime">2:00PM</div>`,
    clStartingAdd: (add) => `<div class="starting">${add}</div>`,
    clEndingAdd: `<div class="starting">15 Mt. Pleasant Avenue, St. John's</div>`,
    clFare: `<div class="fare">$ 25.00</div>`,
    clRunningTotal: `<div class="runningtotal">$ 25.00</div>`,
    idContent: `<div id="content">`,
    clContentGridWrapper: `<div class="contentGridWrapper">`,
    clContentTotalTime: `<div class="contotaltime">Total Time:</div>`,
    clContentDistance: `<div class="condistance">Distance(km):</div>`,
    clContentFareType: `<div class="confaretype">Type of Fare:</div>`,
    clContentDollarPerKm: `<div class="condolperkm">$/km:</div>`,
    clContentFareTotal: `<div class="confaretotal">Total Fare:</div>`,
    clContentTip: `<div class="contip">Tip:</div>`,
    endingDiv: `</div>`
}

/*Adding a row*/
function addRow() {
    // Return the elements of the fareTable div
    const fareTableElement = document.getElementById("fareTable");
    // Count the elements of the fareTable div and return the current element count
    const fareTableCount = fareTableElement.childElementCount;

    const rowAdd =  elementFromHtml(
        elementConstruct.clGridWrapper(fareTableCount) +
        // Use the element count in fareTable from fareTableCount and fareTableElement to return proper index
        elementConstruct.clIndex(fareTableCount) +
        elementConstruct.clExpCon(fareTableCount) +
        elementConstruct.clTime +
        elementConstruct.clStartingAdd(startingAddress) +
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