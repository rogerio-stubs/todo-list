const elementBtnSave = document.querySelector('.data-input button');
const elementInputText = document.querySelector('.data-input input');
const elementBtnDelete = document.querySelector('.clean button');

var toDo = [];

elementBtnSave.addEventListener('click', () => {
    const inputText = elementInputText.value;
    if(validation(inputText))
        addToDo(inputText)
});


elementBtnDelete.addEventListener('click', () => {
    const node = document.querySelector('.done');
    if (node.parentNode)
        node.parentNode.removeChild(node);
});


function validation(input) {
    if (!input == "" && !(input.match(/^\s+$/)))
        return true;
    alert('Informe um item!');
}

function addToDo(input) {
    toDo.push(input);
}