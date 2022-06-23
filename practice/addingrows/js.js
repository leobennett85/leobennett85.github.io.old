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