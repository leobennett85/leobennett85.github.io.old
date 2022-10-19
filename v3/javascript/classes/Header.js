class Header {
  constructor() {
    this.headerHTML = `
        <div id="idHeaderTitle">TaxiStats</div>
        <div id="idHeaderDate" class="headerText">Date</div>
        <div id="idHeaderDriver" class="headerText">Driver:</div>
        <div id="idHeaderBroker" class="headerText">Broker:</div>
        <div id="idHeaderDispatcher" class="headerText">Dispatcher:</div>
        </div>`;
  }

  get headerWrap() {
    return document.getElementById("headerWrap");
  }

  get headerDate() {
    return document.getElementById("idHeaderDate");
  }

  // Method
  buildHeader = () => {
    // Generate Header HTML
    this.headerWrap.innerHTML = this.headerHTML;
    this.postDate();
  };

  postDate = () => {
    const d = new Date();
    let time = d.getTime();
    const formattedTime = d.toLocaleString(time);
    console.log(formattedTime);
    console.log(this.headerDate);
    const dateElement = document.getElementById("idHeaderDate");
    dateElement.innerHTML = "Date: " + formattedTime;
  };
}
