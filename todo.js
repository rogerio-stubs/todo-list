const listElement = document.querySelector('.app ul')
const inputEelement = document.querySelector('.app input')
const buttonElement = document.querySelector('.app button')

var todos = []
var todosCheck = [] 

buttonElement.onclick = createTodo
// buttonElement.onclick = checkTodo // Não implementado
// buttonElement.onclick = deleteTodos // Não implementado

// acionados por btn
function createTodo() {

    const todoText = inputEelement.value
    
    if(validation(todoText)){
    addTodo(todoText)   
   }
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
    return templateTodo(input)
}

function templateTodo() {
    
}