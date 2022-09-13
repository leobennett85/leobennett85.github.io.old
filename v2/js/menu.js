checkAdd = () => {
  const menu = document.getElementById("addWrap");
  const leftState = getComputedStyle(menu).left;
  console.log(leftState);
  switch (leftState) {
    case "-176px":
      showAdd();
      break;
    case "0px":
      hideAdd();
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
  menu.style.left = "-11rem";
};

showUpdate = () => {
  const menu = document.getElementById("updateWrap");
  menu.style.left = "0";
};

hideUpdate = () => {
  const menu = document.getElementById("updateWrap");
  menu.style.left = "-11rem";
};

showEdit = () => {
  const menu = document.getElementById("editWrap");
  menu.style.left = "0";
};

hideEdit = () => {
  const menu = document.getElementById("editWrap");
  menu.style.left = "-11rem";
};

showEod = () => {
  const menu = document.getElementById("eodWrap");
  menu.style.left = "0";
};

hideEod = () => {
  const menu = document.getElementById("eodWrap");
  menu.style.left = "-11rem";
};
