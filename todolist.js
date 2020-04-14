const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')

let todos = [
  'Fazer café',
  'Estudar Javascript',
  'Praticar esportes'
]


function renderTodos(){
  listElement.innerHTML = ''

  for (todo of todos){
    let todoElement = document.createElement('li')
    let todoText = document.createTextNode(todo)

    let linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')
    let linkText = document.createTextNode('Excluir')

    let position = todos.indexOf(todo)
    linkElement.setAttribute('onclick', 'deleteTodo('+position+')')

    linkElement.appendChild(linkText)
    todoElement.appendChild(todoText)
    todoElement.appendChild(linkElement)
    listElement.appendChild(todoElement)
  }
}

renderTodos()

function newTodo(){
  let todoText = inputElement.value
  todos.push(todoText)
  inputElement.value = ''
  renderTodos()
}

buttonElement.onclick = newTodo

function deleteTodo(position){
  todos.splice(position, 1)
  renderTodos()
}