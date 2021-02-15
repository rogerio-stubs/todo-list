const elementBtnSave = document.querySelector('.data-input button');
const elementInputText = document.querySelector('.data-input input');
const elementBtnDelete = document.querySelector('.clean button');

var toDo = [];

elementBtnSave.addEventListener('click', () => {
    const inputText = elementInputText.value;
    elementInputText.value = '';
    if(validation(inputText))
        addToDo(inputText)
});

elementBtnDelete.addEventListener('click', () => {
    const node = document.querySelector('.done');
    if (node.parentNode)
        node.parentNode.removeChild(node);
});

function validation(inputText) {
    if (!inputText == "" && !(inputText.match(/^\s+$/)))
        return true;
    alert('Informe um item!');
}

function addToDo(inputText) {
    toDo.push(inputText);
    let li = document.createElement('li');
    let input = document.createElement('input');
    let p = document.createElement('p');

    let ul = document.querySelector('.to-do ul');
    li.appendChild(input);
    input.setAttribute('type', 'checkbox')
    li.appendChild(p);
    p.textContent = inputText;
    ul.appendChild(li);
}