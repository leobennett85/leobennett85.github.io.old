// Create endModal instance to end modal builds

const endModal = new Modal("EndModal", "", "");

// Build BeginShift Modal

// Modal Declerations for BeginShift
const modalBeginDispatcher = new Modal(
  "BeginShift",
  "Enter Dispatcher's Name",
  endModal
);
const modalBeginLitresPer = new Modal(
  "BeginShift",
  "Enter Litres/100km",
  modalBeginDispatcher
);
const modalBeginGas = new Modal(
  "BeginShift",
  "Enter Current Price of Gas",
  modalBeginLitresPer
);
const modalBeginOdometer = new Modal(
  "BeginShift",
  "Enter Current Odometer Reading",
  modalBeginGas
);
const modalBeginBroker = new Modal(
  "BeginShift",
  "Enter Broker's Name",
  modalBeginOdometer
);

const modalBeginDriver = new Modal(
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
