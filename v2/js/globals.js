//Modal Globals
let globalDriver = "";
let globalBroker = "";
let globalOdometer = 0;
let globalGas = 0;
let globalLitresPer = 0;
let globalDispatcher = "";

//Calculated Globals
let globalDate = new Date();

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

getFormattedDate = () => {
  const d = new Date();
  let time = d.getTime();
  let formattedTime = d.toLocaleString(time);
  globalDate = formattedTime;
  checkCalcGlobals();
};
