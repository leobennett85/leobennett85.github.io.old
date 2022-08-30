let globalDriver = "";
let globalBroker = "";
let globalOdometer = 0;
let globalGas = 0;
let globalLitresPer = 0;
let globalDispatcher = "";

checkModalGlobals = () => {
  console.log(
    "Driver: " +
      globalDriver +
      "\n" +
      "Broker: " +
      globalBroker +
      "\n" +
      "Odometer: " +
      globalOdometer +
      "\n" +
      "Price of Gas: " +
      globalGas +
      "\n" +
      "Litres per 100: " +
      globalLitresPer +
      "\n" +
      "Dispatcher: " +
      globalDispatcher
  );
};

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

removeModal = (modal) => {
  let element = document.getElementById(modal);
  element.remove();
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
  const modalDescription = "Driver's Name:"; //Text
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
  const modalDescription = "Broker's Name:"; //Text
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

createOdometerModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Current Odometer Reading:"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Odometer";

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

createGasModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Price of Gas (can be updated):"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Gas";

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

createLitresPerModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Litres/100km (estimate refill cost): "; //Text
  const modalInput = "idBeginShiftInput";
  const info = "LitresPer";

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

createDispatcherModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats, Begin Your Shift:"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Dispatcher's Name:"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Dispatcher";

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

storeBeginInput = (currentInput, currentModal) => {
  currentInput = currentInput.id;
  currentModal = currentModal.id;
  const modalValue = document.getElementById(currentInput).value;
  switch (currentInput) {
    case "idBeginShiftInputDriver":
      globalDriver = modalValue;
      this.focus = true;
      removeModal(currentModal);
      createBrokerModal();
      break;
    case "idBeginShiftInputBroker":
      globalBroker = modalValue;
      removeModal(currentModal);
      createOdometerModal();
      break;
    case "idBeginShiftInputOdometer":
      globalOdometer = modalValue;
      removeModal(currentModal);
      createGasModal();
      break;
    case "idBeginShiftInputGas":
      globalGas = modalValue;
      removeModal(currentModal);
      createLitresPerModal();
      break;
    case "idBeginShiftInputLitresPer":
      globalLitresPer = modalValue;
      removeModal(currentModal);
      createDispatcherModal();
      break;
    case "idBeginShiftInputDispatcher":
      globalDispatcher = modalValue;
      removeModal(currentModal);
      break;
  }
  checkModalGlobals();
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
  nodeBody.appendChild(modal);
};
