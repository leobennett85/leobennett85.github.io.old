let globalDriver = "";
let globalBroker = "";
let globalOdometer = 0;
let globalGas = 0;
let globalLitresPer = 0;
let globalDispatcher = "";

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

getFormattedDate = () => {
  const d = new Date();
  let time = d.getTime();
  let formattedTime = d.toLocaleString(time);
  return formattedTime;
};
