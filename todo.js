const elementBtnSave = document.querySelector('.data-input button');
const elementInputText = document.querySelector('.data-input input');
const elementBtnDelete = document.querySelector('.clean button');

elementBtnSave.addEventListener('click', () => {
    // adicionar elemento com o enter
    const inputText = elementInputText.value;
    elementInputText.value = '';
    if (validation(inputText))
        toDo(inputText)
});

function validation(inputText) {
    if (!inputText == "" && !(inputText.match(/^\s+$/)))
        return true;
    alert('Informe um item!');
}

function toDo(inputText) {
    // implementar a quebra de liha
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