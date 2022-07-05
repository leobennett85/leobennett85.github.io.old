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

/*Adding a row*/
function addRow() {
    const rowAdd =  elementFromHtml(`
        <div class="grid-wrapper">
            <div class="index">1</div>
            <div class="expcon" onclick="expand()">+</div>
            <div class="startingtime">2:00PM</div>
            <div class="starting">15 Mt. Pleasant Avenue, St. John's</div>
            <div class="ending">11 Fennelly's Rd, Portugal Cove</div>
            <div class="fare">$ 25.00</div>
            <div class="runningtotal">$ 25.00</div>
            <div id="content">
            <div class="contentGridWrapper">
            <div class="contotaltime">Total Time:</div>
            <div class="condistance">Distance(km):</div>
            <div class="confaretype">Type of Fare:</div>
            <div class="condolperkm">$/km:</div>
            <div class="confaretotal">Total Fare:</div>
            <div class="contip">Tip:</div>
        </div>
    `);

    document.getElementById("fareTable").appendChild(rowAdd);
}

function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}
