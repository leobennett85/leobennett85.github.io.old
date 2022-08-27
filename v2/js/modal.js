let globalDriver = "";
let globalBroker = "";
let globalOdometer = 0;
let globalGas = 0;
let globalLitresPer = 0;
let globalDispatcher = 0;

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
  const beginDate = getFormattedDate();
  createDriverModal();
};

createDriverModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Driver's Name:"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Driver";

  let modalNameIndex = modalName + info;
  let modalInfoIndex = modalInfo + info;
  let modalTitleIndex = modalTitleId + info;
  let modalDescIndex = modalDescId + info;
  let modalInputIndex = modalInput + info;

  // Create Driver Modal
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
};

createBrokerModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Broker's Name:"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Broker";

  let modalNameIndex = modalName + info;
  let modalInfoIndex = modalInfo + info;
  let modalTitleIndex = modalTitleId + info;
  let modalDescIndex = modalDescId + info;
  let modalInputIndex = modalInput + info;

  // Create Driver Modal
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
};
removeModal = (modal) => {
  const element = document.getElementById(modal);
  element.remove;
};
createOdometerModal = () => {};

createGasModal = () => {};

createLitresPerModal = () => {};

createDispatcherModal = () => {};

storeBeginInput = (currentInput, currentModal) => {
  currentInput = currentInput.id;
  currentModal = currentModal.id;
  const modalValue = document.getElementById(currentInput).value;
  console.log(modalValue);
  switch (currentInput) {
    case "idBeginShiftInputDriver":
      globalDriver = modalValue;
      removeModal(currentModal);
      createBrokerModal();
      break;
    case "idBeginShiftInputBroker":
      globalBroker = modalValue;
      removeModal(currentModal);
      createOdometerModal();
      break;
    case "idBeginShiftInputOdometer":
      console.log("Current Driver: " + modalValue);
      break;
    case "idBeginShiftInputGas":
      console.log("Current Driver: " + modalValue);
      break;
    case "idBeginShiftInputLitresPer":
      console.log("Current Driver: " + modalValue);
      break;
    case "idBeginShiftInputDispatcher:":
      console.log("Current Driver: " + modalValue);
      break;
  }
};

let newModal = {
  modalHtml: (
    modalName,
    modalInfo,
    modalTitle,
    modalTitleIndex,
    modalDescription,
    modalDescIndex,
    modalInput
  ) =>
    `<div id="${modalName}" class="modal">
      <div id="${modalInfo}" class="modalContent">
        <div id="${modalTitleIndex}" class="modalHeader">${modalTitle}</div>
        <div id="${modalDescIndex}" class="modalText">${modalDescription}</div>
        <input id="${modalInput}" class="modalInput" />
        <div class="btnModalEnter" onclick="storeBeginInput(${modalInput},${modalName})">Enter</div>
      </div>
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
  console.log("current modal: " + modalInput);
  nodeBody.appendChild(modal);
};
