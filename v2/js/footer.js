updateFooter = (footerOdometer, footerGas, footerLitresPer) => {
  const nodeOdometer = document.getElementById("idFooterOdometer");
  const nodeGas = document.getElementById("idFooterGas");
  const nodeLitresPer = document.getElementById("idFooterLitresPer");

  nodeOdometer.innerHTML = "Begining Odometer: " + footerOdometer;
  nodeGas.innerHTML = "Price of Gas: " + footerGas;
  nodeLitresPer.innerHTML = "Litres / 100km: " + footerLitresPer;
};
