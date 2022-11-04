getSettingsId = () => {
  return document.getElementById("settingsContent");
};

getMenuId = () => {
  return document.getElementById("menuContent");
};

showSettingsContent = () => {
  const menu = getSettingsId();
  const menuState = getComputedStyle(menu).top;
  switch (menuState) {
    case "-130px":
      menu.style.top = "0px";
      break;
    case "0px":
      menu.style.top = "-130px";
      break;
  }
};

showMenuContent = () => {
  const menu = getMenuId();
  const menuState = getComputedStyle(menu).top;
  switch (menuState) {
    case "-130px":
      menu.style.top = "0px";
      break;
    case "0px":
      menu.style.top = "-130px";
      break;
  }
};

hideSettings = () => {
  const settings = getSettingsId();
  menu.style.top = "-130px";
};

hideMenu = () => {
  const menu = getMenuId();
  menu.style.top = "-130px";
};

document.addEventListener("click", checkMenus);

checkMenus = () => {};
