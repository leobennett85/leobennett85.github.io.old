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