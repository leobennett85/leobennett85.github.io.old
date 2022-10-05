class Modal {
  constructor(modalName, modalTitle, modalDesc) {
    this.modalName = modalName;
    this.modalNameId = "id" + modalName;
    this.modalInfo = modalName + "Info";
    this.modalInfoId = "id" + this.modalInfo;
    this.modalTitle = modalTitle;
    this.modalTitleId = "id" + modalTitle;
    this.modalInput = modalName + "Input";
    this.modalInputId = "id" + this.modalInput;
    this.modalDesc = modalDesc;
    this.modalDescId = "id" + this.modalDesc;
  }

  // Getters

  get modal() {
    return document.getElementById("fullModal");
  }

  get modalContent() {
    return document.getElementById(`${this.modalNameId}`);
  }

  // Methods

  buildModal = () => {
    const html = `<div id="${this.modalNameId}" class="modal">
      <div id="${this.modalInfoId}" class="modalContent">
        <div id="${this.modalTitleId}" class="modalHeader1"></div>
        <input id="${this.modalInputId}" class="modalInput" onkeypress="isEnter(${this.modalInputId},${this.modalName})" autofocus />
        <div id="${this.modalDescId}" class="modalHeader2">${this.modalDesc}</div>
        <div class="btnModalEnter" onclick="console.log(${this.modalInputId},${this.modalName})"><span class="material-icons" style="font-size: 62px">arrow_circle_right</span></div>
      </div>
    </div>`;
    console.log(this.modal);
    this.modal.innerHTML = html;
  };

  openModal = () => {
    this.modalContent.style.display = "block";
  };

  closeModal = () => {
    this.modalContent.style.display = "none";
  };
}

isEnter = (input, name) => {
  if (event.keyCode == 13) {
    console.log(input, name);
  }
};
/*
class ModalBeginShift extends Modals {}

class ModalNewRun extends Modals {}

class ModalNewExpense extends Modals {}

class ModalUpdateGlobal extends Modals {}

class ModalEod extends Modals {}
*/
