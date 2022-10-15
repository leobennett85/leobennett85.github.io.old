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

  // METHODS
  // Set Date on Page onload()
  buildFooter = () => {
    // Generate Header HTML
    this.footerWrap.innerHTML = this.footerHTML;
  };

  updateFooter = (footerOdometer, footerGas, footerLitresPer) => {
    const nodeOdometer = document.getElementById("idFooterOdometer");
    const nodeGas = document.getElementById("idFooterGas");
    const nodeLitresPer = document.getElementById("idFooterLitresPer");

    nodeOdometer.innerHTML = "Begining Odometer: " + footerOdometer;
    nodeGas.innerHTML = "Price of Gas: " + footerGas;
    nodeLitresPer.innerHTML = "Litres / 100km: " + footerLitresPer;
  };
}
