storeBeginInput = (currentInput, currentModal) => {
  currentInput = currentInput.id;
  currentModal = currentModal.id;
  const modalValue = document.getElementById(currentInput).value;
  let storageItem = "";
  switch (currentInput) {
    case "idBeginShiftInputDriver":
      globalDriver = modalValue;
      addLocalStorageItem("globalDriver", globalDriver);
      removeModal(currentModal);
      createBrokerModal();
      break;
    case "idBeginShiftInputBroker":
      globalBroker = modalValue;
      addLocalStorageItem("globalBroker", globalBroker);
      removeModal(currentModal);
      createOdometerModal();
      break;
    case "idBeginShiftInputOdometer":
      globalOdometer = modalValue;
      addLocalStorageItem("globalOdometer", globalOdometer);
      removeModal(currentModal);
      createGasModal();
      break;
    case "idBeginShiftInputGas":
      globalGas = modalValue;
      addLocalStorageItem("globalGas", globalGas);
      removeModal(currentModal);
      createLitresPerModal();
      break;
    case "idBeginShiftInputLitresPer":
      globalLitresPer = modalValue;
      addLocalStorageItem("globalLitresPer", globalLitresPer);
      removeModal(currentModal);
      createDispatcherModal();
      break;
    case "idBeginShiftInputDispatcher":
      globalDispatcher = modalValue;
      addLocalStorageItem("globalDispatcher", globalDispatcher);
      removeModal(currentModal);
      updateHeader(globalDriver, globalBroker, globalDispatcher);
      updateFooter(globalOdometer, globalGas, globalLitresPer);
      break;
  }
  console.log(localStorage);
  checkModalGlobals();
};
