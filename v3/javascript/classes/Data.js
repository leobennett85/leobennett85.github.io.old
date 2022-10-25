// Local storage and Data methods
class Data {
  constructor() {}

  // GETTERS
  // BeginShift data
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

  // NewRun data

  // Methods

  storeItem(info, key, value) {
    switch (info) {
      // BeginShift data input
      case "BeginShift":
        window.localStorage.setItem(key, value);
        switch (key) {
          case "driverName":
            header.updateDriver();
            break;
          case "brokerName":
            header.updateBroker();
            break;
          case "beginOdometer":
            footer.updateBeginOdometer();
            break;
          case "gasPrice":
            footer.updateGasPrice();
            break;
          case "litresPer":
            footer.updateLitresPer();
            break;
          case "dispatcherName":
            header.updateDispatcher();
            break;
        }
        break;
      // NewRun data input
      case "NewRun":
        const indexedKey = key + "_" + newRunIndex;
        console.log("New Key: " + indexedKey);
        window.localStorage.setItem(indexedKey, value);
        break;
    }
  }

  pullNewRun = () => {
    const getStandAcq = "standAcq_" + newRunIndex;
    const getStartingAddress = "startingAddress_" + newRunIndex;
    const getDestinationAddress = "destinationAddress_" + newRunIndex;
    const getFareTotal = "fareTotal_" + newRunIndex;
    const getFareType = "fareType_" + newRunIndex;
    const getFarePayment = "paymentType_" + newRunIndex;
    const getTip = "tip_" + newRunIndex;

    mainView.addRow(
      getStandAcq,
      getStartingAddress,
      getDestinationAddress,
      getFareTotal,
      getFareType,
      getFarePayment,
      getTip
    );
  };
}
