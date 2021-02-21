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
    // Verificar o que tem check e retirar
    const node = document.querySelector('.to-do');
    if (node.parentNode)
        alert(node.parentNode)
        // node.parentNode.removeChild(node);
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
    input.setAttribute('id', 'elemento')
    li.appendChild(p);
    p.textContent = inputText;
    ul.appendChild(li);
}

 $(document).ready(() => {
     $(document).on('click', '#elemento', function() {
         if($(this).is(':checked')){
             alert('sim')
            //  $(this).css({'filter': 'blur(4px)'})
         }
     })
 })