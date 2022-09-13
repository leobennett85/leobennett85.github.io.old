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
