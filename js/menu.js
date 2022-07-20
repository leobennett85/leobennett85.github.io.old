showAdd = () => {
    hideAll();
    let menu = document.getElementById('add');
    menu.classList.toggle('showAdd');
}

showUpdate = () => {
    hideAll();
    let menu = document.getElementById('update');
    menu.classList.toggle('showUpdate');
}

showEdit = () => {
    hideAll();
    let menu = document.getElementById('edit');
    menu.classList.toggle('showEdit');
}

showEod = () => {
    hideAll();
    let menu = document.getElementById('eod');
    menu.classList.toggle('showEod');    
}

showTotals = () => {
    hideAll();
    let menu = document.getElementById('totals');
    menu.classList.toggle('showTotals');
}

hideAll = () => {
    let add = document.getElementById('add');
    let update = document.getElementById('update');
    let edit = document.getElementById('edit');
    let eod = document.getElementById('eod');
    let totals = document.getElementById('totals');

    add.classList.replace('showAdd', 'hideAdd');
    update.classList.replace('showUpdate', 'hideUpdate');
    edit.classList.replace('showEdit', 'hideEdit');
    eod.classList.replace('showEod', 'hideEod');
    totals.classList.replace('showTotals', 'hideTotals');

};