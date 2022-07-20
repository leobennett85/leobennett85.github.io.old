setMenus = () => {
    let add = document.getElementById('add');
    let update = document.getElementById('update');
    let edit = document.getElementById('edit');
    let eod = document.getElementById('eod');
    let totals = document.getElementById('totals');

    add.classList.toggle('hideAdd');
    update.classList.toggle('hideUpdate');
    edit.classList.toggle('hideEdit');
    eod.classList.toggle('hideEod');
    totals.classList.toggle('hideTotals');
}

/*--Add show and hide--*/
showAdd = () => {
    let menu = document.getElementById('add');
    menu.classList.replace('hideAdd','showAdd');    
}

hideAdd = () => {
    let menu = document.getElementById('add');
    menu.classList.replace('showAdd','hideAdd');
}

clickAdd = () => {
    let menu = document.getElementById('add');
    if (menu.classList.contains('hideAdd')) {
        showAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    } else if (menu.classList.contains('showAdd')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    }
}

/*--Update show and hide--*/
showUpdate = () => {
    let menu = document.getElementById('update');
    menu.classList.replace('hideUpdate', 'showUpdate');
}

hideUpdate = () => {
    let menu = document.getElementById('update');
    menu.classList.replace('showUpdate','hideUpdate');
}

clickUpdate = () => {
    let menu = document.getElementById('update');
    if (menu.classList.contains('hideUpdate')) {
        hideAdd();
        showUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    } else if (menu.classList.contains('showUpdate')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    }
}
/*--Edit show and hide--*/
showEdit = () => {
    let menu = document.getElementById('edit');
    menu.classList.replace('hideEdit','showEdit');
}

hideEdit = () => {
    let menu = document.getElementById('edit');
    menu.classList.replace('showEdit','hideEdit');
}

clickEdit = () => {
    let menu = document.getElementById('edit');
    if (menu.classList.contains('hideEdit')) {
        hideAdd();
        hideUpdate();
        showEdit();
        hideEod();
        hideTotals();
    } else if (menu.classList.contains('showEdit')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    }
}

/*--Update show and hide--*/
showEod = () => {
    let menu = document.getElementById('eod');
    menu.classList.replace('hideEod','showEod');
}

hideEod = () => {
    let menu = document.getElementById('eod');
    menu.classList.replace('showEod','hideEod');
}

clickEod = () => {
    let menu = document.getElementById('eod');
    if (menu.classList.contains('hideEod')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        showEod();
        hideTotals();
    } else if (menu.classList.contains('showEod')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    }
}

/*--Totals show and hide--*/
showTotals = () => {
    let menu = document.getElementById('totals');
    menu.classList.replace('hideTotals', 'showTotals');
}

hideTotals = () => {
    let menu = document.getElementById('totals');
    menu.classList.replace('showTotals','hideTotals');
}

clickTotals = () => {
    let menu = document.getElementById('totals');
    if (menu.classList.contains('hideTotals')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        showTotals();
    } else if (menu.classList.contains('showTotals')) {
        hideAdd();
        hideUpdate();
        hideEdit();
        hideEod();
        hideTotals();
    }
}