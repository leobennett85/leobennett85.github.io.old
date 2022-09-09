removeModal = (modal) => {
  let element = document.getElementById(modal);
  element.remove();
};

beginModal = () => {
  createDriverModal();
};

createDriverModal = () => {
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Driver's Name"; //Text
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
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Broker's Name"; //Text
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
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Record Current Odometer Reading"; //Text
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
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Price of Gas:"; //Text
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
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Record Litres/100km"; //Text
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
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Dispatcher's Name"; //Text
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
      updateHeader(globalDriver, globalBroker, globalDispatcher);
      updateFooter(globalOdometer, globalGas, globalLitresPer);
      break;
  }
  checkModalGlobals();
};

isEnter = (input, name) => {
  if (event.keyCode == 13) {
    storeBeginInput(input, name);
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
        <div class="modalBanner1 checkers"></div>
        <div class="modalBanner2 checkers"></div>
        <div id="${modalTitleIndex}" class="modalHeader1">${modalTitle}</div>
        <input id="${modalInput}" class="modalInput" onkeypress="isEnter(${modalInput},${modalName})" autofocus />
        <div id="${modalDescIndex}" class="modalHeader2">${modalDescription}</div>
        <div class="btnModalEnter" onclick="storeBeginInput(${modalInput},${modalName})"><span class="material-icons" style="font-size: 62px">arrow_circle_right</span></div>
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
  const nodeBody = document.getElementById("nodeBody");
  nodeBody.appendChild(modal);
  document.getElementById(modalInput).focus();
};
