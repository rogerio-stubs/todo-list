const elementBtnSave = document.querySelector('.data-input button');
const elementInputText = document.querySelector('.data-input input');
const elementBtnDelete = document.querySelector('.clean button');


elementBtnSave.addEventListener('click', () => {
    const inputText = elementInputText.value;
    elementInputText.value = '';
    if(validation(inputText))
        toDo(inputText)
});

elementBtnDelete.addEventListener('click', () => {
    const node = document.querySelector('.table');
    if (node.parentNode)
        node.parentNode.removeChild(node);
});

function validation(inputText) {
    if (!inputText == "" && !(inputText.match(/^\s+$/)))
        return true;
    alert('Informe um item!');
}

function toDo(inputText) {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let p = document.createElement('p');

    let ul = document.querySelector('.to-do ul');
    li.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('onclick', 'done()');
    li.appendChild(p);
    p.textContent = inputText;
    ul.appendChild(li);
}

function done() {
    let li = document.createElement('li');
    li.textContent = 'texto';

    let ul = document.querySelector('.table');
    ul.appendChild(li);
}