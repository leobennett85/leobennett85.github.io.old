welcomeModal = () => {
  let modal = document.getElementById("welcomeModal");
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  let modal = document.getElementById("welcomeModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
