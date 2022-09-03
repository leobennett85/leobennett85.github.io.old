//Node Constants
const nodeHeader = document.getElementById("headerWrap");

//Modal Globals
let globalDriver = "";
let globalBroker = "";
let globalOdometer = 0;
let globalGas = 0;
let globalLitresPer = 0;
let globalDispatcher = "";

//Calculated Globals
let globalDate = new Date();
let estGasCost = 0;

//Console Logs for Globals
checkModalGlobals = () => {
  console.log(
    "Driver: " +
      globalDriver +
      "\n" +
      "Broker: " +
      globalBroker +
      "\n" +
      "Odometer: " +
      globalOdometer +
      "\n" +
      "Price of Gas: " +
      globalGas +
      "\n" +
      "Litres per 100: " +
      globalLitresPer +
      "\n" +
      "Dispatcher: " +
      globalDispatcher
  );
};

checkCalcGlobals = () => {
  console.log("Date: " + globalDate + "\n");
};

//Methods and Functions for Globals

elementFromHtml = (html) => {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content.firstElementChild;
};

getFormattedDate = () => {
  const d = new Date();
  let time = d.getTime();
  let formattedTime = d.toLocaleString(time);
  globalDate = formattedTime;
  checkCalcGlobals();
  return formattedTime;
};

getEstGasCost = () => {};
