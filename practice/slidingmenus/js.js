//Showing and hiding Rows
function setMenus() {
    hideMenu();
    hideTotals();
}

function showMenu() {
    let menu = document.getElementById('menu');
    let totals = document.getElementById('totals');
    
    //menu is deactive - totals is active
    if ((menu.classList.contains('deactivateMenu')) && (totals.classList.contains('activateTotals'))) {
        totals.classList.replace('activateTotals', 'deactivateTotals');
        menu.classList.replace('deactivateMenu', 'activateMenu');
    //menu is active - totals is deactive
    } else if ((menu.classList.contains('activateMenu')) && (totals.classList.contains('deactivateTotals'))) {
        menu.classList.replace('activateMenu', 'deactivateMenu');
    //menu is deactive - totals is deactive
    } else if ((menu.classList.contains('deactivateMenu')) && (totals.classList.contains('deactivateTotals'))) {
        menu.classList.replace('deactivateMenu','activateMenu');
    }
}

function showTotals() {
    let menu = document.getElementById('menu');
    let totals = document.getElementById('totals');
    
    //totals is deactive - menu is active
    if ((totals.classList.contains('deactivateTotals')) && (menu.classList.contains('activateMenu'))) {
        menu.classList.replace('activateMenu', 'deactivateMenu');
        totals.classList.replace('deactivateTotals', 'activateTotals');
    //totals is active - menu is deactive
    } else if ((totals.classList.contains('activateTotals')) && (menu.classList.contains('deactivateMenu'))) {
        totals.classList.replace('activateTotals', 'deactivateTotals');
    //totals is deactive - menu is deactive
    } else if ((totals.classList.contains('deactivateTotals')) && (menu.classList.contains('deactivateMenu'))) {
        totals.classList.replace('deactivateTotals','activateTotals');
    }
}

function hideMenu() {
    document.getElementById('menu').classList.toggle('deactivateMenu');
}

function hideTotals() {
    document.getElementById('totals').classList.toggle('deactivateTotals');
}
/*
//Adding Rows
function 
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
</div>
</div>
*/