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

  get headerDriver() {
    return document.getElementById("idHeaderDriver");
  }

  get headerBroker() {
    return document.getElementById("idHeaderBroker");
  }

  get headerDispatcher() {
    return document.getElementById("idHeaderDispatcher");
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
    const dateElement = this.headerDate;
    dateElement.innerHTML = "Date: " + formattedTime;
  };

  updateDriver = () => {
    const driverElement = this.headerDriver;
    driverElement.innerHTML = "Driver: " + dataStore.driver;
  };

  updateBroker = () => {
    const brokerElement = this.headerBroker;
    brokerElement.innerHTML = "Broker: " + dataStore.broker;
  };

  updateDispatcher = () => {
    const dispatcherElement = this.headerDispatcher;
    dispatcherElement.innerHTML = "Dispatcher: " + dataStore.dispatcher;
  };
}
