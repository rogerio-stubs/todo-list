const listElement = document.querySelector('.app ul')
const inputEelement = document.querySelector('.app input')
const buttonElement = document.querySelector('.app button')


var todos = []
var todosCheck = [] 


buttonElement.onclick = createTodo
// buttonElement.onclick = checkTodo // Não implementado
// buttonElement.onclick = deleteTodos // Não implementado


function createTodo() {

    const todoText = inputEelement.value
    
    if(validation(todoText)){
        addTodo(todoText)        
   }
   console.log('todos', todos)
   console.log('check', todosCheck)
}

function checkTodo(index, input) {
    
    todos.splice(index, 1)
    todosCheck.push(input)
    templateTodo(input)
}

function deleteTodos() {
    
}

function validation(input) {

    if (!input == "" && !(input.match(/^\s+$/)))
        return true
    alert('Informe um item!')
}

function addTodo(input) {

    todos.push(input)
    templateTodo(input)
}

function templateTodo(input) {
    
    const li = document.createElement('li')
    
    li.setAttribute('id', todos.indexOf(input))
    li.innerHTML = input
    
    listElement.insertAdjacentElement('beforeend', li)
    inputEelement.value = ''
}