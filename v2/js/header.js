let newHeader = {
  headerHtml: (
    headerDriver,
    headerBroker,
    headerOdometer,
    headerGas,
    headerLitresPer,
    headerDispatcher
  ) =>
    `<div id="${headerDriver}" class="header"></div>
    <div id="${headerBroker}" class="header"></div>
    <div id="${headerOdometer}" class="header"></div>
    <div id="${headerGas}" class="header"></div>
    <div id="${headerLitresPer} class="header"></div>
    <div id="${headerDispatcher} class="header"></div>`,
};

updateHeader = (
  headerDriver,
  headerBroker,
  headerOdometer,
  headerGas,
  headerLitresPer,
  headerDispatcher
) => {
  const nodeHeader = document.getElementById("headerWrap");
  const header = elementFromHtml(
    newHeader.headerHtml(
      headerDriver,
      headerBroker,
      headerOdometer,
      headerGas,
      headerLitresPer,
      headerDispatcher
    )
  );
  nodeHeader.appendChild(header);
};
