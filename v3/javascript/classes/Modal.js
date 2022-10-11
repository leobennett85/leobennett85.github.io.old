/*  Div constructor
modalName,
modalInfo,
modalTitle,
modalTitleIndex,
modalDescription,
modalDescIndex,
modalInput
=>
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
*/

/*  Example of Indexed names
  let modalNameIndex = modalName + info;
  let modalInfoIndex = modalInfo + info;
  let modalTitleIndex = modalTitleId + info;
  let modalDescIndex = modalDescId + info;
  let modalInputIndex = modalInput + info;
*/

/*  Example of data needed
  const modalName = "idBeginShiftModal";
  const modalInfo = "idBeginShiftInfo";
  const modalTitleId = "idBeginShiftModalTitle"; //ID
  const modalTitle = "TaxiStats"; //Text
  const modalDescId = "idBeginShiftModalDesc"; //ID
  const modalDescription = "Enter Driver's Name"; //Text
  const modalInput = "idBeginShiftInput";
  const info = "Driver";
*/
// Modal Class to construct and display modals
class Modal {
  constructor(info, modalDesc, nextModal) {
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
    this.modalHTML = `<div id="${this.modalName}" class="modal">;
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

  get input() {
    return document.getElementById(`${this.modalInputId.id}`);
  }

  // Methods

  isEndModal = () => {
    this.closeModal();
  };

  modalClick = () => {
    //value = this.input.value;
    //console.log(value);
    //addLocalStorageItem("globalOdometer", globalOdometer);
    //removeModal(currentModal);
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
}