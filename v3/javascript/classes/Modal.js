// Modal Class to construct and display modals
class Modal {
  constructor(key, info, modalDesc, nextModal) {
    this.key = key;
    this.info = info;
    this.modalDesc = modalDesc;
    this.modalName = "id" + info + "Modal";
    this.modalInfo = "id" + info + "Info";
    this.modalTitleId = "id" + info + "ModalTitle";
    this.modalTitle = "TaxiStats";
    this.modalDescId = "id" + info + "ModalDesc";
    this.modalInputId = "id" + info + "ModalInput";
    this.modalInput = this.modalName + "Input";
    this.modalBtnId = "id" + info + "ModalBtn";
    this.modalHTML = `<div id="${this.modalName}" class="modal">
      <div id="${this.modalInfo}" class="modalContent">
        <div class="modalBanner1 checkers"></div>
        <div class="modalBanner2 checkers"></div>
        <div id="${this.modalTitleId}" class="modalHeader1">${this.modalTitle}</div>
        <input id="${this.modalInputId}" class="modalInput" />
        <div id="${this.modalDescId}" class="modalHeader2">${this.modalDesc}</div>
        <div id=${this.modalBtnId} class="btnModalEnter"><span class="material-icons" style="font-size: 62px">arrow_circle_right</span></div>
      </div>
    </div>`;
    this.nextModal = nextModal;
  }

  // Getters

  get fullModal() {
    return document.getElementById("fullModal");
  }

  get modal() {
    return document.getElementById(`${this.modalName}`);
  }

  get inputVal() {
    const input = document.getElementById(`${this.modalInputId}`).value;
    return input;
  }

  // Methods

  isEndModal = () => {
    // Close modal at last input
    this.closeModal();
    switch (this.info) {
      case "NewRun":
        const beginOdometer = window.localStorage.getItem(
          "beginOdometer_" + newRunIndex
        );
        const timeAcq = window.localStorage.getItem("timeAcq_" + newRunIndex);
        const standAcq = window.localStorage.getItem("standAcq_" + newRunIndex);
        const startingAdd = window.localStorage.getItem(
          "startingAddress_" + newRunIndex
        );
        const destinationAdd = window.localStorage.getItem(
          "destinationAddress_" + newRunIndex
        );
        const endOdometer = window.localStorage.getItem(
          "endOdometer_" + newRunIndex
        );
        const timeArrival = window.localStorage.getItem(
          "timeArrival_" + newRunIndex
        );
        const duration = window.localStorage.getItem("duration_" + newRunIndex);
        const distance = window.localStorage.getItem("distance_" + newRunIndex);
        const totalMeter = window.localStorage.getItem(
          "totalMeter_" + newRunIndex
        );
        const dolPerKm = window.localStorage.getItem("dolPerKm_" + newRunIndex);
        const fareType = window.localStorage.getItem("fareType_" + newRunIndex);
        const paymentType = window.localStorage.getItem(
          "paymentType_" + newRunIndex
        );
        const tip = window.localStorage.getItem("tip_" + newRunIndex);

        mainView.addRow(
          beginOdometer,
          timeAcq,
          standAcq,
          startingAdd,
          destinationAdd,
          endOdometer,
          timeArrival,
          duration,
          distance,
          totalMeter,
          dolPerKm,
          fareType,
          paymentType,
          tip
        );
    }
  };

  modalClick = () => {
    const modalStore = new Data();
    const value = this.inputVal;
    const key = this.key;
    const info = this.info;

    modalStore.storeItem(info, key, value);

    console.log(`Key: ${key} \nValue: ${value} \nInfo: ${info}`);

    if (this.nextModal === endModal) {
      this.isEndModal();
    } else {
      this.nextModal.buildModal();
    }
  };

  buildModal = () => {
    // Generate modal HTML
    this.fullModal.innerHTML = this.modalHTML;
    const submitModalInput = document.getElementById(this.modalBtnId);
    const modalRef = this;
    submitModalInput.onclick = function () {
      // If NewRun then add 1 to index

      modalRef.modalClick();
    };
  };

  openModal = () => {
    // Display Modal
    this.modal.style.display = "block";
  };

  closeModal = () => {
    // Hide Modal
    this.modal.style.display = "none";
  };

  // Method to preload local storage
  localStorageCheck = () => {};
}
