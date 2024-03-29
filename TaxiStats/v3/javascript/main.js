// Index Variables
let newRunIndex = 0;

// Create LocalStorage keys
const dataStore = new Data();

// Create header instance and post to site
const header = new Header();

// Create footer instance and post to site
const footer = new Footer();

// Create menu instance and post to site
const menu = new Menu();

// Create report instance and post to site
const report = new DataReport();

// Create main DataView
const mainView = new ViewMain();

// Create endModal instance to end modal builds
const endModal = new Modal("EndModal", "", "", "");

// Modal Declerations for BeginShift
const modalBeginDispatcher = new Modal(
  "dispatcherName",
  "BeginShift",
  "Enter Dispatcher's Name",
  endModal
);
const modalBeginLitresPer = new Modal(
  "litresPer",
  "BeginShift",
  "Enter Litres/100km",
  modalBeginDispatcher
);
const modalBeginGas = new Modal(
  "gasPrice",
  "BeginShift",
  "Enter Current Price of Gas",
  modalBeginLitresPer
);
const modalBeginOdometer = new Modal(
  "beginOdometer",
  "BeginShift",
  "Enter Current Odometer Reading",
  modalBeginGas
);
const modalBeginBroker = new Modal(
  "brokerName",
  "BeginShift",
  "Enter Broker's Name",
  modalBeginOdometer
);
const modalBeginDriver = new Modal(
  "driverName",
  "BeginShift",
  "Enter Driver's Name",
  modalBeginBroker
);

// Build NewRun Modal
const modalNewRunTip = new Modal("tip", "NewRun", "Enter Tip", endModal);
const modalNewRunPayType = new Modal(
  "paymentType",
  "NewRun",
  "Enter Type of Payment",
  modalNewRunTip
);
const modalNewRunFareType = new Modal(
  "fareType",
  "NewRun",
  "Enter Type of Fare",
  modalNewRunPayType
);
const modalNewRunTotalMeter = new Modal(
  "totalMeter",
  "NewRun",
  "Enter Total Meter",
  modalNewRunFareType
);
const modalNewRunEndOdometer = new Modal(
  "endOdometer",
  "NewRun",
  "Enter Current Odometer Reading",
  modalNewRunTotalMeter
);
const modalNewRunStopModal = new Modal(
  "stopModal",
  "NewRun",
  "Click here upon arrival to complete Run",
  modalNewRunEndOdometer
);
const modalNewRunDestinationAdd = new Modal(
  "destinationAddress",
  "NewRun",
  "Enter Destination Address",
  modalNewRunStopModal
);
const modalNewRunStartingAdd = new Modal(
  "startingAddress",
  "NewRun",
  "Enter Starting Address",
  modalNewRunDestinationAdd
);
const modalNewRunStandAcq = new Modal(
  "standAcq",
  "NewRun",
  "Enter Stand Number",
  modalNewRunStartingAdd
);
const modalNewRunBeginOdometer = new Modal(
  "beginOdometer",
  "NewRun",
  "Enter Current Odometer Reading",
  modalNewRunStandAcq
);

// Build NewExpense Modal
const modalNewExpenseCost = new Modal(
  "expenseCost",
  "NewExpense",
  "Enter Expense Cost",
  endModal
);
const modalNewExpenseItem = new Modal(
  "expenseItem",
  "NewExpense",
  "Enter Expense Item",
  modalNewExpenseCost
);
const modalNewExpensePerson = new Modal(
  "expensePerson",
  "NewExpense",
  "Broker or Driver Expense",
  modalNewExpenseItem
);

// Build UpdateGlobal Modal
const modalUpdateGlobalValue = new Modal(
  "UpdateGlobal",
  "Enter updated Value",
  endModal
);

const modalUpdateGlobalItem = new Modal(
  "UpdateGlobal",
  "Choose Global to Update",
  modalUpdateGlobalValue
);

// Build EOD Modal
