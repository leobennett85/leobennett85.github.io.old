//Set Date on Page onload();
postDate = () => {
  const headerDate = getFormattedDate();
  const dateElement = document.getElementById("idHeaderDate");
  dateElement.innerHTML = "Date: " + headerDate;
};

updateHeader = (headerDriver, headerBroker, headerDispatcher) => {
  const nodeDriver = document.getElementById("idHeaderDriver");
  const nodeBroker = document.getElementById("idHeaderBroker");
  const nodeDispatcher = document.getElementById("idHeaderDispatcher");

  nodeDriver.innerHTML = "Taxi Driver: " + headerDriver;
  nodeBroker.innerHTML = "Taxi Broker: " + headerBroker;
  nodeDispatcher.innerHTML = "Dispatcher: " + headerDispatcher;
};
