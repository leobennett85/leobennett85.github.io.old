/*Showing and hiding content*/
function setContent() {
    contract();
}

function expand() {
    let content = document.getElementById('content');

    //Make the content DIV visible
    content.classList.toggle('expand');
}

function contract(){
    document.getElementById('content').classList.toggle('contract');
}

/*Adding a row*/
function addRow() {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = "";
    const wrapperelement = document.getElementById("fareTable");
    wrapperelement.appendChild(createDiv);    
}