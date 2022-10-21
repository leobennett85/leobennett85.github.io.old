// Local storage and Data methods
class Data {
  constructor() {}

  // GETTERS
  get driver() {
    const driver = window.localStorage.getItem("driverName");
    return driver;
  }

  get broker() {
    const broker = window.localStorage.getItem("brokerName");
    return broker;
  }

  get beginOdometer() {
    const beginOdometer = window.localStorage.getItem("beginOdometer");
    return beginOdometer;
  }

  get gasPrice() {
    const gasPrice = window.localStorage.getItem("gasPrice");
    return gasPrice;
  }

  get litresPer() {
    const litresPer = window.localStorage.getItem("litresPer");
    return litresPer;
  }

  get dispatcher() {
    const dispatcher = window.localStorage.getItem("dispatcherName");
    return dispatcher;
  }

  // Methods

  storeItem(key, value) {
    window.localStorage.setItem(key, value);
  }
}
