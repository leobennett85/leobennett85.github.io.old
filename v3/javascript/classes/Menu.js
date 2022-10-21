class Menu {
  constructor() {
    this.menuHTML = `
        <div id="addWrap">
        <div id="idMenuAddRun" class="doubleMenu">New Run</div>
        <div id="idMenuAddExpense" class="doubleMenu">New Expense</div>
        <div id="idBtnAdd" class="menuItem">
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

  get menuAddRun() {
    return document.getElementById("idMenuAddRun");
  }

  // Button Items

  get btnAdd() {
    return document.getElementById("idBtnAdd");
  }

  get btnUpdate() {
    return document.getElementById("idBtnUpdate");
  }

  get btnEdit() {
    return document.getElementById("idBtnEdit");
  }

  get btnEod() {
    return document.getElementById("idBtnEod");
  }

  // METHODS
  buildMenu = () => {
    this.menuWrap.innerHTML = this.menuHTML;
    const addMenu = this.btnAdd;
    const updateMenu = this.btnUpdate;
    const editMenu = this.btnEdit;
    const eodMenu = this.btnEod;
    const newRun = this.menuAddRun;
    const menuRef = this;

    // onClick event to activate menus
    addMenu.onclick = function () {
      menuRef.checkAdd();
    };
    updateMenu.onclick = function () {
      menuRef.checkUpdate();
    };
    editMenu.onclick = function () {
      menuRef.checkEdit();
    };
    eodMenu.onclick = function () {
      menuRef.checkEod();
    };
    newRun.onclick = function () {
      newRunIndex = newRunIndex + 1;
      menuRef.launchNewRunModal();
    };
  };

  checkAdd = () => {
    const menu = document.getElementById("addWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        this.hideAll();
        this.showAdd();
        break;
      case "0px":
        this.hideAdd();
        break;
    }
  };

  checkUpdate = () => {
    const menu = document.getElementById("updateWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        this.hideAll();
        this.showUpdate();
        break;
      case "0px":
        this.hideUpdate();
        break;
    }
  };

  checkEdit = () => {
    const menu = document.getElementById("editWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        this.hideAll();
        this.showEdit();
        break;
      case "0px":
        this.hideEdit();
        break;
    }
  };

  checkEod = () => {
    const menu = document.getElementById("eodWrap");
    const leftState = getComputedStyle(menu).left;
    console.log(leftState);
    switch (leftState) {
      case "-160px":
        this.hideAll();
        this.showEod();
        break;
      case "0px":
        this.hideEod();
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
    const totals = document.getElementById("totalsWrap");
    const map = document.getElementById("mapWrap");
    const add = document.getElementById("addWrap");
    const update = document.getElementById("updateWrap");
    const edit = document.getElementById("editWrap");
    const eod = document.getElementById("eodWrap");

    add.style.left = "-10rem";
    update.style.left = "-10rem";
    edit.style.left = "-10rem";
    eod.style.left = "-10rem";
    totals.style.left = "0px";
    map.style.left = "0px";
  };

  launchNewRunModal = () => {
    modalNewRunStand.buildModal();
  };
}
