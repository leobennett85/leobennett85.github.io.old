setMenus = () => {
  const add = document.getElementById("addWrap");
  const update = document.getElementById("updateWrap");
  const edit = document.getElementById("editWrap");
  const eod = document.getElementById("eodWrap");

  add.style.display = "none";
  update.style.display = "none";
  edit.style.display = "none";
  eod.style.display = "none";
};

getAddWrap = () => {
  const addWrap = document.getElementById("addWrap");
  return addWrap;
};

showWrap = (wrap) => {
  wrap.style.display = "block";
};

hideWrap = (wrap) => {
  wrap.style.display = "none";
};
