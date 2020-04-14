const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = [
  'Fazer café',
  'Estudar Javascript',
  'Praticar esportes'
]

function renderTodos(){
  for (todo of todos){
    let todoElement = document.createElement('li')
    let todoText = document.createTextNode(todo)
    todoElement.appendChild(todoText)
    listElement.appendChild(todoElement)
  }
}

renderTodos()