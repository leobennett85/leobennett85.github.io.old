// Create header instance and post to site
const header = new Header();

// Create footer instance and post to site
const footer = new Footer();

// Create menu instance and post to site
const menu = new Menu();

// Create report instance and post to site
const report = new DataReport();

// Create endModal instance to end modal builds
const endModal = new Modal("EndModal", "", "", "");

// Build BeginShift Modal

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
  "estGas",
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
const modalNewRunTip = new Modal("NewRun", "Enter Tip", endModal);
const modalNewRunTypePay = new Modal(
  "NewRun",
  "Enter Type of Payment",
  modalNewRunTip
);
const modalNewRunTypeFare = new Modal(
  "NewRun",
  "Enter Type of Fare",
  modalNewRunTypePay
);
const modalNewRunTotalFare = new Modal(
  "NewRun",
  "Enter Total Fare",
  modalNewRunTypeFare
);
const modalNewRunDestinationAdd = new Modal(
  "NewRun",
  "Enter Destination Address",
  modalNewRunTotalFare
);
const modalNewRunStartingAdd = new Modal(
  "NewRun",
  "Enter Starting Address",
  modalNewRunDestinationAdd
);
const modalNewRunStand = new Modal(
  "NewRun",
  "Enter Stand Number",
  modalNewRunStartingAdd
);

// Build NewExpense Modal
const modalNewExpenseCost = new Modal(
  "NewExpense",
  "Enter Expense Cost",
  endModal
);
const modalNewExpenseItem = new Modal(
  "NewExpense",
  "Enter Expense Item",
  modalNewExpenseCost
);
const modalNewExpensePerson = new Modal(
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
