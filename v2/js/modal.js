elementFromHtml = (html) => {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
};

getFormattedDate = () => {
  const d = new Date();
  let time = d.getTime();
  let formattedTime = d.toLocaleString(time);
  return formattedTime;
};

beginModal = () => {
  /* Beggining Modal to capture:
    Date and time of Shift
    Name of Driver
    Name of Broker
    Odometer
    Price of Gas
    L/100 for Vehicle
    Dispatcher
    */
  // Create Modal and set IDs
  const beginDate = getFormattedDate();
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalDescription = "Enter Driver's Name:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalInput = "idBeginShiftInput";

  for (let i = 0; i < 7; i++) {
    /* Pseudo Code
      1. Create new Modal
      2. Pull data from the current Input box
      3. Move on to next Modal
    */
    let modalNameIndex = modalName + i;
    let modalInfoIndex = modalInfo + i;
    let modalTitleIndex = modalTitleId + i;
    let modalDescIndex = modalDescId + i;
    let modalInputIndex = modalInput + i;
    addNewModal(
      modalNameIndex,
      modalInfoIndex,
      modalTitleIndex,
      modalTitle,
      modalDescription,
      modalDescIndex,
      modalInputIndex
    );
    const showModal = document.getElementById(modalNameIndex);
    showModal.style.display = "block";
  }
};

let newModal = {
  modalHtml: (
    modalName,
    modalInfo,
    modalTitleIndex,
    modalTitle,
    modalDescIndex,
    modalDescription,
    modalInput
  ) =>
    `<div id="${modalName}" class="modal">
      <div id="${modalInfo}" class="modalContent">
      <span id="${modalTitleIndex}" class="modalHeader">${modalTitle}</span>
      <span id="${modalDescIndex}" class="modalText">${modalDescription}</span>
      <input id="${modalInput}" class="modalInput" />
      <span class="btnModalEnter">Enter</span>
    </div>`,
};

addNewModal = (
  modalName,
  modalInfo,
  modalTitleIndex,
  modalTitle,
  modalDescIndex,
  modalDescription,
  modalInput
) => {
  const nodeBody = document.getElementById("nodeBody");
  const modal = elementFromHtml(
    newModal.modalHtml(
      modalName,
      modalInfo,
      modalTitle,
      modalTitleIndex,
      modalDescIndex,
      modalDescription,
      modalInput
    )
  );
  nodeBody.appendChild(modal);
};
