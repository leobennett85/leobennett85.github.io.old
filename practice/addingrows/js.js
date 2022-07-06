/*Showing and hiding content*/
function setContent() {
    contract();
}

function expand() {
    let content = document.getElementById('content');

    //Make the content DIV visible
    content.classList.toggle('expand');
}

function contract(){
    document.getElementById('content').classList.toggle('contract');
}

//Create an object for the html of the page
//TEST: Create the object, then use console to return values
let elementConstruct = {
    clGridWrapper: `<div class="grid-wrapper">`,
    clIndex: `<div class="index">1</div>`,
    clExpCon: `<div class="expcon" onclick="expand()">+</div>`,
    clTime: `<div class="startingtime">2:00PM</div>`,
    clStartingAdd: `<div class="starting">15 Mt. Pleasant Avenue, St. John's</div>`,
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
    const rowAdd =  elementFromHtml(
        elementConstruct.clGridWrapper +
        elementConstruct.clIndex +
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

    document.getElementById("fareTable").appendChild(rowAdd);
}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}