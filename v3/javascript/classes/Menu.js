class Menu {
  constructor() {
    this.menuHTML = `
        <div id="addWrap">
        <div id="idMenuAddRun" class="doubleMenu">New Run</div>
        <div id="idMenuAddExpense" class="doubleMenu">New Expense</div>
        <div id="idBtnAdd" class="menuItem" onclick="checkAdd();">
          <span class="material-icons md-dark" style="font-size: 35px">
            add_circle_outline
          </span>
        </div>
      </div>

      <div id="updateWrap">
        <div id="idMenuUpdateGas" class="doubleMenu">Price of Gas</div>
        <div id="idMenuUpdateLitresPer" class="doubleMenu">L/100km</div>
        <div id="idBtnUpdate" class="menuItem" onclick="checkUpdate();">
          <span class="material-icons md-dark" style="font-size: 35px">
            update
          </span>
        </div>
      </div>

      <div id="editWrap">
        <div id="idMenuEdit" class="singleMenu">Edit</div>
        <div id="idBtnEdit" class="menuItem" onclick="checkEdit();">
          <span class="material-icons md-dark" style="font-size: 35px">
            edit
          </span>
        </div>
      </div>

      <div id="eodWrap">
        <div id="idMenuEod" class="singleMenu">End Of Day</div>
        <div id="idBtnEod" class="menuItem" onclick="checkEod();">
          <span class="material-icons md-dark" style="font-size: 35px">
            power_settings_new
          </span>
        </div>
      </div>`;
  }

  // GETTERS
  get menuWrap() {
    return document.getElementById("menuWrap");
  }

  // METHODS
  buildMenu = () => {
    this.menuWrap.innerHTML = this.menuHTML;
  };

  checkAdd = () => {
    const menu = document.getElementById("addWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        hideAll();
        showAdd();
        break;
      case "0px":
        hideAdd();
        break;
    }
  };

  checkUpdate = () => {
    const menu = document.getElementById("updateWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        hideAll();
        showUpdate();
        break;
      case "0px":
        hideUpdate();
        break;
    }
  };

  checkEdit = () => {
    const menu = document.getElementById("editWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        hideAll();
        showEdit();
        break;
      case "0px":
        hideEdit();
        break;
    }
  };

  checkEod = () => {
    const menu = document.getElementById("eodWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        hideAll();
        showEod();
        break;
      case "0px":
        hideEod();
        break;
    }
  };

  showAdd = () => {
    const menu = document.getElementById("addWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0";
  };

  hideAdd = () => {
    const menu = document.getElementById("addWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-10rem";
  };

  showUpdate = () => {
    const menu = document.getElementById("updateWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0";
  };

  hideUpdate = () => {
    const menu = document.getElementById("updateWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-10rem";
  };

  showEdit = () => {
    const menu = document.getElementById("editWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0";
  };

  hideEdit = () => {
    const menu = document.getElementById("editWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-10rem";
  };

  showEod = () => {
    const menu = document.getElementById("eodWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "0";
  };

  hideEod = () => {
    const menu = document.getElementById("eodWrap");
    menu.style.transition = "0.5s";
    menu.style.left = "-10rem";
  };

  hideAll = () => {
    const add = document.getElementById("addWrap");
    const update = document.getElementById("updateWrap");
    const edit = document.getElementById("editWrap");
    const eod = document.getElementById("eodWrap");

    add.style.left = "-10rem";
    update.style.left = "-10rem";
    edit.style.left = "-10rem";
    eod.style.left = "-10rem";
  };
}
