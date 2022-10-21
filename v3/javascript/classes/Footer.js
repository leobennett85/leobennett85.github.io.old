class Footer {
  constructor() {
    this.footerHTML = `
    <div id="idFooterGas" class="footerText">Price of Gas:</div>
    <div id="idFooterLitresPer" class="footerText">Litres/100km:</div>
    <div id="idFooterOdometer" class="footerText">Starting Odometer:</div>`;
  }
  // GETTERS
  get footerWrap() {
    return document.getElementById("footerWrap");
  }

  get footerGas() {
    return document.getElementById("idFooterGas");
  }

  get footerLitresPer() {
    return document.getElementById("idFooterLitresPer");
  }

  get footerOdometer() {
    return document.getElementById("idFooterOdometer");
  }

  // METHODS
  // Set Date on Page onload()
  buildFooter = () => {
    // Generate Header HTML
    this.footerWrap.innerHTML = this.footerHTML;
  };

  updateGasPrice = () => {
    const gasPriceElement = this.footerGas;
    gasPriceElement.innerHTML = "Price of Gas: " + dataStore.gasPrice;
  };

  updateBeginOdometer = () => {
    const odometerElement = this.footerOdometer;
    odometerElement.innerHTML = "Starting Odometer: " + dataStore.beginOdometer;
  };

  updateLitresPer = () => {
    const litresPerElement = this.footerLitresPer;
    litresPerElement.innerHTML = "Dispatcher: " + dataStore.litresPer;
  };
}
