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
  getRawTime = () => {
    const d = new Date();
    const time = d.getTime();
    return time;
  };

  getDuration = () => {
    const jobTimeAcq = window.localStorage.getItem("timeAcq_" + newRunIndex);
    console.log("jobTimeAcq: " + jobTimeAcq);
    const jobTimeArrival = window.localStorage.getItem(
      "timeArrival_" + newRunIndex
    );
    console.log("jobTimeArrival: " + jobTimeArrival);
    const duration = +jobTimeArrival - +jobTimeAcq;
    const d = new Date(duration);
    const sec = d.getSeconds();
    // const min = d.getMinutes();
    console.log("In seconds: " + sec);
    return sec;
  };

  getDistance = () => {
    const beginOdo = window.localStorage.getItem(
      "beginOdometer_" + newRunIndex
    );
    const endOdo = window.localStorage.getItem("endOdometer_" + newRunIndex);
    const distance = beginOdo - endOdo;
    return distance;
  };

  getDolPerKm = (distance, totalMeter) => {
    let dolPerKm = totalMeter / distance;
    dolPerKm.toFixed(2);
    return dolPerKm;
  };

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
        switch (key) {
          case "stopModal":
            const jobAcqTime = this.getRawTime();
            window.localStorage.setItem(
              "timeArrival_" + newRunIndex,
              jobAcqTime
            );
            window.localStorage.setItem(
              "duration_" + newRunIndex,
              this.getDuration()
            );
            window.localStorage.setItem(
              "distance_" + newRunIndex,
              this.getDistance()
            );
            window.localStorage.setItem(
              "dolPerKm_" + newRunIndex,
              this.getDolPerKm(
                window.localStorage.getItem("distance_" + newRunIndex),
                window.localStorage.getItem("totalMeter_" + newRunIndex)
              )
            );
        }
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
