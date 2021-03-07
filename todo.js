const elementBtnSave = document.querySelector('.data-input button');
const elementInputText = document.querySelector('.data-input input');
const elementBtnDelete = document.querySelector('.clean button');

elementBtnSave.addEventListener('click', () => {
    validation(returnValue())
});

$(document).keypress((e) => {
    if (e.which == 13){
        e.preventDefault();
        validation(returnValue())
    }
});

function returnValue() {
    const inputText = elementInputText.value;
    elementInputText.value = '';
    return inputText;
}

function validation(inputText) {
    if (!inputText == "" && !(inputText.match(/^\s+$/))){
        toDo(inputText) 
    }
    else {
        alert('Informe um item!');
    }
}

function toDo(inputText) {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let p = document.createElement('p');

    let ul = document.querySelector('.to-do ul');
    li.appendChild(input);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'elemento')
    li.appendChild(p);
    p.textContent = inputText;
    ul.appendChild(li);
}

$(document).ready(() => {
    $(document).on('click', '#elemento', function () {
        if ($(this).is(':checked')) {
            $(this.parentNode).css({ 'filter': 'blur(4px)' })
        }
        else {
            $(this).closest("li").remove();
        }
    })
})