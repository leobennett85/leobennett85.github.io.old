function showAdd() {
    let menu = document.getElementById('add');
    menu.classList.toggle('showAdd');

    /*
    let menu = document.getElementById('menu');
    let totals = document.getElementById('totals');
    
    //menu is deactive - totals is active
    if ((menu.classList.contains('hideAdd')) && (totals.classList.contains('activateTotals'))) {
        totals.classList.replace('activateTotals', 'deactivateTotals');
        menu.classList.replace('hideAdd', 'showAdd');
    //menu is active - totals is deactive
    } else if ((menu.classList.contains('showAdd')) && (totals.classList.contains('deactivateTotals'))) {
        menu.classList.replace('showAdd', 'hideAdd');
    //menu is deactive - totals is deactive
    } else if ((menu.classList.contains('hideAdd')) && (totals.classList.contains('deactivateTotals'))) {
        menu.classList.replace('hideAdd','showAdd');
    }
    */
}

function showUpdate() {
    let menu = document.getElementById('update');
    menu.classList.toggle('showUpdate');
}

function showEdit() {
    let menu = document.getElementById('edit');
    menu.classList.toggle('showEdit');
}

function showEod() {
    let menu = document.getElementById('eod');
    menu.classList.toggle('showEod');    
}

/* old showTotals */
function showTotals() {
    let menu = document.getElementById('totals');
    menu.classList.toggle('showTotals');
}